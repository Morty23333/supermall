<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <scroll class="content" ref="scroll" 
    :probe-type="3"
     @scroll="contentScroll" 
     :pull-up-load="true"
     @pullingUp="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommends="recommend"></HomeRecommend>
      <FeatureViews></FeatureViews>
      <tabControl
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      >
      </tabControl>
      <goodsList :goods="showGoods" />
    </scroll>
    <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import FeatureViews from "./childComps/FeatureViews.vue";

import NavBar from "../../components/common/navbar/NavBar.vue";
import tabControl from "../../components/content/tabControl/tabControl.vue";

import { getHomeMultidata, getHomeGoods } from "../../network/home.js";

import goodsListItem from "../../components/content/goods/goodsListItem.vue";
import goodsList from "../../components/content/goods/goodsList.vue";

import scroll from "../../components/common/scroll/Scroll.vue";

import backTop from "../../components/content/backTop/backTop.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureViews,
    tabControl,
    goodsListItem,
    goodsList,
    scroll,
    backTop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  mounted(){
    this.debounce(this.$refs.scroll.refresh,500)
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 监听item中的图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
        // console.log('you are right,but...');
        this.$refs.scroll.refresh()
    })
  },

  methods: {
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        // 接口错误
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
        // 刷新重新计算高度
        this.$refs.scroll.scroll.refresh()
      });
    },
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick(){
        // 不报错不能动
    //    this.$refs.scroll && this.$refs.scroll.scrollTo(0,0,4000)
    this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
        // it works
        // console.log(position);
       this.isShowBackTop = -(position.y) > 1000
    },
    loadMore(){
        // console.log('yes');
        this.getHomeGoods(this.currentType)
    },
    debounce(func,delay){
        let timer = null

        return function(...args){
            if(timer) clearTimeout(timer)
            timer = setimeout(()=>{
        func.apply(this,args)
        },delay)
        }

    }
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
}
</style>