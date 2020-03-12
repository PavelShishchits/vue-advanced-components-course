<script>
    import {Sortable} from '@shopify/draggable';

    function move(items, oldIndex, newIndex) {
        const itemRemovedArray = [
            ...items.slice(0, oldIndex),
            ...items.slice(oldIndex + 1, items.length)
        ];

        return [
            ...itemRemovedArray.slice(0, newIndex),
            items[oldIndex],
            ...itemRemovedArray.slice(newIndex, itemRemovedArray.length)
        ]
    }

    export default {
        model: {
          prop: 'list',
          event: 'update'
        },
        props: {
            list: {
                required: true,
                type: Array
            }
        },
        provide() {
            return {
                sortableItemClass: this.sortableItemClass,
                sortableHandleClass: this.sortableHandleClass
            }
        },
        beforeCreate() {
            this.sortableItemClass = 'sortable-list-item';
            this.sortableHandleClass = 'sortable-list-handle';
        },
        mounted() {
            new Sortable(this.$el, {
                draggable: '.' + this.sortableItemClass,
                handle: '.' + this.sortableHandleClass,
                mirror: {
                    constrainDimensions: true
                }
            }).on('sortable:stop', ({oldIndex, newIndex}) => {
                this.$emit('update', move(this.list, oldIndex, newIndex));
            })
        },
        render() {
            return this.$scopedSlots.default({
                list: this.list
            });
        }
    }
</script>