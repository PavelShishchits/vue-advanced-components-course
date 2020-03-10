<template>
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <button @click="showModal = true" class="btn btn-blue">Show Modal</button>
        <announcement-modal :show="showModal" @close="showModal = false"></announcement-modal>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur aut beatae ducimus, eaque enim fugiat iure iusto, maxime modi obcaecati officiis quae quibusdam rem repellat repellendus saepe, tenetur.
        </p>
    </div>
</template>

<script>
    import AnnouncementModal from '@/components/AnnouncementModal.vue';

    export default {
        data() {
            return {
                showModal: false
            }
        },
        components: {
            AnnouncementModal
        }
    }
</script>