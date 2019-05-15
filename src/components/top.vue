<template>
    <div>
    <div class="top">
        <div class="main">
            <div class="top-main flex-j">
                <div>
                    <router-link :to="{name:'home'}" style="display: inline-block;background: #F9F9F9;color: #000;font-size: 30px;"> <span>智慧医械</span>
                        <!--<img src="@/assets/logo.png" alt="" style="width:50px;">-->
                    </router-link>
                </div>
                <div class="flex search">
                    <div class="search-left">
                        <el-dropdown trigger="click" @command="handleCommand">
                              <span class="el-dropdown-link">
                                {{commandVal}}
                              </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="1">搜单品</el-dropdown-item>
                                <el-dropdown-item command="2">搜套餐</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div><input type="text" v-model="val" placeholder="搜全网6085789件商品"></div>
                    <div class="search-btn" @click="go">搜索</div>
                </div>
                <div class="cart" @click="tocart">
                    <img src="" alt="" />
                    <span class="cart-name">我的购物车</span>
                    <span class="cart-num">{{cartNum}}</span>
                </div>
            </div>
        </div>
    </div>
    <navbar :list="category"/>
    </div>
</template>

<script>
    import Navbar from '@/components/navbar'
    import {getIndexList} from '@/api/user'
    import {getToken} from '@/libs/util'
    export default {
        name: "top",
        data(){
            return{
                category:[],
                type:'1',
                val:'',
                commandVal:'搜单品'//搜单品
            }
        },
        computed:{
            //全局购物车数量
            cartNum:function(){
                console.log()
                return this.$store.state.user.goods.length+this.$store.state.user.tao.definedPackageResponse.length+this.$store.state.user.tao.standardPackageResponse.length
            }
        },
        components:{
            Navbar
        },
        created(){
            getIndexList(getToken('token')).then(res=>{
                if(res.code=='OK'){

                    this.category = res.data.map((item)=>{
                        let currentItem = {
                            label: item.name,
                            value: item.id,
                            children: []
                        }
                        currentItem.children =item.categoryResponses.map((its)=>{
                                return{
                                    value:its.id,
                                    label:its.name
                                }
                            })
                        return currentItem;
                    })

                }

            })
        },
        methods: {
            go(){
                this.$store.commit('setTypes',this.type)

                if(this.type==1){
                    this.$router.push({
                        name:'search',
                        query:{
                            id:this.type,
                            val:this.val,
                        }
                    })
                    this.val=''
                }else{
                    this.$router.push({
                        name:'searchs',
                        query:{
                            id:this.type,
                            val:this.val,
                        }
                    })
                    this.val=''
                }
            },
            //跳转到购物车
            tocart(){
                this.$router.push({
                    name: 'cart',
                })
            },
            //下拉搜索
            handleCommand(command) {
                if(command=='1'){
                    this.commandVal="搜单品"
                    this.type=1
                    this.$store.commit('setTypes',this.type)
                } else{
                    this.commandVal="搜套餐"
                    this.type=0
                    this.$store.commit('setTypes',this.type)
                }
            },

        }
    }
</script>

<style scoped lang="less">
.top{
    width: 100%;
    height: 100px;
    .top-main{
        padding: 25px 67px 67px 67px;
        .search{
            height: 40px;
            line-height: 40px;
            border:1px solid #26B7BC;
            color: #999;
            overflow: hidden;
            .search-left{
                width: 100px;
                height: 100%;
                background-color: rgba(244, 244, 244, 1);
                text-align: center;

            }
            .search-btn{
                width: 100px;
                height: 100%;
                background-color: #26B7BC;
                text-align: center;
                color: #fff;
                font-size: 18px;
                cursor: pointer;
            }
            input{
                width: 300px;
                height: 100%;
                padding: 0 10px;
            }
        }
        .cart{
            width: 200px;
            background: #fff;
            color: #26B7BC;
            text-align: center;
            height: 40px;
            border: 1px solid #EEEEEE;
            cursor: pointer;
            .cart-name{
                margin:0 15px 0 10px;
                line-height: 40px;
            }
            .cart-num{
                color: #fff;
                background: #FF8819;
                display: inline-block;
                width: 20px;
                height: 20px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                line-height: 20px;
            }
        }
    }
}
.el-dropdown-link {
    cursor: pointer;
    color: #999;
}
.el-dropdown-menu{
    width: 100px;
}
    .el-dropdown{
        width: 100%;
        span{
            height: 100%;
            width:100%;
            display: inline-block;
        }
    }
</style>
