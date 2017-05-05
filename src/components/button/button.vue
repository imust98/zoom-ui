<template>
  <button :class="classes" :disabled="disabled"  @click="handleClick">
    <Icon class="ivu-load-loop" type="load-c" v-if="loading"></Icon>
    <span><slot></slot></span>
  </button>
</template>
<script>
  import Icon from '../icon';
  const prefixCls = 'ivu-btn';

  export default {
    name: 'Button',
    components: { Icon },
    props: {
      type: {
        validator (value) {
          return ['primary', 'ghost'].includes(value);
        }
      },
      size:{
        validator(value){
          return ['large','small'].includes(value);
        }
      },
      long: {
        type: Boolean,
        default: false
      },
      loading: Boolean,
      disabled: Boolean,
    },
    data () {
      return {
      };
    },
    computed:{
      classes(){
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-long`]: this.long,
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-loading`]:this.loading
          }
        ]
      }
    },
    methods:{
      handleClick(event){
        this.$emit('click',event);
      }
    }
  }
</script>