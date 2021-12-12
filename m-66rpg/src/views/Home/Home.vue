<template>
  <div class="home-container">
    <!-- nav-bar -->
    <div class="my-navbar">
      <van-nav-bar fixed placeholder>
        <template #left>
          <van-tabs line-width="10px">
            <van-tab title="精选"></van-tab>
            <van-tab title="福利"></van-tab>
            <van-tab title="折扣"></van-tab>
          </van-tabs>
        </template>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>

    <div class="my-home-content">
      <!-- 轮播图 -->
      <div class="my-swipe">
        <van-swipe :autoplay="10000">
          <van-swipe-item v-for="item in swiperlist" :key="item.id">
            <img :src="item.mobile_img_url" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 十频 -->
      <div class="my-catlog">
        <van-grid :column-num="5" icon-size="40px" :border="false" square>
          <van-grid-item
            v-for="item in catloglist"
            :key="item.id"
            :icon="item.ticon"
            :text="item.tname"
          />
        </van-grid>
      </div>

      <!-- The Best -->
      <div class="my-thebest">
        <a :href="thebestlist.m_url"><img :src="thebestlist.m_pic" :title="thebestlist.title" /></a>
      </div>

      <!-- 编推 -->
      <div class="my-editor">
        <!-- 编推顶部 -->
        <van-nav-bar>
          <template #left>
            <span class="tname">编辑推荐</span>
          </template>
          <template #right>
            <van-tabs line-width="10px" @click="isNewBt">
              <van-tab title="最新" name="new"></van-tab>
              <van-tab title="完结" name="full"></van-tab>
            </van-tabs>
          </template>
        </van-nav-bar>
        <!-- 编推 内容 -->
        <van-swipe :loop="false" :width="174" v-if="isnewbt">
          <van-swipe-item class="my-swipe-bt" v-for="item in editorfavlist" :key="item.id">
            <div class="bt-content-top">
              <img :src="item.real_thumb" />
              <p class="bt-gname">{{ item.gname }}</p>
              <span class="bt-author">{{ item.author_uname }}</span>
            </div>
            <div class="bt-content-bottom">
              <div class="bt-spine"><img :src="item.spine" /></div>
              <div
                class="bt-tapes"
                :style="`background: url(${item.tapes});color:${item.font_colour}`"
              >
                {{ item.theme_content }}
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
        <van-swipe :loop="false" :width="174" v-else>
          <van-swipe-item class="my-swipe-bt" v-for="item in editorcompletelist" :key="item.id">
            <div class="bt-content-top">
              <img :src="item.real_thumb" />
              <p class="bt-gname">{{ item.gname }}</p>
              <span class="bt-author">{{ item.author_uname }}</span>
            </div>
            <div class="bt-content-bottom">
              <div class="bt-spine"><img :src="item.spine" /></div>
              <div
                class="bt-tapes"
                :style="`background: url(${item.tapes});color:${item.font_colour}`"
              >
                {{ item.theme_content }}
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import { getSswiperAPI, getCatLogAPI, getTheBestAPI, getEditorAPI } from '@/api/homeAPI.js'
export default {
  name: 'Home',
  data() {
    return {
      isnewbt: true,
      swiperlist: [],
      catloglist: [],
      thebestlist: [],
      editorfavlist: [],
      editorcompletelist: []
    }
  },
  created() {
    this.initSswiperList()
    this.initCatLogList()
    this.initTheBestList()
    this.initEditorFavList()
    this.initEditorCompleteList()
  },
  methods: {
    async initSswiperList() {
      const { data: res } = await getSswiperAPI()
      this.swiperlist = res.data.banner
      // console.log(this.swiperlist)
    },
    async initCatLogList() {
      const { data: res } = await getCatLogAPI()
      this.catloglist = res.data.cat_log
      // console.log(this.catloglist)
    },
    async initTheBestList() {
      const { data: res } = await getTheBestAPI()
      // console.log(res)
      this.thebestlist = res.data
      // console.log(this.thebestlist)
    },

    async initEditorFavList() {
      const { data: res } = await getEditorAPI()
      // console.log(res)
      this.editorfavlist = res.data.editor_fav
      console.log(this.editorfavlist)
    },
    async initEditorCompleteList() {
      const { data: res } = await getEditorAPI()
      // console.log(res)
      this.editorcompletelist = res.data.editor_complete
      console.log(this.editorcompletelist)
    },
    isNewBt(name) {
      if (name === 'new') {
        this.isnewbt = true
      } else {
        this.isnewbt = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
// home页面全局样式
.home-container {
  height: 3000px;
}
.my-home-content {
  background-color: #f7f7f7;
}
/deep/.van-tabs__nav {
  background-color: var(--color-background);
}
/deep/.van-nav-bar {
  z-index: 0;
}
/deep/.van-hairline--bottom::after {
  border-bottom-width: 0px;
}
// 顶部导航 精选、福利、折扣、搜索
/deep/.my-navbar .van-tab {
  padding: 0 10px;
  font-size: 16px;
}
/deep/.my-navbar .van-nav-bar {
  z-index: 1;
}
/deep/.my-navbar .van-hairline--bottom::after {
  border-bottom-width: 1px;
}
/deep/.my-navbar .van-tabs__nav {
  background-color: var(--color-navbar-background);
}
/deep/.my-navbar .van-tab.van-tab--active {
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
// 轮播图 swiper
.my-swipe {
  margin: 15px 20px 0px;
}
/deep/.my-swipe .van-swipe {
  border-radius: 6px;
}
/deep/.my-swipe .van-swipe-item img {
  border-radius: 6px;
}
/deep/.van-swipe-item img {
  width: 100%;
  height: 100%;
}
/deep/.van-swipe__indicators {
  display: none;
}
// 十频 catlog
.my-catlog {
  margin: 15px 20px 0px;
}
/deep/.van-grid-item__text {
  margin-top: 0 !important;
  color: var(--color-text);
}
/deep/.van-grid-item__content {
  background-color: var(--color-background);
}
// The Best
.my-thebest {
  margin: 15px 20px 0px;
}
.my-thebest img {
  width: 100%;
  border-radius: 7px;
}
// 编辑推荐 editor
.my-editor {
  margin: 15px 20px 0px;
}
.tname {
  font-size: 20px;
  font-weight: 700;
}
/deep/.my-editor .van-tab {
  margin-left: 8px;
  font-size: 12px;
}
/deep/.my-editor .van-nav-bar__content {
  background-color: var(--color-background);
}
/deep/.my-editor .van-tab.van-tab--active {
  color: var(--color-high-text) !important;
}
/deep/.my-editor .van-nav-bar__left,
/deep/.my-editor .van-nav-bar__right {
  padding: 0 !important;
}
// 编推内容
.my-swipe-bt {
  background: url('../../assets/images/common.png') no-repeat;
  background-size: 162px 177px;
  // margin-right: 12px;
}
/deep/.my-editor .van-swipe-item {
  // width: 162px;
  height: 177px;
  // margin-right: 12px;
  padding-right: 12px;
}
// 轮播图最后一个元素的bug
// .my-editor .my-swipe-bt:last-child {
//   padding-right: 0;
//   .bt-content-top img,
//   .bt-gname,
//   .bt-author,
//   .bt-tapes {
//     width: 152px;
//   }
// }

.bt-content-top {
  padding-left: 10px;
  img {
    border-radius: 0 6px 0 0;
  }
  .bt-gname,
  .bt-author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bt-gname {
    font-size: 14px;
    font-weight: 700;
    margin: 4px 0 2px;
  }
  .bt-author {
    font-size: 12px;
    color: #9597a8;
  }
}
.bt-content-bottom {
  display: flex;
  justify-content: space-around;
  .bt-spine {
    img {
      width: 4px;
      height: 24px;
    }
  }
  .bt-tapes {
    flex: 1;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    padding-left: 6px;
    margin-top: 3px;
    img {
      width: 158px;
    }
  }
}
</style>
