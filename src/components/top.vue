<template>
    <div>
    <div class="top">
        <div class="main">
            <div class="top-main flex-j">
                <div>
                    <router-link :to="{name:'home'}"><img src="@/assets/logo.png" alt="" style="width:50px;"></router-link>
                </div>
                <div class="flex search">
                    <div class="search-left">搜单品</div>
                    <div><input type="text" placeholder="搜全网6085789件商品"></div>
                    <div class="search-btn">搜索</div>
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
                category:[]
            }
        },
        computed:{
            //全局购物车数量
            cartNum:function(){
                return ''
            }
        },
        components:{
            Navbar
        },
        created(){
            getIndexList(getToken('token')).then(res=>{
                if(res.code=='OK'){
                    this.category=res.data
                }
                console.log(res)
            })
        },
        methods: {
            //跳转到购物车
            tocart(){
                this.$router.push({
                    name: 'cart',
                })
            },
        }
    }
</script>

<style scoped lang="less">
.top{
    width: 100%;
    height: 144px;
    .top-main{
        padding:35px 67px 67px 67px;
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
</style>
