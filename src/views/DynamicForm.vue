<template>
    <form-generator :schema="schema" v-model="formData"></form-generator>
</template>

<script>
    import FormGenerator from "@/components/forms/FormGenerator";

    export default {
        props: {},
        components: {
            FormGenerator
        },
        data() {
            return {
                schema: [
                    {
                        fieldType: "Select",
                        name: "title",
                        multi: false,
                        label: "Title",
                        options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"],
                    },
                    {
                        fieldType: "TextField",
                        placeholder: "First Name",
                        label: "First Name",
                        name: "firstName",
                    },
                    {
                        fieldType: "TextField",
                        placeholder: "Last Name",
                        label: "Last Name",
                        name: "lastName",
                    },
                    {
                        fieldType: "NumberField",
                        placeholder: "Age",
                        name: "age",
                        label: "Age",
                        minValue: 0,
                    },
                ],
                formData: {
                    firstName: 'Pavel'
                }
            }
        }
    }
</script>

<style lang="scss">

</style>