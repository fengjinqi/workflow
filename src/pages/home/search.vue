<template>
   <div>
        <div class="search">
            <Fiter />
            <List />
            <router-view></router-view>
        </div>
   </div>
</template>

<script>
    import Fiter from '@/components/fiter'//筛选
    import List from '@/components/list'//列表
    export default {
        name: "search",
        data(){
            return{
                id:''
            }
        },
        components:{
          Fiter,
          List,
        },
        watch: {
            $route() {
                this.id = this.$route.params.id
            }
        },
        created(){
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped lang="less">
    .list{margin-top:20px}
</style>
