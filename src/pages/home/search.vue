<template>
   <div>
        <div class="search">
            <Fiter :category="category" v-if="type==true"/>
            <template  v-if="list!=null&&list.list.length>0">
                <List :list="list"/>
            </template>

            <p v-else class="error">

                <img :src="src" alt="">
                <span>敬请商品更新</span>
            </p>
            <router-view></router-view>
        </div>
   </div>
</template>

<script>
    import {searchCategory} from '@/api/goods'
    import {getToken} from '@/libs/util'
    import Fiter from '@/components/fiter'//筛选
    import List from '@/components/list'//列表
    export default {
        name: "search",
        data(){
            return{
                id:'',
                src:require('../../assets/9275427C-CE92-4915-BAFF-290C1D28BB23@1x.png'),
                category:[],
                list:null,
                type:false
            }
        },
        components:{
          Fiter,
          List,
        },
        watch: {
            async $route() {
                this.id = this.$route.params.id
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                    await searchCategory(getToken('token'),this.id,1,20,'').then(res=>{
                        this.list = res.data
                        this.category = res.data
                        this.type=true
                        loading.close()
                    })
                //}

            }
        },
         created(){
            this.id = this.$route.params.id
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
                 searchCategory(getToken('token'),this.id,1,20,'').then(res=>{
                    this.list = res.data

                    this.category = res.data
                    loading.close()
                })
            //}


        }
    }
</script>

<style scoped lang="less">
    .list{margin-top:20px}
    .error{
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        span{
            display: block;
        }
    }
</style>
