<template>
    <div class="max-w-sm mx-auto card mt-8">
        <label class="form-label mb-2">Renderless Tag Input</label>
        <render-less-tag-input :tags="tags" :remove-on-backspace="false" @update="updateTags">
            <template v-slot="{tags, removeTag, addTag, inputProps, inputEvents}">
                <div class="stacked-tag-input">
                    <div class="stacked-tag-input-form">
                        <input class="form-input" placeholder="Add tag..."
                               v-bind="inputProps"
                               v-on="inputEvents"
                        >
                        <button class="btn btn-indigo" @click="addTag">Add Tag</button>
                    </div>
                    <ul class="stacked-tag-list">
                        <li v-for="tag in tags" :key="tag">
                            {{ tag }}
                            <button type="button" class="stacked-tag-link" @click="removeTag(tag)">Remove</button>
                        </li>
                    </ul>
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