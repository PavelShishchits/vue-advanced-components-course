<template>
    <div class="card">
        <h1 class="text-2xl font-bold mb-6">Top Death Metal Albums</h1>
        <div class="album-grid">
            <div class="album-grid-item" v-for="album in albums">
                <img :src="album.artwork" class="" alt="">
                <h2 class="album-title">{{ album.title }}</h2>
                <p class="album-artist">{{ album.artist }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['albums'],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>