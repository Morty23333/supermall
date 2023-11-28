<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" @titleClick="titleClick"></DetailNavBar>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></DetailGoodsInfo>
      <DetailParams :paramInfo="paramInfo" ref="params"></DetailParams>
      <DetailComment :commentInfo="commentInfo" ref="comment"></DetailComment>
      <GoodsList :goods="recommends" ref="recommend"></GoodsList>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailComment from "./childComps/DetailComment.vue";

import Scroll from "../../components/common/scroll/Scroll.vue";
import GoodsList from "../../components/content/goods/goodsList.vue";
import { itemListener } from "../../common/mixin.js";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";
import { debounce } from "../../common/utils";

export default {
  name: "Detail",
  mixin: [itemListener],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTops: [],
      getThemeTop: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    DetailBaseInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    GoodsList,
    Scroll,
  },
  mounted() {},
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;
    // 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 获取顶部图片
      //   console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //   创建店铺信息对象
      this.shop = new Shop(data.shopInfo);

      //   保存商品详情数据
      this.detailInfo = data.detailInfo;

      // 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //   取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];

        // console.log(this.commentInfo);
      }
    //   this.$nextTick(() => {
    //     this.themeTops = [];
    //     this.themeTops.push(0);
    //     this.themeTops.push(this.$refs.params.$el.offsetTop);
    //     this.themeTops.push(this.$refs.comment.$el.offsetTop);
    //     this.themeTops.push(this.$refs.recommend.$el.offsetTop);
    //     console.log(this.themeTops);
    //   });
    });
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });

    // 没反应是因为历史遗留问题
    this.getThemeTop = debounce(() => {
      //获取顶部导航栏提哦啊转位置的参数
      // 图片缓存影响高度，影响代码
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.params.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTops);
    }, 100);
  },
  destroyed() {
    // console.log('yep,im m..morty and i was destroyed');
    this.$bus.$off("itemImgLoad", itemListener);
  },
  methods: {
    imageLoad() {
      this.refresh();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 200);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>