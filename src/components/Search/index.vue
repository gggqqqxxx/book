<template>
    <div class="search-popup">
        <div class="search">
            <mt-search ref="mtSearch" placeholder="地下城玩家" v-model="value"></mt-search>
        </div>
    </div>
</template>

<script>
    import { Search } from 'mint-ui';
    export default {
    data(){
        return {
            value:''
        }
    },
    created() {
        this.$nextTick(() => {
            let cancel = this.$refs.mtSearch.$el.querySelectorAll('.mint-searchbar-cancel')[0];
            cancel.onclick=()=>{
                console.log(this.$router.go(0));
            }
        })
     }
    }

</script>

<style lang="less" scoped>
    .search-popup {
        position: fixed;
        z-index: 20;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;

    .search {
        position: fixed;
        top: 0;
        width: 100%;
    }
    }
</style>
