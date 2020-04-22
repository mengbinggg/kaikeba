<template>
    <div>
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            value: {
                type: String
            },
        },
        methods: {
            onInput($event) {
               this.$emit('input', $event.target.value);
               this.$parent.$emit('validate'); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>