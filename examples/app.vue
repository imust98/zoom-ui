<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/icon">Icon</router-link></li>
        <li><router-link to="/button">Button</router-link></li>
      </ul>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less">
  .container {
    padding: 20px 20px 20px 0px;
    display: flex;
    nav {
      width: 200px;
      border-right: 1px solid #d4d4d4;
      color: #657180;
      li{
        &:hover{
            background: #f3f3f3;
        }
        a{
          padding: 10px 0px 10px 20px;
          display: block;
        }
      }
    }
    .main{
      padding-left: 20px;
      flex: 1;
    }
  }
</style>