<template>
  <div class="wrapper" refs="aaaa">
    <ul class="content">
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
      <li>yes,indeed</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Category',

    data() {
        return {
            scroll:null
        };
    },
    created(){
       
    },
    mounted() {
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType:3,
            pullUpLoad: true
            
        })
        this.scroll.on('scroll',(position)=>{
            console.log(position);
        })
        this.scroll.on('pullingUp',()=>{
            console.log('你说的对');
        })
    },

    methods: {
        
    },
};
</script>

<style scoped>
.wrapper{
    height: 120px;
    background-color: black;
    overflow-y: hidden;
}
</style>