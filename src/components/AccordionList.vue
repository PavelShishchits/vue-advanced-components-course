<template>
    <div class="accordion-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {},
        provide() {
            return {
                accordionSharedData: this.accordionData
            }
        },
        data() {
            return {
                accordionData: {
                    activeItem: 1
                }
            }
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>