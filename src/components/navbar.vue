<template>
    <div class="nav">
        <div class="main">
            <div class="flex">
                <div>
                    <el-cascader
                            placeholder="商品分类"
                            expand-trigger="hover"
                            :options="list"
                            v-model="selectedOptions2"
                            @change="handleChange">
                    </el-cascader >
                </div>
               <!-- <div class="nav-first" @mouseover="selectType" :class="selectTypeShow?'active':''">
                    <div>全部商品分类</div>
                    <div v-show="selectTypeShow" class="selectType"  @mouseout="outSelectType" >
                        <ul>

                            <li  @mouseover='selectTypeFun(item.id)' :class="selectTypeIndex==item.id?'active':''" v-for="(item,index) in list">
                                <router-link :to="{ name: 'search', params: { id: item.id}}">{{item.name}}</router-link>
                            </li>

                        </ul>
                    </div>
                </div>-->
                <div class="nav-list flex">
                    <div class="nav-item" @mouseover="selectNav">
                        <router-link to="/order">订单中心</router-link>
                    </div>
                    <div class="nav-item" @mouseover="selectNav">
                        <router-link to="/account">账户金额</router-link>
                    </div>
                    <div class="nav-item" @mouseover="selectNav"><a href="">服务报告</a></div>
                    <div class="nav-item" @mouseover="selectNav"><a href="">待结算订单</a></div>
                    <div class="nav-item" @mouseover="selectNav"><a href="">开票服务</a></div>
                </div>
                <div class="nav-last">
                    <el-menu  class="el-menu-demo" mode="horizontal" >
                    <el-submenu index="2">
                        <template slot="title">{{$store.state.user.position}}</template>
                        <div><img style="width: 80px;height: 80px;border-radius: 50%;background: #ccc;display: block;margin: 0 auto" :src='/api/+JSON.parse($store.state.user.powerAttorneyImage).file' alt="">
                            <p style="color: #999;font-size: 12px;text-align: center">{{$store.state.user.mobile}}
                            <span @click="lout">|注销</span>
                            </p>
                        </div>
                   <p style="height: 10px;background: #f9f9f9;"></p>
                        <p style="line-height: 30px"><router-link :to="{name:'Persona_addrs'}" style="display:block;color: #333"> 地址</router-link></p>
                        <p style="line-height: 30px"><router-link :to="{name:'Persona_Hospital'}" style="display:block;color: #333"> 医院</router-link></p>
                        <p style="line-height: 30px"><router-link :to="{name:'password'}" style="display:block;color: #333"> 密码</router-link></p>
                        <p style="line-height: 30px"><router-link :to="{name:'menu'}" style="display:block;color: #333"> 个人</router-link></p>
                        <div id="year">

                            <p><img :src="shou" alt="">售后金额 <span>¥{{$store.state.user.afterSaleAmount.creditAmount}}</span></p>
                            <p><img :src="xin" alt="">信用额度<span>¥{{$store.state.user.afterSaleAmount.creditAmount}}</span></p>
                            <p><img :src="xia" alt="">下单额度<span>¥{{$store.state.user.afterSaleAmount.deposit}}</span></p>
                            <p><img :src="zen" alt="">赠送额度金额<span>¥{{$store.state.user.afterSaleAmount.giveAmount}}</span></p>
                            <p><img :src="yong" alt="">返利佣金金额<span>¥{{$store.state.user.afterSaleAmount.rebateAmount}}</span></p>
                        </div>
                         </el-submenu>
                    </el-menu>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .el-menu-demo.el-menu--horizontal.el-menu{
        background: #26B7BC!important;
        color: #fff!important;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        color: #fff!important;
        height: 42px!important;
        line-height: 42px!important;
    }
    .el-submenu__title i{
        color: #fff!important;
    }

   .el-menu--horizontal.el-menu>.el-submenu{
        height: 42px!important;
        line-height: 42px!important;
    }
    .el-submenu>.el-menu--horizontal>.el-submenu .el-submenu__title{

    }
    .el-menu.el-menu--horizontal{
        border-bottom-color: transparent!important;
    }
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
        background: #35CED4 !important;
    }
</style>
<script>
    import Cookies from 'js-cookie'
    export default {
        name: "navbar",
        data(){
            return {
                shou:require('../assets/售后@2x.png'),
                xia:require('../assets/下单额度@2x.png'),
                xin:require('../assets/信用@2x.png'),
                zen:require('../assets/赠品@2x.png'),
                yong:require('../assets/佣金@2x.png'),
                selectTypeShow:false,
                selectTypeIndex:'1',
                selectedOptions2: [],

            }
        },
        props: {
            list: Array,
            required: true
        },
        methods: {
            //商品分类
            selectType(){
                this.selectTypeShow=true;
            },
            outSelectType(){
                this.selectTypeShow=false;
            },
            selectTypeFun(index){
                this.selectTypeIndex=index;

            },
            handleChange(value) {
                this.$router.push({
                    name:'search',
                    params:{
                        id:value.pop()
                    }
                })

            },
            //选择导航
            selectNav(){
                this.selectTypeShow=false;
            },
            lout(){
                Cookies.remove('token')
                this.$notify({
                    title: '成功',
                    message: '退出成功',
                    type: 'success'
                });
                window.location.reload()
            }
        }
    }
</script>

<style scoped lang="less">
    #year{
        p{
            height: 30px;
            border-bottom: 1px solid #f3f3f3;
            /* display: flex; */
            padding: 0 15px;
            /* justify-content: space-around; */
            line-height: 30px;
            span{
                color: #26B7BC ;
                float: right;
            }
            img{
                width: 20px;
                height: 20px;
                margin-top: 6px;
                vertical-align: top;
                margin-right: 10px;
            }
        }
    }
.nav{
    background: #26B7BC;
    color: #fff;
    height: 43px;
    line-height: 43px;
    font-size:18px;
    .nav-item,.nav-last{

        cursor: pointer;
        a{
        padding:0 39px;
            display: block;
    }
    }
    .nav-first{
        padding:0 47px;
        position: relative;
        cursor: pointer;
        .selectType{
            position: absolute;
            top: 43px;
            left: 0;
            text-align: left;
            width:100%;
            z-index: 9;
            ul{
                li{
                    padding-left:47px;
                    height:79px;
                    line-height:79px;
                    font-size:18px;
                    background: #fff;
                    cursor: pointer;
                    a{
                        color:#333;
                        display:inline-block;
                        width:100%;
                        height:100%;
                    }
                }
                li.active{
                    background: #DCEBF2;
                    a{
                        color: #26B7BC;
                    }
                }
            }
        }
    }
    .nav-first.active{
        background: #35CED4;
    }
}
</style>
