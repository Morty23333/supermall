<template>
    <div class="detail-swiper">
        <swiper class="swiperitem">
            <SwiperItem v-for="item in topImages">
            <img :src="item" alt=""></SwiperItem>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
    name: 'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return[]
            }
        }
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
.swiperitem{
    height: 300px;
    overflow: hidden;
}
</style>