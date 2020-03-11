export default {
    props: {
        show: {
            type: Boolean,
            required: true
        },
        preventBodyScrolling: {
            default: true
        }
    },
    created() {
        const escapeHandler = (e) => {
            if (this.show && e.key === 'Escape') {
                this.dismiss();
            }
        };
        document.addEventListener('keydown', escapeHandler);
        this.$once('hook:destroyed', () => {
            document.removeEventListener('keydown', escapeHandler);
        })
    },
    watch: {
        show: {
            immediate: true,
            handler(show) {
                if (show) {
                    this.preventBodyScrolling && document.body.style.setProperty('overflow', 'hidden');
                } else {
                    this.preventBodyScrolling && document.body.style.removeProperty('overflow');
                }
            }
        }
    },
    methods: {
        dismiss() {
            this.$emit('close');
        }
    }
}