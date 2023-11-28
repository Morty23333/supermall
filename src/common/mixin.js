import { debounce } from "./utils";

export const itemListener = {
    data() {
        return {
            itemImageListener : null,
            refresh:null
        }
        
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 100);
        this.itemImageListener = () => {
            this.refresh();
        }
        this.$bus.$on("itemImageLoad", this.itemImageListener);
    },
}