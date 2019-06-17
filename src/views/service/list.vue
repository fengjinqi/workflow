<template>
    <div class="main">

        <div class="orderType">
            <div class="flex type"style="position: relative;height: 42px;margin-bottom: 20px">
                <div :class="act=='1'?'active':''" @click="typeC('1','')">全部</div>
                <div :class="act=='2'?'active':''" @click="typeC('2','2')">已填写</div>
                <div :class="act=='3'?'active':''" @click="typeC('3','0')">未填写</div>

            </div>
            <template>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column

                            label="订单号/手术号"
                           >
                        <template slot-scope="scope">
                            <p>订单编号:{{scope.row.tradeSn}}</p>
                            <p>手术单号:{{scope.row.operationSn}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="hospitalName"
                            label="服务医院"
                          >
                    </el-table-column>
                    <el-table-column
                            label="订单商品">
                        <template slot-scope="scope">
                            <div v-for="item in scope.row.ordersPackageGoodsResponses" class="b">
                                <p>{{item.goodsName}}</p>
                                <span>{{item.goodsType}}</span>
                                <p>{{item.goodsCategoryName}}</p>
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column

                            label="服务状态"
                            >
                        <template slot-scope="scope">
                          {{scope.row.reportServiceStatus==0?'未完成':scope.row.reportServiceStatus==1?'未完善':scope.row.reportServiceStatus==2?'已完成':''}}

                        </template>
                    </el-table-column>
                    <el-table-column

                            label="操作"
                            >
                        <template slot-scope="scope">
                            <span class="ac" v-if="scope.row.reportServiceStatus==0" @click="detail(scope.row.tradeSn)">填写报告</span>
                            <span class="ac" v-else-if="scope.row.reportServiceStatus==1"@click="detail(scope.row.tradeSn)">继续填写</span>
                            <span class="ac" v-else-if="scope.row.reportServiceStatus==2"@click="detail(scope.row.tradeSn)">修改内容</span>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination style="margin-top: 20px"
                               v-if="count>0"
                               layout="prev, pager, next"
                               :total="count" :page-size="pageSize"  @current-change="page"  :current-page="currentPage">
                </el-pagination>
            </template>


<!--
            <div class="order-main-th flex-j">
                <div class="order-main-th-item" style="width: 15%;">订单号/手术号</div>
                <div class="order-main-th-item" style="width: 40%;">服务医院</div>
                <div class="order-main-th-item" style="width: 15%;">订单商品</div>
                <div class="order-main-th-item" style="width: 15%;">服务状态</div>
                <div class="order-main-th-item" style="width: 15%;">操作</div>
            </div>
            <div class="order-main-list-item"  v-for="item in list">
                <div class="order-main-list-item-head"></div>
                <div class="order-main-list-item-cont1 flex">

                    <div style="width: 20%;">
                        <div class="order-main-list-item-cont-1">
                            <p>手术号:001A181030DC000002</p>
                            <p>手术号:001A181030DC000002</p>
                        </div>

                    </div>
                    <div style="width:20%;">
                        <div class="order-main-list-item-cont-1" style="display: flex">
                            <template v-for="img in item.img">
                            <img :src="/api/+img.file" alt=""  style="margin: 0 5px;height: 100px;width: 200px">
                            </template>
                            </div>
                    </div>
                    <div style="width: 20%;">
                        <div class="order-main-list-item-cont-1">{{item.remark}}</div>
                    </div>
                    <div style="width: 20%;">
                        <div class="order-main-list-item-cont-1">{{new Date(item.createTime).toLocaleString()}}</div>
                    </div>
                    <div style="width: 20%;">
                        <div class="order-main-list-item-cont-1">{{item.status==1?'已申请':'已结算'}}</div>
                    </div>
                </div>
            </div>
            <p v-if="list.length==0" style="text-align: center;margin: 20px auto">暂无数据</p>-->
        </div>
    </div>
</template>

<script>
    import {gettradeReport,getRepaymentList} from '@/api/exit'
    import {getToken} from '@/libs/util'
    export default {
        data(){
            return{
                act:'1',
                info:{},
                list:[],
                count:0,
                pageSize: 20,
                currentPage:1,
                tableData:null,
                type:''
            }
        },
        created(){
            gettradeReport(getToken('token'),1,20,'').then(res=>{
                console.log(res)
                if(res.code=='OK'){
                    this.tableData = res.data.list
                    this.count = res.data.totalRecord
                }
            })
        },
        methods:{
            detail(n){
                this.$router.push({name:'service_detail',params:{id:n}})
            },
            page(val){
                this.currentPage = val;
                gettradeReport(getToken('token'),val,20,this.type).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.tableData = res.data.list
                        this.count = res.data.totalRecord
                    }
                })
            },
            typeC(n,is){
                this.act=n
                this.type=is
                gettradeReport(getToken('token'),1,20,is).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.tableData = res.data.list
                        this.count = res.data.totalRecord
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .ac{
        color: #26B7BC;
        padding: 2px 8px;
        margin: 9px 15px;
        border-radius: 4px;
        border: 1px solid #26B7BC;
        display: inline-block;
        cursor: pointer;
    }
    .b{
        border-bottom: 1px solid #ccc;
        width: 110%;
        position: relative;
        left: -10px;
        padding: 10px 0;

        p{
            padding: 0 15px;
        }
        span{

            color: #26B7BC;
            padding: 2px 8px;
            margin: 9px 15px;
            border-radius: 4px;
            border: 1px solid #26B7BC;
            display: inline-block;

        }
        p:last-child{

            color: rgba(153, 153, 153, 1);
            font-size: 14px;

        }
    }
    .b:last-child{
     border-bottom: none;
    }

.nav{
    margin: 20px auto;
    background-color: #E4FEFF;
    padding: 30px 40px;
    font-size: 18px;
    color: rgba(38, 183, 188, 1);
    li{
        margin-bottom: 8px;
    }
}
.orderType{
    margin-top: 20px;
    background: #fff;
    padding: 20px;
    .type{
        /*border-bottom: 1px solid #eee;*/
        div{
            width: 80px;
            text-align: center;
            /*padding-bottom: 20px;*/
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
                border:none
            }
        }
    }
}

</style>

