<template>
    <div>
        <fetch-list class="mb-8" url="/contacts.json">
            <template v-slot="{list: contacts, isLoading}">
                <contacts-list :contacts="contacts">
                    <template v-slot:loader>
                        <div v-if="isLoading">Loading...</div>
                    </template>
                </contacts-list>
            </template>
        </fetch-list>
        <fetch-list class="mb-8" url="/albums.json">
            <template v-slot="{list: albums, isLoading}">
                <albums-list :albums="albums">
                    <template v-slot:loader>
                        <div v-if="isLoading">Loading...</div>
                    </template>
                </albums-list>
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