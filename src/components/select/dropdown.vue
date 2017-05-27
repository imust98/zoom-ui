<template>
    <div class="ivu-select-dropdown" :style="styles"><slot></slot></div>
</template>
<script>
    import { findComponentUpward } from '../../utils/assist';
    import Popper from 'popper.js';

    export default {
        name: 'Drop',
        props: {

        },
        data () {
            return {

            };
        },
        computed: {
            styles () {
                let style = {};
                if (this.width) style.width = `${this.width}px`;
                return style;
            }
        }
    };
</script>
