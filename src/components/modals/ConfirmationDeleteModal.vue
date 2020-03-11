<template>
    <modal-dialog :show="show" @close="close">
        <h1 class="text-center text-2xl font-bold mb-4">
            Are you sure?
        </h1>
        <p class="text-center text-grey-darker mb-6">
            Deleting your account cannot be undone.
        </p>
        <div class="text-center">
            <button @click="close" type="button" class="btn btn-grey mr-4">
                Cancel
            </button>
            <button @click="confirmDelete" type="button" class="btn btn-red">
                Delete it
            </button>
        </div>
    </modal-dialog>
</template>

<script>
    import ModalDialog from '@/components/modals/ModalDialog.vue';

    export default {
        components: {
            ModalDialog
        },
        props: {
            accountId: {
                type: Number,
                required: true
            },
            show: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            confirmDelete() {
                console.log(`deleting account №${this.accountId}`);
                this.close();
            },
            close() {
                this.$emit('close');
            }
        }
    }
</script>