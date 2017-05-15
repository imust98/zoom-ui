<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-radio-group';
    import {findComponentsDownward} from '../../utils/assist';
    export default {
        name: 'RadioGroup',
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return ['small', 'large'].includes(value);
                }
            },
            type: {
                validator (value) {
                    return ['button'].includes(value);
                }
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                currentValue: this.value,
                children: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            }
        },
        mounted(){
            this.updateValue();
        },
        methods: {
            updateValue () {
                const value = this.value;
                this.childrens = findComponentsDownward(this, 'Radio');

                if (this.childrens) {
                    this.childrens.forEach(child => {
                        child.currentValue = value == child.label;
                        child.group = true;
                    });
                }
            },
            change (data) {
                this.currentValue = data.value;
                this.updateValue();
                this.$emit('on-change', data.value);
            }
        },
        watch: {
            value(){
                this.updateValue();
            }
        }
    }
</script>