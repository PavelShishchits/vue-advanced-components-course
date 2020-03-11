<template>
    <button type="button" @click="confirmDeleteModalOpen = true">
        <slot></slot>
        <confirmation-delete-modal
            :show="confirmDeleteModalOpen"
            :account-id="accountId"
            @close="confirmDeleteModalOpen = false"
        ></confirmation-delete-modal>
    </button>
</template>

<script>
    import ConfirmationDeleteModal from '@/components/modals/ConfirmationDeleteModal.vue';

    export default {
        props: ['accountId'],
        data() {
            return {
                confirmDeleteModalOpen: false
            }
        },
        components: {
            ConfirmationDeleteModal
        }
    }
</script>