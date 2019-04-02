<template>
    <div class="order">
        <div class="main">
            <div class="orderM flex-j">
                <div class="title">订单管理</div>
                <div class="action">
                    <el-button type="primary" class="reset">重置</el-button>
                    <el-button type="primary" class="search">搜索</el-button>
                </div>
            </div>
            <div class="orderT flex">
                <div class="orderT-label">订单生成时间</div>
                <div>
                    <el-date-picker
                            v-model="time1"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div class="orderT-label1">至</div>
                <div>
                    <el-date-picker
                            v-model="time2"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </div>
            </div>
            <div class="orderType">
                <div class="flex type">
                    <div @click="typeC('1')" :class="act=='1'?'active':''">寄售</div>
                    <div @click="typeC('2')" :class="act=='2'?'active':''">批发</div>
                </div>
                <div class="flex" style="margin: 20px 0;">
                    <div class="typeItem" :class="actType=='1'?'active':''" @click="typeItemC('1')">全部</div>
                    <div class="typeItem" :class="actType=='2'?'active':''" @click="typeItemC('2')">待确认</div>
                    <div class="typeItem" :class="actType=='3'?'active':''" @click="typeItemC('3')">审核中</div>
                    <div class="typeItem" :class="actType=='4'?'active':''" @click="typeItemC('4')">待发货</div>
                    <div class="typeItem" :class="actType=='5'?'active':''" @click="typeItemC('5')">待收货</div>
                    <div class="typeItem" :class="actType=='6'?'active':''" @click="typeItemC('6')">使用中</div>
                    <div class="typeItem" :class="actType=='7'?'active':''" @click="typeItemC('7')">已使用</div>
                    <div class="typeItem" :class="actType=='8'?'active':''" @click="typeItemC('8')">已寄回</div>
                    <div class="typeItem" :class="actType=='9'?'active':''" @click="typeItemC('9')">已入库</div>
                    <div class="typeItem" :class="actType=='10'?'active':''" @click="typeItemC('10')">已完成</div>
                    <div class="typeItem" :class="actType=='11'?'active':''" @click="typeItemC('11')">审核失败</div>
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
                    <div class="order-main-list-item" @click="todetail('1')">
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
                    </div>

                    <div class="order-main-list-item">
                        <div class="order-main-list-item-head flex">
                            <div>2018-10-18 07:49:38</div>
                            <div>订单编号：001A181030DC000</div>
                            <div>类型：寄售</div>
                        </div>
                        <div class="order-main-list-item-cont1 flex">
                            <div style="width:55%" >
                                <div class="flex">
                                    <div style="width:289.75px;text-align:left;">
                                        <div class="order-main-list-item-cont-1">
                                            <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                            <div class="type">标准套餐</div>
                                            <div style="color:#999">骨折/F3/施乐辉</div>
                                            <div style="color:#999">II—24</div>
                                        </div>
                                    </div>
                                    <div style="width:173.84px"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                    <div style="width:173.84px"><div class="order-main-list-item-cont-1">X2</div></div>
                                </div>
                                <div class="flex">
                                    <div style="width:289.75px;text-align:left;">
                                        <div class="order-main-list-item-cont-1">
                                            <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                            <div class="type">标准套餐</div>
                                            <div style="color:#999">骨折/F3/施乐辉</div>
                                            <div style="color:#999">II—24</div>
                                        </div>
                                    </div>
                                    <div style="width:173.84px"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                    <div style="width:173.84px"><div class="order-main-list-item-cont-1">X2</div></div>
                                </div>
                                <div class="flex">
                                    <div style="width:289.75px;text-align:left;">
                                        <div class="order-main-list-item-cont-1">
                                            <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                            <div class="type">标准套餐</div>
                                            <div style="color:#999">骨折/F3/施乐辉</div>
                                            <div style="color:#999">II—24</div>
                                        </div>
                                    </div>
                                    <div style="width:173.84px"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                    <div style="width:173.84px"><div class="order-main-list-item-cont-1">X2</div></div>
                                </div>
                            </div>
                            <div style="width:45%" class="flex">
                                <div class="order-main-list-item-cont-0" style="width:173.84px;">
                                    <div class="order-main-list-item-cont-1 order-main-list-item-cont-2">
                                        <div>信用支付</div>
                                        <div>总额：¥3132</div>
                                        <div style="color:#FF8512">实付：¥3132</div>
                                    </div>
                                </div>
                                <div class="order-main-list-item-cont-0" style="width:173.84px;">
                                    <div class="order-main-list-item-cont-1 order-main-list-item-cont-2">已完成</div>
                                </div>
                                <div class="order-main-list-item-cont-0" style="width:173.84px;">
                                    <div class="order-main-list-item-cont-1 order-main-list-item-cont-2">
                                        <div>订单详情</div>
                                        <div>申请发票</div>
                                    </div>
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
        name: "index",
        data(){
            return {
                time1:"",
                time2:"",
                act:'1',//寄售
                actType:'1'//全部
            }
        },
        methods: {
            typeC(index){
                this.act=index
            },
            typeItemC(index){
                this.actType=index
            },
            //跳转到详情页
            todetail(index){
                if(index=='1'){//待确认
                    this.$router.push({
                        name: 'orderdetail',
                    })
                }
            },
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
