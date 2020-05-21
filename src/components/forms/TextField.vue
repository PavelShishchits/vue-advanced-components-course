<template>
    <div>
        <label>{{ label }}</label>
        <input type="text"
           :value="value"
           @input="$emit('input', $event.target.value)"
           :placeholder="placeholder"
           :name="name"
        />
    </div>
</template>

<script>
    export default {
        props: ['placeholder', 'label', 'name', 'value'],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>