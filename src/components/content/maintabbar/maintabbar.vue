<template>
  <Tabbar>
    <tabbarItem path="/home">
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
        
      <div slot="item-text">首页</div>
    </tabbarItem>
    <tabbarItem path="/category">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/cart">
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/profile">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from "../../common/tabbar/tabbar.vue";
import tabbarItem from "../../common/tabbar/tabbarItem.vue";

export default {
  name: "Maintabbar",

  data() {
    return {};
  },
  components: {
    Tabbar,
    tabbarItem,
  },
  methods: {},
};
</script>

<style scoped>
</style>