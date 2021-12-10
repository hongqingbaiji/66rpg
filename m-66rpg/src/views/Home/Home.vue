<template>
  <div>
    <!-- nav-bar -->
    <van-nav-bar>
      <template #left>
        <van-tabs line-width="10px" title-active-color="red">
          <van-tab title="精选"></van-tab>
          <van-tab title="福利"></van-tab>
          <van-tab title="折扣"></van-tab>
        </van-tabs>
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="my-swipe">
      <van-swipe :autoplay="10000">
        <van-swipe-item v-for="item in bannerlist" :key="item.id">
          <!-- <img v-lazy="item" /> -->
          <!-- {{ item.mobile_img_url }} -->
          <img :src="item.mobile_img_url" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getBannerAPI } from '@/api/bannerAPI.js'
export default {
  name: 'Home',
  data() {
    return {
      bannerlist: []
    }
  },
  created() {
    this.initBannerList()
  },
  methods: {
    async initBannerList() {
      const { data: res } = await getBannerAPI()
      this.bannerlist = res.data.banner
      console.log(this.bannerlist)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-tab {
  padding: 0 15px;
  font-size: 16px;
}
/deep/.van-tab.van-tab--active {
  color: var(--color-high-text) !important;
  font-weight: 700;
}
/deep/.van-tabs__line {
  background-color: var(--color-high-text) !important;
}
/deep/.van-tabs__nav--line {
  padding-bottom: 7px;
}
/deep/.van-icon-search:before {
  color: var(--color-text);
}
/deep/.van-swipe {
  border-radius: 6px;
}
.my-swipe {
  background-color: #f7f7f7;
  padding: 10px 15px;
}
/deep/.van-swipe-item img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
/deep/.van-swipe__indicators {
  display: none;
}
</style>
