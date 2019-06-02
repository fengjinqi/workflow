<template>
    <div>
        <Banner :list="src"/>
        <div class="index">
            <div class="main order">
                <div class="order-main">
                    <div class="order-main-title">我的订单</div>
                    <div class="order-main-th flex-j">
                        <div class="order-main-th-item" style="width:25%">商品简介</div>
                        <div class="order-main-th-item" style="width:15%">商品编码</div>
                        <div class="order-main-th-item" style="width:15%">商品数量</div>
                        <div class="order-main-th-item" style="width:15%">支付方式/金额</div>
                        <div class="order-main-th-item" style="width:15%">订单状态</div>
                        <div class="order-main-th-item" style="width:15%">订单操作</div>
                    </div>
                    <div class="order-main-list">
                <!--        <div class="order-main-list-item">
                            <div class="order-main-list-item-head flex">
                                <div>2018-10-18 07:49:38</div>
                                <div>订单编号：001A181030DC000</div>
                                <div>类型：寄售</div>
                            </div>
                            <div class="order-main-list-item-cont1 flex">
                                <div style="width:25%; text-align:left;">
                                    <div class="order-main-list-item-cont-1">
                                        <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                        <div class="type">标准套餐</div>
                                        <div style="color:#999">骨折/F3/施乐辉</div>
                                        <div style="color:#999">II—24</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">X2</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>信用支付</div>
                                        <div>总额：¥3132</div>
                                        <div style="color:#FF8512">实付：¥3132</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">待收货</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>订单详情</div>
                                        <div>确认签收</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-main-list-item">
                            <div class="order-main-list-item-head flex">
                                <div>2018-10-18 07:49:38</div>
                                <div>订单编号：001A181030DC000</div>
                                <div>类型：寄售</div>
                            </div>
                            <div class="order-main-list-item-cont1 flex">
                                <div style="width:25%; text-align:left;">
                                    <div class="order-main-list-item-cont-1">
                                        <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                        <div class="type">标准套餐</div>
                                        <div style="color:#999">骨折/F3/施乐辉</div>
                                        <div style="color:#999">II—24</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">X2</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>信用支付</div>
                                        <div>总额：¥3132</div>
                                        <div style="color:#FF8512">实付：¥3132</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">使用中</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>订单详情</div>
                                        <div>连台手术</div>
                                        <div>手术完成</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-main-list-item">
                            <div class="order-main-list-item-head flex">
                                <div>2018-10-18 07:49:38</div>
                                <div>订单编号：001A181030DC000</div>
                                <div>类型：寄售</div>
                            </div>
                            <div class="order-main-list-item-cont1 flex">
                                <div style="width:25%; text-align:left;">
                                    <div class="order-main-list-item-cont-1">
                                        <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                        <div class="type">标准套餐</div>
                                        <div style="color:#999">骨折/F3/施乐辉</div>
                                        <div style="color:#999">II—24</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">X2</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>信用支付</div>
                                        <div>总额：¥3132</div>
                                        <div style="color:#FF8512">实付：¥3132</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">待确认</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>订单详情</div>
                                        <div>订单确认</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-main-list-item">
                            <div class="order-main-list-item-head flex">
                                <div>2018-10-18 07:49:38</div>
                                <div>订单编号：001A181030DC000</div>
                                <div>类型：寄售</div>
                            </div>
                            <div class="order-main-list-item-cont1 flex">
                                <div style="width:25%; text-align:left;">
                                    <div class="order-main-list-item-cont-1">
                                        <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                        <div class="type">标准套餐</div>
                                        <div style="color:#999">骨折/F3/施乐辉</div>
                                        <div style="color:#999">II—24</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">X2</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>信用支付</div>
                                        <div>总额：¥3132</div>
                                        <div style="color:#FF8512">实付：¥3132</div>
                                    </div>
                                </div>
                                <div style="width:15%"><div class="order-main-list-item-cont-1">已完成</div></div>
                                <div style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        <div>订单详情</div>
                                        <div>申请发票</div>
                                    </div>
                                </div>
                            </div>
                        </div>-->

                    <div class="order-main-list-item" v-for="item in data" v-if="data.length>0" :key="item.tradeId">
                            <div class="order-main-list-item-head flex">
                                <div>{{new Date(item.createTime).toLocaleString()}}</div>
                                <div>订单编号：{{item.tradeSn}}</div>
                                <div>类型：{{item.orderType}}</div>
                            </div>
                            <div class="order-main-list-item-cont1 flex">

                                <div style="width:55%" >
                                    <div class="flex"  v-for="(child,indexChild) in item.children">
                                        <div style="width:289.75px;text-align:left;">
                                            <div class="order-main-list-item-cont-1">
                                                <div>{{child.goodsName}}</div>
                                                <div class="type" v-if="item.orderType!='批发'">{{item.orderType}}</div>
                                                <div style="color:#999">{{child.goodsCategoryName}}</div>
                                            </div>
                                        </div>
                                        <div style="width:173.84px"><div class="order-main-list-item-cont-1">{{child.goodsSn}}</div></div>
                                        <div style="width:173.84px"><div class="order-main-list-item-cont-1">{{child.goodsSum}}</div></div>
                                    </div>

                                </div>
                                <div style="width:45%" class="flex">
                                        <div class="order-main-list-item-cont-0" style="width:173.84px;">
                                            <div class="order-main-list-item-cont-1 order-main-list-item-cont-2">
                                                <div>{{item.payType}}</div>
                                                <div>总额：¥{{item.totalAmount}}</div>
                                                <div style="color:#FF8512">实付：¥{{item.payAmount}}</div>
                                            </div>
                                        </div>
                                        <div class="order-main-list-item-cont-0" style="width:173.84px;">
                                            <div class="order-main-list-item-cont-1 order-main-list-item-cont-2">{{item.orderStatus}}</div>
                                        </div>
                                        <div class="order-main-list-item-cont-0" style="width:173.84px;">
                                            <div class="order-main-list-item-cont-1 order-main-list-item-cont-2">
                                                <div @click="todetail(item.tradeId,item.orderType)" style="cursor: pointer">订单详情</div>
                                                <!--<div>申请发票</div>-->
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <el-pagination style="margin-top: 20px"
                                       layout="prev, pager, next"
                                       :total="count" :page-size="pageSize"  @current-change="page"  :current-page="currentPage">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getIndex} from '@/api/user'
    import {getToken} from '@/libs/util'
    import {mapActions} from 'vuex'
    import Banner from '@/components/banner'//banner
    export default {
        name: "index",
        data(){
            return{
                data:[],
                src:[],
                count:0,
                pageSize: 20,
                currentPage:1,
            }
        },
        components:{
          Banner,
        },
         created() {
             this.getGoodsShopsCounts()
             this.getAccem()
             this.getGoodsTaoShopsCounts()
            this.getUserInfo().then(res=>{
                if(res.code!=='OK'){
                    this.$notify({
                        title: '警告',
                        message: res.message,
                        type: 'warning'
                    });
                    this.$router.push({
                        name: 'login'
                    })
                }
            })
            getIndex(getToken('token')).then(res=>{
                if (res.code=='OK'){
                    // this.data = res.data
                    let src = res.data.imageResponses
                    this.count = res.data.ordersPackageGoodsResponses.totalRecord
                    src.map((item)=>{

                        this.src.push({
                            src:JSON.parse(item.imageUrl).file
                        })
                    })

                    //JSON.parse(res.data.imageResponses[0].imageUrl)
                    //ordersPackageGoodsResponses这个和packageGoodsResponses这个是相同的数据？？？不同
                    let data = []
                   // let obj=
                       res.data.ordersPackageGoodsResponses.list.map(item=>{

                           data.push({
                               ...item,
                               children: [...item.ordersGoodsResponses,...item.packageGoodsResponses]
                           })
                       // data.push(item.ordersGoodsResponses.concat(item.packageGoodsResponses))
                       /* return item.ordersGoodsResponses.push(item.packageGoodsResponses.map(it=>{

                        }))*/
                    })

                this.data = data.filter((item)=>(item.children.length>0))

                }
            })

    },
        methods:{
            ...mapActions([
                'getUserInfo',
                'getGoodsShopsCounts',
                'getAccem',
                'getGoodsTaoShopsCounts'
            ]),
            page(val){
                this.currentPage = val;
                getIndex(getToken('token'),val,20).then(res=>{
                    if (res.code=='OK'){
                        // this.data = res.data
                        let src = res.data.imageResponses
                        this.count = res.data.ordersPackageGoodsResponses.totalRecord
                        src.map((item)=>{

                            this.src.push({
                                src:JSON.parse(item.imageUrl).file
                            })
                        })

                        //JSON.parse(res.data.imageResponses[0].imageUrl)
                        //ordersPackageGoodsResponses这个和packageGoodsResponses这个是相同的数据？？？不同
                        let data = []
                        // let obj=
                        res.data.ordersPackageGoodsResponses.list.map(item=>{

                            data.push({
                                ...item,
                                children: [...item.ordersGoodsResponses,...item.packageGoodsResponses]
                            })
                            // data.push(item.ordersGoodsResponses.concat(item.packageGoodsResponses))
                            /* return item.ordersGoodsResponses.push(item.packageGoodsResponses.map(it=>{

                             }))*/
                        })

                        this.data = data.filter((item)=>(item.children.length>0))

                    }
                })
            },
            //跳转到详情页
            todetail(index,n){
                if(n=='批发'){
                    this.$router.push({
                        name: 'orderdetail',
                        params:{
                            id:index
                        }
                    })
                }else{
                    this.$router.push({
                        name: 'orderdetails',
                        params:{
                            id:index
                        }
                    })
                }

            },
        }
    }
</script>

<style scoped lang="less">
.index{
    .order{
        background:#fff;
        margin-top:20px;
        color: #333;
        .order-main{
            padding: 20px 20px 40px 20px;
            .order-main-title{
                font-size: 18px;
                margin-bottom:20px;
            }
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
        }
    }
}
</style>
