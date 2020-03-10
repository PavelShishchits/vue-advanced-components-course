<template>
    <div class="modal-backdrop" v-show="show">
        <div class="modal">
            <h1 class="text-center text-2xl font-bold mb-4">
                Exciting new features are here!
            </h1>
            <p class="text-center text-grey-darker mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi quod tempore totam explicabo sit consectetur architecto? Tempora, repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
            </p>
            <div class="text-center">
                <button @click="dismiss" type="button" class="btn btn-blue">
                    Dismiss
                </button>
            </div>
        </div>
    </div>
</template>

<script>
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
</script>