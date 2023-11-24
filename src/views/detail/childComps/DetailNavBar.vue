<template>
  <div>
    <navbar>
        <div slot="left" class="back" @click="backClick">
            <img src="../../../assets/img/common/back.svg" alt="">
        </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="titleItem" :class="{ active : index === currentIndex}" @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    navbar,
  },
  methods: {
    titleClick(index){
        this.currentIndex = index
    },
    backClick(){
        this.$router.back()
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.titleItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img{
    margin-top:12px;
}
</style>