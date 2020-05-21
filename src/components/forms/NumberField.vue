<template>
    <div>
        <label>{{ label }}</label>
        <input type="number"
           :value="value"
           @input="$emit('input', $event.target.value)"
           :placeholder="placeholder"
           :name="name"
           :min="minValue"
        />
    </div>
</template>

<script>
    export default {
        props: ['placeholder', 'label', 'name', 'minValue', 'value'],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">

</style>