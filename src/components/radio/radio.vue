<template>
    <label :class="wrapClass">
        <span :class="radioClass">
          <span :class="innerClass"></span>
          <input type="radio"
                 :class="inputClass"
                 :disabled="disabled"
                 :checked="currentValue"
                 @change="change"
          >
        </span>
        <slot>{{label}}</slot>
    </label>
</template>
<script>
    const prefixCls = 'ivu-radio';
    import {findComponentUpward} from '../../utils/assist';
    export default {
        name: 'Radio',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: [Number, String]
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                currentValue: this.value,
                group: false,
                parent: findComponentUpward(this, 'RadioGroup')
            };
        },
        computed: {
            wrapClass(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: !!this.group,
                        [`${prefixCls}-wrapper-checked`]: !!this.currentValue,
                        [`${prefixCls}-disabled`]: !!this.disabled,
                    }
                ]
            },
            radioClass(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.disabled
                    }

                ]
            },
            innerClass () {
                return `${prefixCls}-inner`;
            },
            inputClass(){
                return `${prefixCls}-input`
            }
        },
        mounted(){
            if (this.parent) {
                this.group = true;
            }

            if (!this.group) {
                this.updateValue();
            }

        },
        methods: {
            change(event){
                if (this.disabled) return false;
                const checked = event.target.checked;
                this.currentValue = checked;
                if (!this.group) {
                    this.$emit('change', checked);
                }
                if (this.group && this.label !== undefined) {
                    this.parent.change({
                        value: this.label,
                        checked: this.value
                    });
                }

            },
            updateValue(){
                this.currentValue = this.value;
            }
        },
        watch: {
            value(){
                this.updateValue();
            }
        }
    }
</script>