<template>
    <div class="nav">
        <div class="main">
            <div class="flex">
                <div id="allsearch">
                    <img :src="allsrc" alt="" class="allsrc">
                    <el-cascader
                            placeholder="全部商品分类"
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
                    <div class="nav-item" @mouseover="selectNav"><router-link to="/service">服务报告</router-link></div>
                    <div class="nav-item" @mouseover="selectNav"> <router-link to="/money">款项管理</router-link></div>
                    <div class="nav-item" @mouseover="selectNav"><a href="">开票服务</a></div>
                </div>
                <div class="nav-last">
                    <el-menu  class="el-menu-demo" mode="horizontal" >
                    <el-submenu index="2">
                        <template slot="title">{{$store.state.user.position}}</template>
                        <div><img style="width: 80px;height: 80px;border-radius: 50%;background: #ccc;display: block;margin: 0 auto" :src='/api/+$store.state.user.users.avatar' alt="">
                            <p style="color: #999;font-size: 12px;text-align: center">{{$store.state.user.mobile}}
                            <span @click="lout">|注销</span>
                            </p>
                        </div>
                   <p style="height: 10px;background: #f9f9f9;"></p>
                        <p class="p" style=" height:40px;line-height: 40px"><router-link :to="{name:'Persona_addrs'}" style="display:block;color: #333"> 地址管理</router-link></p>
                        <p class="p" style="height:40px;line-height: 40px"><router-link :to="{name:'Persona_Hospital'}" style="display:block;color: #333"> 新增医院</router-link></p>
                        <p class="p" style="height:40px;line-height: 40px"><router-link :to="{name:'menu'}" style="display:block;color: #333"> 会员信息</router-link></p>
                        <!--<p class="p" style="height:40px;line-height: 40px"><router-link :to="{name:'password'}" style="display:block;color: #333"> 修改密码</router-link></p>-->

                        <p style="height: 10px;background: #f9f9f9;"></p>
                        <div id="year">

                            <p><img :src="shou" alt="">售后金额 <span>¥{{$store.state.user.afterSaleAmount.afterSaleAmount}}</span></p>
                            <p><img :src="xin" alt="">信用额度<span>¥{{$store.state.user.afterSaleAmount.creditAmount}}</span></p>
                            <p><img :src="xia" alt="">下单额度<span>¥{{$store.state.user.afterSaleAmount.virtualAmount}}</span></p>
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
    #search .el-cascader__label{
        color: #fff;font-size: 18px;
    }
    .el-input__icon{
        color: #fff;
        }
    #allsearch .el-input__inner
    {
        height: 43px;
        top: -1px;
        position: relative;
        background: #26B7BC;
        border: 0;
        border-radius: 0;        padding: 0 15px 0 45px; text-align: center;
    }
.el-cascader__label{
    text-align: center!important;
    color: #fff!important;font-size: 18px!important;  padding: 0 15px 0 45px!important;
}
    #allsearch ::-webkit-input-placeholder { /* WebKit browsers */
        color: #fff;
        font-size: 18px;
    }

    #allsearch ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #fff;font-size: 18px;
    }

    #allsearch :-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #fff;font-size: 18px;
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
                allsrc:require('../assets/clasify.png'),
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
                this.$forceUpdate()
                if(this.$store.state.user.types==1){
                this.$router.push({
                    name:'search',
                    params:{
                        id:value.pop()
                    }
                })
                }
                this.$forceUpdate()
                if(this.$store.state.user.types==0){

                    this.$router.push({
                        name:'searchs',
                        query:{
                            id:value.pop()
                        }
                    })
                }

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
    .p{
        a{
            height:40px;
            line-height: 40px;
            padding: 0 15px;
            border-bottom: 1px solid #EEEEEE;
        }
       a.router-link-exact-active.router-link-active{
           background: rgba(234, 245, 250, 1);
           color: #3198CD;
       }
    }
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
    #allsearch{
        position: relative;}
    .allsrc{
        position: absolute;
        top:0;
        left: 0;
        z-index: 9;
        width: 20px;
        left: 45px;
        top: 12px;
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
