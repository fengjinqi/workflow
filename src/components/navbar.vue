<template>
    <div class="nav">
        <div class="main">
            <div class="flex">
                <div class="nav-first" @mouseover="selectType"  :class="selectTypeShow?'active':''">
                    <div>全部商品分类</div>
                    <div v-if="selectTypeShow" class="selectType">
                        <ul>
                            <li @mouseover="selectTypeFun('1')" :class="selectTypeIndex=='1'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 1}}">分类一名称</router-link>
                            </li>
                            <li @mouseover="selectTypeFun('2')" :class="selectTypeIndex=='2'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 2}}">分类二名称</router-link>
                            </li>
                            <li @mouseover="selectTypeFun('3')" :class="selectTypeIndex=='3'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 3}}">分类三名称</router-link>
                            </li>
                            <li @mouseover="selectTypeFun('4')" :class="selectTypeIndex=='4'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 4}}">分类四名称</router-link>
                            </li>
                            <li @mouseover="selectTypeFun('5')" :class="selectTypeIndex=='5'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 5}}">分类五名称</router-link>
                            </li>
                            <li @mouseover="selectTypeFun('6')" :class="selectTypeIndex=='6'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 6}}">分类六名称</router-link>
                            </li>
                            <li @mouseover="selectTypeFun('7')" :class="selectTypeIndex=='7'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 7}}">分类七名称</router-link>
                            </li>
                            <li @mouseover="selectTypeFun('8')" :class="selectTypeIndex=='8'?'active':''">
                                <router-link :to="{ path: '/search', query: { type: 8}}">分类八名称</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-list flex">
                    <div class="nav-item" @mouseover="selectNav">
                        <router-link to="/order">订单中心</router-link>
                    </div>
                    <div class="nav-item" @mouseover="selectNav">
                        <router-link to="/account">账户金额</router-link>
                    </div>
                    <div class="nav-item" @mouseover="selectNav">服务报告</div>
                    <div class="nav-item" @mouseover="selectNav">待结算订单</div>
                    <div class="nav-item" @mouseover="selectNav">待结算订单</div>
                </div>
                <div class="nav-last">杨浦经销商 >></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return {
                selectTypeShow:false,
                selectTypeIndex:'1'
            }
        },
        methods: {
            //商品分类
            selectType(){
                this.selectTypeShow=true;
            },
            // outSelectType(){
            //     this.selectTypeShow=false;
            // },
            selectTypeFun(index){
                this.selectTypeIndex=index;
            },
            //选择导航
            selectNav(){
                this.selectTypeShow=false;
            },
        }
    }
</script>

<style scoped lang="less">
.nav{
    background: #26B7BC;
    color: #fff;
    height: 43px;
    line-height: 43px;
    font-size:18px;
    .nav-item,.nav-last{
        padding:0 39px;
        cursor: pointer
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