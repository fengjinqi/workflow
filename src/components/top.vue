<template>
    <div>
    <div class="top">
        <div class="main">
            <div class="top-main flex-j">
                <div><img src="@/assets/logo.png" alt="" style="width:50px;"></div>
                <div class="flex search">
                    <div class="search-left">搜单品</div>
                    <div><input type="text" placeholder="搜全网6085789件商品"></div>
                    <div class="search-btn">搜索</div>
                </div>
                <div class="cart">
                    <img src="" alt="" />
                    <span class="cart-name">我的购物车</span>
                    <span class="cart-num">8</span>
                </div>
            </div>
        </div>
    </div>
    <navbar />
    </div>
</template>

<script>
    import Navbar from '@/components/navbar'
    export default {
        name: "top",
        data() {
            return{

            }
        },
        components:{
            Navbar
        }
    }
</script>

<style scoped lang="less">
.top{
    width: 100%;
    height: 134px;
    .top-main{
        padding:36px 67px 0 67px;
        .search{
            height: 40px;
            line-height: 40px;
            border:1px solid #3198CD;
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
                background-color: #3198CD;
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
            color: #3198CD;
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
