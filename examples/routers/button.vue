<template>
  <div>
    <article class="doc" v-html="article"></article>
    <div class="btn-group">
      <div>
        <Button>确定</Button>
        <Button type="primary">确定</Button>
        <Button type="ghost">确定</Button>
      </div>
      <div>
        <Button disabled>确定</Button>
        <Button type="primary" disabled>确定</Button>
        <Button type="ghost" disabled>确定</Button>
      </div>
      <div>
        <Button :loading=true>确定</Button>
        <Button type="primary" :loading=true>确定</Button>
        <Button type="ghost" :loading=true>确定</Button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .btn-group{
    & >div {
    margin: 20px 0px;
    }
  }
</style>
<script>
  let tpl = require("../../doc/html/button.html");
  export default {
    data(){
      return {
        article: tpl
      }
    }
  }
</script>