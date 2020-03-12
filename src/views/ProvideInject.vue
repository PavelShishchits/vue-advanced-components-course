<template>
    <div class="min-h-screen bg-grey-darker p-8">
        <div class="max-w-sm mx-auto">
            <accordion-list>
                <accordion-item :id="1">
                    <template v-slot:header>
                        Item A
                    </template>
                    <template v-slot:content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis, consectetur debitis deserunt dolorem doloribus error, et fugiat incidunt ipsum iure laboriosam laudantium necessitatibus quaerat quas rerum sapiente sed unde.
                    </template>
                </accordion-item>
                <accordion-item :id="2">
                    <template v-slot:header>
                        Item B
                    </template>
                    <template v-slot:content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis, consectetur debitis deserunt dolorem doloribus error, et fugiat incidunt ipsum iure laboriosam laudantium necessitatibus quaerat quas rerum sapiente sed unde.
                    </template>
                </accordion-item>
                <accordion-item :id="3">
                    <template v-slot:header>
                        Item C
                    </template>
                    <template v-slot:content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis, consectetur debitis deserunt dolorem doloribus error, et fugiat incidunt ipsum iure laboriosam laudantium necessitatibus quaerat quas rerum sapiente sed unde.
                    </template>
                </accordion-item>
            </accordion-list>
        </div>
    </div>
</template>

<script>
    import AccordionList from '@/components/AccordionList.vue';
    import AccordionItem from '@/components/AccordionItem.vue';

    export default {
        components: {
            AccordionList,
            AccordionItem
        },
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>