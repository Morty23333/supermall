<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",

  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
            // console.log('eh...yes?');
            this.$emit('pullingUp')
        })
    }
    // 监听上拉事件
  },

  methods: {
    scrollTo(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },

    refresh() {
      this.scroll.refresh();
      // console.log('wait for it...');
    },
    getScrollY(){
        return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style scoped>
</style>