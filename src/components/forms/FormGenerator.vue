<template>
    <form>
        <component
            v-for="(field, i) in schema"
            :key="i"
            :is="field.fieldType"
            :value="formData[field.name]"
            @input="updateField(field.name, $event)"
            v-bind="field"
        ></component>
    </form>
</template>

<script>
    import NumberField from "@/components/forms/NumberField";
    import TextField from "@/components/forms/TextField";
    import Select from "@/components/forms/Select";

    export default {
        props: ['schema', 'data'],
        model: {
            prop: 'data',
            event: 'updateFormData'
        },
        components: {
            NumberField,
            TextField,
            Select
        },
        data() {
            return {
                formData: this.data || {}
            }
        },
        methods: {
            updateField(fieldName, value) {
                this.$set(this.formData, fieldName, value);
                this.$emit('updateFormData', this.formData);
            }
        }
    }
</script>

<style lang="scss">

</style>