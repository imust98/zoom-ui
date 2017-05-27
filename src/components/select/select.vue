<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div :class="[prefixCls + '-selection']" ref="reference" @click="toggleMenu">
            <span :class="[prefixCls + '-placeholder']" v-show="showPlaceholder">{{placeholder}}</span>
            <span :class="[prefixCls + '-selected-value']" v-show="!showPlaceholder">{{selectedValue}}</span>
            <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']"></Icon>
        </div>
        <transition name="slide-up">
            <Drop v-show="visible" ref="dropdown">
                <ul :class="[prefixCls + '-dropdown-list']" ref="options">
                    <slot></slot>
                </ul>
            </Drop>
        </transition>
    </div>
</template>
<script>
    import Icon from '../icon';
    import Drop from './dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-select';

    export default {
        name: 'iSelect',
        mixins: [Emitter],
        components: {Icon, Drop},
        directives: {clickoutside},
        props: {
            value: {
                type: [String, Number, Array],
                default: ''
            },
            size: {
                validator (value) {
                    return ['small', 'large', 'default'].includes(value);
                }
            },
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false,
                options: [],
                optionInstances: [],
                model: this.value,
                placeholder: '请选择',
                selectedValue: ''
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            showPlaceholder(){
                if (this.model !== '') return false;
                return true;
            }
        },
        methods: {
            toggleMenu () {
                if (this.disabled) {
                    return false;
                }
                this.visible = !this.visible;
            },
            hideMenu(){
                this.visible = false;
                this.broadcast('iOption', 'on-select-close');
            },
            handleClose () {
                this.hideMenu();
            },
            // find option component
            findChild (cb) {
                const find = function (child) {
                    const name = child.$options.componentName;

                    if (name) {
                        cb(child);
                    } else if (child.$children.length) {
                        child.$children.forEach((innerChild) => {
                            find(innerChild, cb);
                        });
                    }
                };

                if (this.optionInstances.length) {
                    this.optionInstances.forEach((child) => {
                        find(child);
                    });
                } else {
                    this.$children.forEach((child) => {
                        find(child);
                    });
                }
            },
            triggerSelected(value){
                let label = '';
                this.findChild((child) => {
                    if (child.value === value) {
                        child.selected = true;
                        label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                    } else {
                        child.selected = false;
                    }
                });
            },
            updateSeletedValue(){
                for (let i = 0; i < this.options.length; i++) {
                    if (this.model === this.options[i].value) {
                        this.selectedValue = this.options[i].label;
                        break;
                    }
                }
                this.triggerSelected(this.model);
            },
            updateOptions(init){
                let options = [];
                let index = 1;

                this.findChild((child) => {
                    options.push({
                        value: child.value,
                        label: (child.label === undefined) ? child.$el.innerHTML : child.label
                    });
                    child.index = index++;

                    if (init) {
                        this.optionInstances.push(child);
                    }
                });

                this.options = options;

                if (init) {
                    this.updateSeletedValue();
                }
            }
        },
        mounted () {
            this.updateOptions(true);
            this.$on('on-select-selected', (value) => {
                if (this.model !== value) {
                    this.model = value;
                }
                this.hideMenu();
            });
        },
        watch: {
            value (val) {
                this.model = val;
            },
            model () {
                this.updateSeletedValue();
            }
        }
    };
</script>
