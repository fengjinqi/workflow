<template>
    <div>
        <div class="main">
            <div class="orderM">
                <div class="title"><img :src="ren" alt="">订单管理</div>
                <div class="box">
                    <div :style="rout" class="img">
                        <h3>信用额度(元)</h3>
                        <div class="available">
                            <span>可用余额</span>
                            <h4><i>￥</i>10 000.00</h4>
                        </div>
                        <div class="box-footer">
                            <span>账户总额度：¥10 000.00</span>
                            <span>已用额度：¥10 000.00</span>
                        </div>
                    </div>
                    <div :style="rout" class="img">
                        <h3>信用额度(元)</h3>
                        <div class="available">
                            <span>可用余额</span>
                            <h4><i>￥</i>10 000.00</h4>
                        </div>
                        <div class="box-footer">
                            <span>账户总额度：¥10 000.00</span>
                            <span>已用额度：¥10 000.00</span>
                        </div>
                    </div>
                    <div :style="rout" class="img">
                        <h3>信用额度(元)</h3>
                        <div class="available">
                            <span>可用余额</span>
                            <h4><i>￥</i>10 000.00</h4>
                        </div>
                        <div class="box-footer">
                            <span>账户总额度：¥10 000.00</span>
                            <span>已用额度：¥10 000.00</span>
                        </div>
                    </div>
                    <div :style="rout" class="img">
                        <h3>信用额度(元)</h3>
                        <div class="available">
                            <span>可用余额</span>
                            <h4><i>￥</i>10 000.00</h4>
                        </div>
                        <div class="box-footer">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div :style="rout" class="img">
                        <h3>信用额度(元)</h3>
                        <div class="available">
                            <span>可用余额</span>
                            <h4><i>￥</i>10 000.00</h4>
                        </div>
                        <div class="box-footer">
                            <el-button style="background: #44C8CC;color: #fff">押金提现</el-button>
                        </div>
                    </div>
                </div>

            </div>
            <p class="hr"></p>
            <div  class="orderM">
                <div class="title"><img :src="ren" alt="">账户明细</div>
                <ul class="nav_meun">
                    <li @click="active('1')" :class="act=='1'?'active':''">信用额度</li>
                    <li @click="active('2')" :class="act=='2'?'active':''">下单额度</li>
                    <li @click="active('3')" :class="act=='3'?'active':''">我的佣金</li>
                    <li @click="active('4')" :class="act=='4'?'active':''">赠品额度</li>
                    <li @click="active('5')" :class="act=='5'?'active':''">售后额度</li>
                    <li @click="active('6')" :class="act=='6'?'active':''">我的押金</li>
                </ul>
            </div>
            <p class="hr"></p>
            <div  class="orderM">
                <div  style="margin-bottom: 100px">
                <template>
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="订单编号"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="时间"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="套餐类型">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="支付金额">
                        </el-table-column>
                    </el-table>
                </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                act:'1',
                rout:{
                  background:"url(" + require("../../assets/BEC16CCF-FA0D-41CB-80FE-BF78C77E9021@1x.png") + ")",
                },
                ren:require('../../assets/84235F17-3ECC-4158-A87F-37678D0D7812@1x.png'),
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
          active(index){
            this.act=index
          }
        },
        components:{

        },
    }
</script>

<style scoped lang="less">
.main{

    margin-top: 15px;


    .orderM{
        background: #fff;
        padding: 15px;
        box-sizing: border-box;
    }
    .title{

        width: 100%;
        padding-bottom:15px;
        border-bottom: 1px solid #eee;
        img{
            vertical-align: top;
            margin-right: 5px;
        }
    }
}
    .box{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        .img{
            width: 184px;
            height: 268px;
            h3{
                font-size: 20px;
                color: #fff;
                text-align: center;
                height: 70px;
                line-height: 70px;
                font-weight: normal;
            }
            .available{
                text-align: center;
                margin-top: 25px;
                span{
                    font-size: 14px;
                    color: #999;
                }
                h4{
                    margin-top: 10px;
                    i{
                        font-size: 14px;
                        color: #999;
                        font-style: normal;
                    }
                    color: #26B7BC ;
                    font-size: 24px;
                }
            }
            .box-footer{
                text-align: center;
                margin-top: 25px;
                span{
                    font-size: 14px;
                    color: #999;
                    display: block;
                }


            }
        }
    }
    .hr{
        height: 20px;
        width: 100%;
        background-color: #F9F9F9;
    }
    .nav_meun{
        display: flex;
        li{
            padding: 10px 0;
            margin: 0 20px;
            cursor: pointer;
        }
        li.active{
            color: #26B7BC;
            border-bottom: 2px solid #26B7BC;
        }
    }
</style>
