<template>
  <div class="backtop">
    <img src="../../../assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "backTop",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.backtop {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.backtop img{
    width: 50px;
}
</style>