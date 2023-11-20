<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
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
      currentType: 'pop',
    };
  },
  computed:{
    showGoods(){
        return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
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
        // this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
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
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
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
</style>