<template>
    <div class="max-w-sm mx-auto card mt-8">
        <label class="form-label mb-2">Renderless Tag Input</label>
        <render-less-tag-input :tags="tags" @update="updateTags">
            <template v-slot="{tags, removeTag, inputProps, inputEvents}">
                <div class="tag-input">
                    <span v-for="tag in tags" :key="tag" class="tag-input-tag">
                        <span>{{ tag }}</span>
                        <button type="button" class="tag-input-remove" @click="removeTag(tag)">&times;</button>
                    </span>
                    <input
                        class="tag-input-text" placeholder="Add tag..."
                        v-bind="inputProps"
                        v-on="inputEvents"
                    />
                </div>
            </template>
        </render-less-tag-input>
    </div>
</template>

<script>
    import RenderLessTagInput from '@/components/RenderlessTagInput.vue';

    export default {
        components: {
            RenderLessTagInput
        },
        model: {
            prop: 'tags',
            event: 'update'
        },
        props: {
            tags: {
                required: true,
                type: Array
            }
        },
        methods: {
            updateTags(newTags) {
                this.$emit('update', newTags);
            }
        }
    }
</script>

<style lang="scss">

</style>