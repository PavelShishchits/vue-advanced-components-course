<template>
    <div>
        <user-settings-form :account-id="accountId"></user-settings-form>
    </div>
</template>

<script>
    import UserSettingsForm from '@/components/UserSettingsForm.vue'

    export default {
        components: {
            UserSettingsForm,
        },
        data() {
            return {
                accountId: 7,
            }
        }
    }
</script>