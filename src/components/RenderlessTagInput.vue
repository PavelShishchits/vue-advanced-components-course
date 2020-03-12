<script>
    export default {
        props: {
            tags: {
                required: true,
                type: Array
            },
            removeOnBackspace: {
                default: true
            }
        },
        data() {
            return {
                input: ''
            }
        },
        methods: {
            removeTag(tag) {
                this.$emit('update', this.tags.filter((t) => t !== tag));
            },
            addTag() {
                if (this.newTag.length === 0 || this.tags.includes(this.newTag)) {
                    return false;
                }
                this.$emit('update', [...this.tags, this.newTag]);
                this.clearInput();
            },
            clearInput() {
                this.input = '';
            },
            handleBackspace() {
                if (this.newTag.length === 0) {
                    this.$emit('update', this.tags.slice(0, -1));
                }
            }
        },
        computed: {
            newTag() {
                return this.input.trim();
            }
        },
        render() {
            return this.$scopedSlots.default({
                tags: this.tags,
                removeTag: this.removeTag,
                addTag: this.addTag,
                inputProps: {
                    value: this.input
                },
                inputEvents: {
                    input: (e) => this.input = e.target.value,
                    keydown: (e) => {
                        if (e.key === 'Backspace' && this.removeOnBackspace) {
                            this.handleBackspace();
                        }
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            this.addTag();
                        }
                    }
                }
            });
        }
    }
</script>

<style lang="scss">

</style>