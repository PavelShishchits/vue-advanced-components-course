<template>
    <div>
        <fetch-list class="mb-8" url="/contacts.json">
            <template v-slot="{list: contacts, isLoading}">
                <div v-if="isLoading">Loading...</div>
                <contacts-list v-else :contacts="contacts"></contacts-list>
            </template>
        </fetch-list>
        <fetch-list class="mb-8" url="/albums.json">
            <template v-slot="{list: albums, isLoading}">
                <div v-if="isLoading">Loading...</div>
                <albums-list v-else :albums="albums"></albums-list>
            </template>
        </fetch-list>
    </div>
</template>

<script>
    import FetchList from '@/components/FetchList.vue';
    import ContactsList from '@/components/ContactsList.vue';
    import AlbumsList from '@/components/AlbumsList.vue';

    export default {
        components: {
            FetchList,
            ContactsList,
            AlbumsList
        }
    }
</script>

<style lang="scss">

</style>