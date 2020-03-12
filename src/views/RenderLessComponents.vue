<template>
    <div id="app" class="min-h-screen bg-grey-darker p-8">
        <inline-tag-input v-model="tags"></inline-tag-input>
        <stacked-tag-input v-model="tags"></stacked-tag-input>
    </div>
</template>

<script>
    import InlineTagInput from '@/components/InlineTagInput.vue';
    import StackedTagInput from '@/components/StackedTagInput.vue';

    export default {
        components: {
            InlineTagInput,
            StackedTagInput
        },
        data() {
            return {
                tags: ['html', 'css', 'js']
            }
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>