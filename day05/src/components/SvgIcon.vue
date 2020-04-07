<template>
    <div>
        <svg aria-hidden="true" v-on="$listeners" :class="svgClass">
            <use :xlink:href="svgName"></use>
        </svg>
    </div>
</template>

<script>
    export default {
        props: {
            className: {
                type: String,
                default: ''
            },
        },
        computed: {
            svgClass() {
                if(this.className) {
                    return 'svg-icon ' + this.className;
                }
                return 'svg-icon';
            },
            svgName() {
                return `#icon-${this.className}`;
            }
        },
    }
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>