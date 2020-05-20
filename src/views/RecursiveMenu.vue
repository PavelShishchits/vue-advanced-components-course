<template>
    <tree-menu :label="menu.label" :nodes="menu.nodes" :depth="0"></tree-menu>
</template>

<script>
    import TreeMenu from '@/components/TreeMenu.vue';

    let tree = {
        label: 'root',
        nodes: [
            {
                label: 'item1',
                nodes: [
                    {
                        label: 'item1.1'
                    },
                    {
                        label: 'item1.2',
                        nodes: [
                            {
                                label: 'item1.2.1'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'item2'
            }
        ]
    }

    export default {
        components: {
            TreeMenu
        },
        props: {},
        data() {
            return {
                menu: tree
            }
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>