<template>
    <div>
        <swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
        <img :src="item.image" alt=""></a>
    </SwiperItem>
    </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
    name: 'HomeSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return[]
            }
        },
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>