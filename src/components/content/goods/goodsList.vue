<template>
    <div class="goods">
       <goodsListItem v-for="item in goods" :goodsItem="item"></goodsListItem>
    </div>
</template>

<script>
import goodsListItem from "./goodsListItem.vue";


export default {
    name: 'GoodsList',

    data() {
        return {
            
        };
    },
    props:{
        goods:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodsListItem
    },

    methods: {
        
    },
};
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
}
</style>