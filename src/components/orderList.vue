<template>
    <div class="detail-item">
        <div class="flex-j">
            <div class="title">货物清单</div>
        </div>
        <div class="orderList">
            <div class="flex-r" style="margin-bottom: 20px;">
                <div>共 <span style="color: #3198CD">{{list.ordersGoodsResponses.length}}</span> 件商品</div>
                <div style="margin-left:20px;">总价：<span style="color: #FF8512">¥{{list.totalAmount}}</span></div>
            </div>
            <div class="order-main-th flex-j">
                <div class="order-main-th-item" style="width:30%">商品简介</div>
                <div class="order-main-th-item" style="width:15%">商品编码</div>
                <div class="order-main-th-item" style="width:15%">支付金额</div>
                <div class="order-main-th-item" style="width:15%">商品数量</div>
                <div class="order-main-th-item" style="width:25%">订单操作</div>
            </div>
            <div class="order-main-list">
                <div class="order-main-list-item">
                    <div class="order-main-list-item-head flex">
                        <div>{{new Date(list.createTime).toLocaleString()}}</div>
                        <div>订单编号：{{list.ordersGoodsResponses[0].goodsSn}}</div>
                        <div>类型：{{list.orderType}}</div>
                    </div>
                    <div>
                        <div class="order-main-list-item-cont1 flex" v-for="item in list.ordersGoodsResponses">
                            <div style="width:30%; text-align:left;">
                                <div class="order-main-list-item-cont-1">
                                    <div>{{item.goodsName}}</div>
                                    <div class="type">{{list.orderType=='批发'?'单品':'套餐'}}</div>
                                    <div style="color:#999">{{item.goodsCategoryName}}</div>

                                </div>
                            </div>
                            <div style="width:15%"><div class="order-main-list-item-cont-1">{{item.goodsSn}}</div></div>
                            <div style="width:15%"><div class="order-main-list-item-cont-1 color">¥{{item.goodsPrice}}</div></div>

                            <div style="width:15%"><div class="order-main-list-item-cont-1">{{item.goodsSum}}</div></div>
                            <div style="width:25%">
                                <div class="order-main-list-item-cont-1">
                                    <div @click="go(item.id)">商品详情</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "yiliao",
        data(){
            return{

            }
        },
        props:{
            list:{
                type:[Array,Object]
            }
        },
        methods:{
            go(index){
               this.$router.push({
                   name:'detail',
                   params:{
                       id:index
                   }
               })
            }
        }

    }
</script>

<style scoped lang="less">
    .detail-item{
        /*padding: 20px;*/
        background: #fff;
        margin-top: 20px;
        .title{
            font-size: 18px;
            font-weight: bold;
            padding:20px 20px 0 20px
        }
        .orderList{
            padding: 26px 20px 20px 20px;
            .order-main-th{
                height: 40px;
                line-height: 40px;
                background: #F9F9F9;
                border: 1px solid #EBEEF5;
                .order-main-th-item{
                    text-align: center
                }
            }
            .order-main-list{
                .order-main-list-item{
                    margin-top: 20px;
                    .order-main-list-item-head{
                        height: 40px;
                        line-height: 40px;
                        background: #E4FEFF;
                        border: 1px solid #26B7BC;
                        div{
                            padding:0 20px;
                        }
                    }
                    .order-main-list-item-cont1{
                        text-align:center;
                        border-right:1px solid #EBEEF5;
                        .order-main-list-item-cont-1{
                            border-left:1px solid #EBEEF5;
                            border-bottom:1px solid #EBEEF5;
                            height:100px;
                            padding:15px 20px 10px 20px;
                            div{
                                margin-bottom:5px;
                            }
                            div.type{
                                color: #26B7BC;
                                padding:2px 8px;
                                border-radius:4px;
                                border:1px solid #26B7BC;
                                display:inline-block;
                            }
                        }
                        .order-main-list-item-cont-2{
                            border:none;

                        }
                    }
                    .order-main-list-item-cont-0{
                        border-bottom:1px solid #EBEEF5;
                        border-left:1px solid #EBEEF5;
                    }
                }
            }
            .color{
                color: #FF8512;
            }
        }
    }
</style>
