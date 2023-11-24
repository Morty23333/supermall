<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :top-images="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";

import { getDetail, Goods, Shop } from "../../network/detail";

export default {
  name: "Detail",

  data() {
    return {
      iid: null,
      topImages: [],
      //   shop:[],
      //   goods:[]
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    DetailBaseInfo,
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
    });
  },
  methods: {},
};
</script>

<style scoped>
</style>