<template>
  <div>
    <article class="doc" v-html="article"></article>
    <Input size="small" v-model="value1" icon="search" placeholder="请输入。。。" style="width: 200px"></Input>
    <Input size="large" v-model="value1" icon="search" placeholder="请输入。。。" style="width: 200px"></Input>
    <Input v-model="value1" icon="search" placeholder="请输入。。。" style="width: 200px"></Input>
  </div>
</template>
<script>
  let tpl = require("../../doc/html/input.html");
  export default {
    data(){
      return {
        value1:'',
        article:tpl
      }
    }
  }
</script>