<template>
    <div class="order">
        <div class="main">
            <div class="orderM flex-j">
                <div class="title">订单管理</div>
                <div class="action">
                    <el-button type="primary" class="reset" @click="realod">重置</el-button>
                    <el-button type="primary" class="search" @click="search">搜索</el-button>
                </div>
            </div>
            <div class="orderT flex">
                <div class="orderT-label">订单生成时间</div>
                <div>
                    <el-date-picker
                            v-model="time1"
                            type="date"
                            placeholder="选择日期" value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
                <div class="orderT-label1">至</div>
                <div>
                    <el-date-picker
                            v-model="time2"
                            type="date"
                            placeholder="选择日期" value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
            </div>
            <div class="orderType">
                <div class="flex type">
                    <div @click="typeC('1')" :class="act=='1'?'active':''">寄售</div>
                    <div @click="typeC('2')" :class="act=='2'?'active':''">批发</div>
                </div>
                <template v-if="act=='1'">
                    <div class="flex" style="margin: 20px 0;">
                        <!--
                      交易状态:{1:待确认,2:待审核,3:待发货,4:待收货,5:使用中,6:已使用,7:待入库,8:交易成功,-1:已取消,-2:交易关闭,-3:审核失败}
                      -->
                        <div class="typeItem" :class="actType1=='1'?'active':''" @click="typeItemC1('1','')">全部</div>
                        <div class="typeItem" :class="actType1=='2'?'active':''" @click="typeItemC1('2','1')">待确认</div>
                        <div class="typeItem" :class="actType1=='3'?'active':''" @click="typeItemC1('3','2')">待审核</div>
                        <div class="typeItem" :class="actType1=='4'?'active':''" @click="typeItemC1('4','3')">待发货</div>
                        <div class="typeItem" :class="actType1=='5'?'active':''" @click="typeItemC1('5','4')">待收货</div>
                        <div class="typeItem" :class="actType1=='6'?'active':''" @click="typeItemC1('6','5')">使用中</div>
                        <div class="typeItem" :class="actType1=='7'?'active':''" @click="typeItemC1('7','6')">已使用</div>
                        <!--<div class="typeItem" :class="actType1=='8'?'active':''" @click="typeItemC1('8')">已寄回</div>-->
                        <div class="typeItem" :class="actType1=='9'?'active':''" @click="typeItemC1('9','7')">已入库</div>
                        <div class="typeItem" :class="actType1=='10'?'active':''" @click="typeItemC1('10','8')">已完成</div>
                        <div class="typeItem" :class="actType1=='11'?'active':''" @click="typeItemC1('11','-3')">审核失败</div>
                    </div>
                    <div class="order-main-th flex-j">
                        <div class="order-main-th-item" style="width:25%">商品简介</div>
                        <div class="order-main-th-item" style="width:15%">商品编码</div>
                        <div class="order-main-th-item" style="width:15%">商品数量</div>
                        <div class="order-main-th-item" style="width:15%">支付方式/金额</div>
                        <div class="order-main-th-item" style="width:15%">订单状态</div>
                        <div class="order-main-th-item" style="width:15%">订单操作</div>
                    </div>
                    <div class="order-main-list">

                        <p v-if="list1.list.length<=0" style="text-align: center">暂无数据</p>
                        <div class="order-main-list-item" v-for="item in list1.list" v-if="list1!=null&&list.list.length>0">
                            <div class="order-main-list-item-head flex">
                                <div>{{new Date(item.createTime).toLocaleString()}}</div>
                                <div>订单编号：{{item.tradeSn}}</div>
                                <div>类型：{{item.orderType}}</div>
                            </div>
                            <div class="order-main-list-item-cont1 flex">
                                <div style="width:55%" >
                                    <div class="flex" v-for="chil in item.packageGoodsResponses">
                                        <div style="width:289.75px;text-align:left;">
                                            <div class="order-main-list-item-cont-1">
                                                <div>{{chil.goodsName}}</div>
                                                <div class="type">{{chil.goodsType}}</div>
                                                <div style="color:#999">{{chil.goodsCategoryName}}</div>
                                          <!--      <div style="color:#999">II—24</div>-->
                                            </div>
                                        </div>
                                        <div style="width:173.84px"><div class="order-main-list-item-cont-1">{{chil.goodsSn}}</div></div>
                                        <div style="width:173.84px"><div class="order-main-list-item-cont-1">{{chil.goodsPackageSum}}</div></div>
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
                                            <div @click="btn(item.tradeId)">订单详情</div>
                                            <!--<div>申请发票</div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <el-pagination style="margin-top: 20px"
                                       layout="prev, pager, next"
                                       :total="count1" :page-size="pageSize1"  @current-change="page1"  :current-page="currentPage1">
                        </el-pagination>
                    </div>
                </template>
                <template v-if="act=='2'">
                    <div class="flex" style="margin: 20px 0;">
                        <!--
                        交易状态:{1:待确认,2:待审核,3:待发货,4:待收货,5:使用中,6:已使用,7:待入库,8:交易成功,-1:已取消,-2:交易关闭,-3:审核失败}
                        -->
                        <div class="typeItem" :class="actType=='1'?'active':''" @click="typeItemC('1','')">全部</div>
                        <div class="typeItem" :class="actType=='2'?'active':''" @click="typeItemC('2',1)">待确认</div>
                        <div class="typeItem" :class="actType=='3'?'active':''" @click="typeItemC('3',2)">待审核</div>
                        <div class="typeItem" :class="actType=='4'?'active':''" @click="typeItemC('4',3)">待发货</div>
                        <div class="typeItem" :class="actType=='5'?'active':''" @click="typeItemC('5',8)">已完成</div>
                   <!--     <div class="typeItem" :class="actType=='6'?'active':''" @click="typeItemC('6',)">售后订单</div>-->
                        <div class="typeItem" :class="actType=='7'?'active':''" @click="typeItemC('7',-3)">审核失败</div>
                    </div>
                    <div class="order-main-th flex-j">
                        <div class="order-main-th-item" style="width:25%">订单简介</div>
                        <div class="order-main-th-item" style="width:15%">商品编码</div>
                        <div class="order-main-th-item" style="width:15%">商品数量</div>
                        <div class="order-main-th-item" style="width:15%">支付方式/金额</div>
                        <div class="order-main-th-item" style="width:15%">订单状态</div>
                        <div class="order-main-th-item" style="width:15%">订单操作</div>
                    </div>
                    <div class="order-main-list" id="id">

                        <p v-if="list.list.length<=0" style="text-align: center">暂无数据</p>
                     <div class="order-main-list-item" v-for="item in list.list" v-if="list!=null&&list.list.length>0">
                            <div class="order-main-list-item-head flex">
                                <div>{{new Date(item.createTime).toLocaleString()}}</div>
                                <div>订单编号：{{item.tradeSn}}</div>
                                <div>类型：{{item.orderType}}</div>
                            </div>
                            <div class="order-main-list-item-cont1 flex">
                                <div style="width:55%">
                                    <div class="flex"  v-for="child in item.ordersGoodsResponses">
                                        <div style="width:289.75px;text-align:left;">
                                            <div class="order-main-list-item-cont-1">
                                                <div>{{child.goodsName}}</div>
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
                                            <template >
                                                <div @click="todetail(item.tradeId)" style="cursor: pointer">订单详情</div>

                                            </template>

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
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import {getOrder} from '@/api/order'
    import { Loading } from 'element-ui';
    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        data(){
            return {
                time1:"",
                time2:"",
                act:'2',//寄售
                actType:'1',//全部
                actType1:'1'//全部
                ,list:null,
                list1:null,
                count:0,
                pageSize: 20,
                currentPage:1,
                typeItemCs:'',
                count1:0,
                pageSize1: 20,
                currentPage1:1,
                typeItemCs1:''
            }
        },
        created(){
            getOrder(getToken('token')).then(res=>{
                console.log(res)
                if(res.code=='OK'){
                    this.list=res.data
                    this.count = res.data.totalRecord

                }
            })
            let data=[1,2,'','','','',10]
            getOrder(getToken('token'),...data).then(res=>{
                //console.log(res)
                if(res.code=='OK'){
                    this.list1=res.data
                    this.count1 = res.data.totalRecord
                }
            })
        },
        methods: {
            realod(){
                this.time1=''
                this.time2=''
            },
            typeC(index){
                this.act=index
            },
            typeItemC(index,id){
                this.actType=index
                this.typeItemCs = id
                let loadingInstance = Loading.service({target:document.querySelector('#id')});
                let data=[1,1,'',id,'','',10]
                getOrder(getToken('token'),...data).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.list=res.data
                        this.count = res.data.totalRecord
                        loadingInstance.close()
                    }
                })

            },
            typeItemC1(index,id){
                this.actType1=index
                this.typeItemCs1 = id
                let loadingInstance = Loading.service({target:document.querySelector('#id')});
                let data=[1,2,'',id,'','',10]
                getOrder(getToken('token'),...data).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.list1=res.data
                        this.count1 = res.data.totalRecord
                        loadingInstance.close()
                    }
                })

            },
            search(){
                if(this.act==2){
                    const loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    let data=[1,1,'','',this.time1==null?'':this.time1,this.time2==null?'':this.time2,10]
                    console.log('---')
                    getOrder(getToken('token'),...data).then(res=>{
                        console.log(res)
                        if(res.code=='OK'){
                            this.list=res.data
                            this.count = res.data.totalRecord
                            loading.close()
                        }
                    })
                }else{
                    const loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    let data=[1,2,'','',this.time1==null?'':this.time1,this.time2==null?'':this.time2,10]
                    console.log(data)
                    getOrder(getToken('token'),...data).then(res=>{
                        console.log(res)
                        if(res.code=='OK'){
                            this.list1=res.data
                            this.count1 = res.data.totalRecord
                            loading.close()
                        }
                    })
                }

            },
            page(val){
                this.currentPage = val;
                let data=[val,1,'',this.typeItemCs,this.time1==null?'':this.time1,this.time2==null?'':this.time2,20]
                console.log('---')
                getOrder(getToken('token'),...data).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.list=res.data
                        this.count = res.data.totalRecord
                    }
                })
            },
            page1(val){
                this.currentPage1 = val;
                let data=[val,2,'',this.typeItemCs1,this.time1==null?'':this.time1,this.time2==null?'':this.time2,20]
                console.log('---')
                getOrder(getToken('token'),...data).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.list1=res.data
                        this.count1 = res.data.totalRecord
                    }
                })
            },
            //跳转到详情页
            todetail(index){
                    this.$router.push({
                        name: 'orderdetail',
                        params:{
                            id:index
                        }
                    })
            },
            btn(id){
                this.$router.push({
                    name: 'orderdetails',
                    params:{
                        id:id
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.order{
    .orderM{
        padding:20px;
        background: #fff;
        border-bottom: 1px solid #eee;
        margin-top:20px;
        .title{
            font-size: 18px;
            color: #333;
            padding-left: 10px;
            border-left: 4px solid #26B7BC;
        }
        .action{
            .reset{
                width: 100px;
                height: 30px;
                line-height: 30px;
                border-radius: 4px;
                background-color: rgba(204, 204, 204, 1);
                color: #fff;
                border: none;
                padding:0;
                text-align: center;
            }
            .search{
                width: 100px;
                height: 30px;
                line-height: 30px;
                border-radius: 4px;
                background-color: rgba(38, 183, 188, 1);
                color: #fff;
                margin-left: 20px;
                border: none;
                padding:0;
                text-align: center;
            }
        }
    }
    .orderT{
        padding:10px 20px;
        background: #fff;
        .orderT-label{
            height: 40px;
            line-height: 40px;
            margin-right: 20px;
        }
        .orderT-label1{
            height: 40px;
            line-height: 40px;
            margin:0 10px;
        }
    }
    .orderType{
        margin-top: 20px;
        background: #fff;
        padding: 20px;
        .type{
            border-bottom: 1px solid #eee;
            div{
                width: 80px;
                text-align: center;
                padding-bottom: 20px;
                cursor: pointer;
            }
            div.active{
                color: #3198CD;
                border-bottom: 2px solid #3198CD;
            }
        }
        .typeItem{
            width: 100px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #333;
            font-size: 18px;
            cursor: pointer;
        }
        .typeItem.active{
            background-color: rgba(49, 152, 205, 1);
            color: #fff;
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
</style>
