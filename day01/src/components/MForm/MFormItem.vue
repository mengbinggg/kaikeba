<template>
    <div class="formItem">
        <label class="formItem__label" v-if="label">{{label + '：'}}</label>
        <slot></slot>
        <span class="formItem__errMsg" v-if="errMsg">{{errMsg}}</span>
    </div>
</template>

<script>
    import Schema from "async-validator";
    export default {
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            props: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                errMsg: ''
            }
        },
        mounted () {
            this.$on('validate', () => {
                this.validate();
            });
        },
        methods: {
            validate() {
                let value = this.form.model[this.props];
                let rule = this.form.rule[this.props];
                
                var validator = new Schema({[this.props]: rule});
                return validator.validate({[this.props]: value}, (err) => {
                    if(err) {
                        this.errMsg = err[0].message;
                    }else {
                        this.errMsg = '';
                    }
                });
            }
        },
    }
</script>

<style scoped>
.formItem {
    display: flex;
    align-items: center;
}
.formItem__label {
    margin-right: 10px;
    font-size: 18px;
    color: #333333;
}
.formItem__errMsg {
    margin-left: 15px;
    color: #c00;
}
</style>