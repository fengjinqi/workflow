<template>
   <div> 
        <Top />
        <div class="search">
            <Fiter />
            <List />
        </div>
   </div>
</template>

<script>
    import Top from '@/components/top'//头部
    import Fiter from '@/components/fiter'//筛选
    import List from '@/components/list'//列表
    export default {
        name: "search",
        components:{
          Top,
          Fiter,
          List,
        },
    }
</script>

<style scoped lang="less">

</style>