<template>
    <portal to="modals" v-if="show">
        <div class="modal-backdrop" v-show="show">
            <div class="modal">
                <button @click="closeModal" class="close-btn">X</button>
                <slot></slot>
            </div>
        </div>
    </portal>
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
                    this.closeModal();
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
            closeModal() {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss">

    .modal {
        position: relative;
        
        .close-btn {
            position: absolute;
            right: 15px;
            top: 15px;
        }
    }

</style>