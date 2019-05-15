<template>
   <div>
        <div class="search">
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
    import {searchTaaoCategorys} from '@/api/goods'
    import {getToken} from '@/libs/util'
    import List from '@/components/lists'//列表
    export default {
        name: "searchs",
        data(){
            return{
                id:'',
                src:require('../../assets/9275427C-CE92-4915-BAFF-290C1D28BB23@1x.png'),
                category:[],
                list:null,
            }
        },
        components:{
          List,
        },
        watch: {
            async $route() {
                this.id = this.$route.query.id?this.$route.query.id:''

                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });

                await searchTaaoCategorys(getToken('token'),this.id,1,20,this.$route.query.val?this.$route.query.val:'').then(res=>{
                    this.list = res.data
                    loading.close()
                })

            }
        },
        async created(){
            this.id = this.$route.query.id?this.$route.query.id:''
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });

            searchTaaoCategorys(getToken('token'),this.id,1,20,this.$route.query.val?this.$route.query.val:'').then(res=>{
                this.list = res.data
                console.log(this.list)
                loading.close()
            })

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
