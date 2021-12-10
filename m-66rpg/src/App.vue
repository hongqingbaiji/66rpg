<template>
  <div>
    <!-- 路由导航 -->
    <router-view />

    <!-- tabbar 标签 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import './assets/css/base.css';
</style>
