<template>
  <div :class="wrapClasses">
    <input
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :name="name"
      :value="currentValue"
      @keyup.enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange">
    <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-if="icon" @click="handleIconClick"></i>
  </div>
</template>
<script>
  const prefixCls = 'ivu-input';
  export default {
    name:'Input',
    props:{
      placeholder:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false
      },
      type: {
        validator (value) {
          return ['text','password'].includes(value);
        },
        default: 'text'
      },
      size: {
        validator (value) {
          return ['small', 'large'].includes(value);
        }
      },
      icon: String,
      readonly:{
        type:Boolean,
        default:false
      },
      value:{
        type:[String,Number]
      },
      name:{
        type:String
      }
    },
    computed:{
      wrapClasses(){
        return [
          `${prefixCls}-wrapper`
        ]
      },
      inputClasses(){
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-disabled`]: this.disabled
          }
        ]
      }
    },
    data(){
      return {
        currentValue:this.value,
        prefixCls: prefixCls,
      }
    },
    methods:{
      handleEnter(event){

      },
      handleFocus(event){

      },
      handleInput(event){

      },
      handleChange(event){

      },
      handleBlur(event){

      },
      handleIconClick(event){

      }
    }
  }
</script>