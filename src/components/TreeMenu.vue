<template>
    <div class="tree-menu">
        <div class="label-wrapper" @click="toggleInnerMenuVisibility" :class="{'has-children':hasInnerMenu}" :style="offset">{{ label }}</div>
        <tree-menu
            v-if="showInnerMenu"
            v-for="(node, i) in nodes"
            :key="i"
            :label="node.label"
            :nodes="node.nodes"
            :depth="depth + 1"
        ></tree-menu>
    </div>
</template>

<script>
    export default {
        name: 'tree-menu',
        props: ['nodes', 'label', 'depth'],
        data() {
            return {
                showInnerMenu: false
            }
        },
        methods: {
            toggleInnerMenuVisibility() {
                this.showInnerMenu = !this.showInnerMenu;
            }
        },
        computed: {
            offset() {
                return {
                    transform: `translate(${this.depth * 50}px)`
                }
            },
            hasInnerMenu() {
                return this.nodes && this.nodes.length > 0;
            }
        }
    }
</script>

<style lang="scss">

    .tree-menu {
        .label-wrapper {
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ccc;
            user-select: none;

            &.has-children {
                cursor: pointer;
            }
        }
    }

</style>