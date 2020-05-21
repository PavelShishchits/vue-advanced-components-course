<template>
    <div>
        <label>{{ label }}</label>
        <select
            :multi="multi"
            :name="name"
            :value="value"
            @change="$emit('input', $event.target.value)"
        >
            <option v-for="(option, i) in options" :key="i" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: ['name', 'multi', 'label', 'options', 'value'],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
    label {
        display: block;
    }
</style>