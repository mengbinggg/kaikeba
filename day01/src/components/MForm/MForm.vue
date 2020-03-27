<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rule: {
                type: Object
            }
        },
        methods: {
            validate(fn) {
                let validates = this.$children.filter((element)=>{
                    return element.props;
                }).map(element => {
                    return element.validate();
                });
                Promise.all(validates).then(() => {
                    console.log("验证通过");
                    fn();
                }, (err) => {
                    console.log(err);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>