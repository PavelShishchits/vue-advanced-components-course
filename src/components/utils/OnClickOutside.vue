<script>
    export default {
        props: {
            do: {
                type: Function,
                required: true
            }
        },
        mounted() {
            const listener = (e) => {
                if (e.target === this.$el || this.$el.contains(e.target)) {
                    return;
                }
                this.do();
            };
            document.addEventListener('click', listener);
            this.$once('hook:beforeDestroyed', () => {
                document.removeEventListener('click', listener);
            });
        },
        render() {
            return this.$slots.default;
        }
    }
</script>

<style lang="scss">

</style>