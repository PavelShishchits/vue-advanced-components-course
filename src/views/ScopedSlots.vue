<template>
    <contacts-list>
        <template v-slot:title="{contact}">
            {{ contact.name.first }} {{ contact.name.last }}
        </template>
    </contacts-list>
</template>

<script>
    import ContactsList from '@/components/ContactsList.vue';

    export default {
        components: {
            ContactsList
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>