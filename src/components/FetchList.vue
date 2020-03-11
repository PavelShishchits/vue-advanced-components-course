<script>
    export default {
        props: {
            url: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                isLoading: false,
                list: []
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                this.isLoading = true;
                fetch(this.url, {
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }

                })
                    .then(response => response.json())
                    .then(contacts => {
                        setTimeout(() => {
                            this.list = contacts;
                            this.isLoading = false;
                        }, 2000);
                    })
            }
        },
        render() {
            return this.$scopedSlots.default({
                list: this.list,
                isLoading: this.isLoading
            })
        }
    }
</script>

<style lang="scss">

</style>