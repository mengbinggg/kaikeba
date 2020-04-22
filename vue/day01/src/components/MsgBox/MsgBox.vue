<template>
    <div class="msgBox" v-if="isShow">
        <span class="msgBox__closeBtn" @click="hideBox">x</span>
        <div class="msgBox__content">
            <span class="msgBox__title">{{title}}</span>
            <div class="msgBox__info">{{content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 3000
            }
        },
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            showBox() {
                this.isShow = true;
                setTimeout(() => {
                    this.hideBox();
                }, this.duration);
            },
            hideBox() {
                this.isShow = false;
                this.destroy();
            }
        },
    }
</script>

<style scoped>
.msgBox {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
    border: 1px solid #cccccc;
    box-shadow: 5px 5px 10px #eeeeee;
}
.msgBox__closeBtn {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}
.msgBox__content {
    height: 100%;
    box-sizing: border-box;
    padding-top: 30px;
}
.msgBox__title {
    text-align: center;
    display: block;
}
.msgBox__info {
    padding: 10px;
}
</style>