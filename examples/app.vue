<template>
  <div class="container">
    <nav>
      <ul>
        <li :class="{checked:path==='/icon'}"><router-link to="/icon">Icon 图标</router-link></li>
        <li :class="{checked:path==='/button'}"><router-link to="/button">Button 按钮</router-link></li>
        <li :class="{checked:path==='/input'}"><router-link to="/input">Input 输入框</router-link></li>
      </ul>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less">
  @import "../src/styles/index.less";
</style>
<script>
  export default{
    data(){
      return {

      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods:{
      fetchData(){
        this.path = this.$route.path;
      }
    }
  }
</script>