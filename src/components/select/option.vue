<template>
    <li :class="classes" @click.top="select">
        <slot>{{label}}</slot>
    </li>
</template>
<script>
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-select-item';

    export default {
        name: 'iOption',
        mixins: [Emitter],
        componentName: 'select-item',
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
        ,
        data(){
            return {
                selected: false,
                index: 0
            };
        },
        computed: {
            classes()
            {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                    }
                ];
            }
        },
        methods: {
            select(){
                if (this.disabled) return;
                this.dispatch('iSelect', 'on-select-selected', this.value);
            }
        }
    };
</script>
