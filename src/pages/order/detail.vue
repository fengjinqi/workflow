<template>
    <div class="detail">
        <div class="main">
            <div class="detail-item">
                <div class="flex-j border">
                    <div class="title">寄售订单</div>
                    <div class="orderNumb">订单编号：001A181030DC000</div>
                </div>
                <div class="flex" style="height: 280px;">
                    <div class="left">
                        <div><el-button type="primary" class="cancel">取消订单</el-button></div>
                        <div><el-button type="primary" class="ok">确认订单</el-button></div>
                    </div>
                    <div class="right">
                        <div class="item">
                            <div class="_title">使用前</div>
                            <div class="cont">
                                <el-steps :active="1">
                                    <el-step title="待确认" icon="el-icon-edit"></el-step>
                                    <el-step title="审核中" icon="el-icon-upload"></el-step>
                                    <el-step title="待发货" icon="el-icon-picture"></el-step>
                                    <el-step title="待收货" icon="el-icon-upload"></el-step>
                                    <el-step title="使用中" icon="el-icon-picture"></el-step>
                                </el-steps>
                            </div>
                        </div>
                        <div class="item">
                            <div class="_title">使用后</div>
                            <div class="cont">
                                <el-steps :active="1">
                                    <el-step title="已使用" icon="el-icon-edit"></el-step>
                                    <el-step title="已寄回" icon="el-icon-upload"></el-step>
                                    <el-step title="已入库" icon="el-icon-picture"></el-step>
                                    <el-step title="已完成" icon="el-icon-upload"></el-step>
                                </el-steps>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-item">
                <div class="flex-j">
                    <div class="title">医疗信息</div>
                </div>
                <div class="info flex-j">
                    <div class="info-item">
                        <div class="flex">
                            <div class="label">手术单号</div>
                            <div class="val">38347584758592384328</div>
                        </div>
                        <div class="flex">
                            <div class="label">医院名称</div>
                            <div class="val">上海市XX第六医院</div>
                        </div>
                        <div class="flex">
                            <div class="label">科室名称</div>
                            <div class="val">ASW</div>
                        </div>
                        <div class="flex">
                            <div class="label">医师姓名</div>
                            <div class="val">王是</div>
                        </div>
                        <div class="flex">
                            <div class="label">患者姓名</div>
                            <div class="val">顾和与</div>
                        </div>
                        <div class="flex">
                            <div class="label">患者年龄</div>
                            <div class="val">23</div>
                        </div>
                        <div class="flex">
                            <div class="label">联系电话</div>
                            <div class="val">135 7878 9800</div>
                        </div>
                        <div class="flex">
                            <div class="label">跟台人员</div>
                            <div class="val">臻开心</div>
                        </div>
                        <div class="flex">
                            <div class="label">跟台人电话</div>
                            <div class="val">135 7878 9800</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="flex">
                            <div class="label">器械名称</div>
                            <div class="val">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                        </div>
                        <div class="flex">
                            <div class="label">器械规格</div>
                            <div class="val">请输入器械规格</div>
                        </div>
                        <div class="flex">
                            <div class="label">器械批号</div>
                            <div class="val">请输入器械批号</div>
                        </div>
                        <div class="flex">
                            <div class="label">有效期</div>
                            <div class="val">2019-04-15</div>
                        </div>
                        <div class="flex">
                            <div class="label">注册证号</div>
                            <div class="val">请输入注册账号</div>
                        </div>
                        <div class="flex">
                            <div class="label">生产企业</div>
                            <div class="val">请输入生产企业名称</div>
                        </div>
                        <div class="flex">
                            <div class="label">数量</div>
                            <div class="val">5</div>
                        </div>
                        <div class="flex">
                            <div class="label">使用日期</div>
                            <div class="val">请输入使用日期</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex-j orderinfo">
                <div class="orderinfo-item">
                    <div class="main-b">
                        <div class="main-bgd">
                            <el-dropdown trigger="click">
                              <span class="el-dropdown-link">
                                买家备注<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>备注信息</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
                <div class="orderinfo-item">
                    <div class="main-b">
                       <div class="main-bgd">
                           <el-dropdown trigger="click">
                              <span class="el-dropdown-link">
                                收货人信息<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                               <el-dropdown-menu slot="dropdown">
                                   <el-dropdown-item>收货人信息</el-dropdown-item>
                               </el-dropdown-menu>
                           </el-dropdown>
                       </div>
                    </div>
                </div>
                <div class="orderinfo-item">
                    <div class="main-b">
                        <div class="main-bgd">
                            <el-dropdown trigger="click">
                              <span class="el-dropdown-link">
                                订单信息<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>订单信息</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-item">
                <div class="flex-j">
                    <div class="title">货物清单</div>
                </div>
                <div class="orderList">
                    <div class="flex-r" style="margin-bottom: 20px;">
                        <div>共 <span style="color: #3198CD">2</span> 件商品</div>
                        <div style="margin-left:20px;">总价：<span style="color: #FF8512">¥15680.00</span></div>
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
                                <div>2018-10-18 07:49:38</div>
                                <div>订单编号：001A181030DC000</div>
                                <div>类型：寄售</div>
                            </div>
                            <div>
                                <div class="order-main-list-item-cont1 flex">
                                    <div style="width:30%; text-align:left;">
                                        <div class="order-main-list-item-cont-1">
                                            <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                            <div class="type">标准套餐</div>
                                            <div style="color:#999">骨折/F3/施乐辉</div>
                                            <div style="color:#999">II—24</div>
                                        </div>
                                    </div>
                                    <div style="width:15%"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                    <div style="width:15%"><div class="order-main-list-item-cont-1 color">¥3132.00</div></div>

                                    <div style="width:15%"><div class="order-main-list-item-cont-1">X2</div></div>
                                    <div style="width:25%">
                                        <div class="order-main-list-item-cont-1">
                                            <div>订单详情</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-main-list-item-cont1 flex">
                                    <div style="width:30%; text-align:left;">
                                        <div class="order-main-list-item-cont-1">
                                            <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                            <div class="type">标准套餐</div>
                                            <div style="color:#999">骨折/F3/施乐辉</div>
                                            <div style="color:#999">II—24</div>
                                        </div>
                                    </div>
                                    <div style="width:15%"><div class="order-main-list-item-cont-1">5688454545121</div></div>
                                    <div style="width:15%"><div class="order-main-list-item-cont-1 color">¥3132.00</div></div>

                                    <div style="width:15%"><div class="order-main-list-item-cont-1">X2</div></div>
                                    <div style="width:25%">
                                        <div class="order-main-list-item-cont-1">
                                            <div>订单详情</div>
                                        </div>
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
        name: "detail",
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
.detail{
    .detail-item{
        padding: 20px;
        background: #fff;
        margin-top: 20px;
        .border{
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }
        .title{
            font-size: 18px;
            font-weight: bold;
        }
        .orderNumb{
            font-size: 14px;
        }
        .left{
            width:200px;
            padding-top: 93px;
            padding-left: 80px;
            border-right: 1px solid #eee;
            .cancel{
                text-align: center;
                width: 100px;
                height: 42px;
                line-height: 42px;
                border-radius: 4px;
                border: 1px solid rgba(49, 152, 205, 1);
                background: #fff;
                color: rgba(49, 152, 205, 1);
                padding: 0;
                margin-bottom: 10px;
            }
            .ok{
                text-align: center;
                line-height: 42px;
                width: 100px;
                height: 42px;
                border-radius: 4px;
                background-color: rgba(49, 152, 205, 1);
                padding: 0;
            }
        }
        .right{
            width: 880px;
            .item{
                height: 110px;
                padding:20px;
                ._title{
                    font-size: 18px;
                }
                .cont{
                    margin: 30px 60px 0 60px;
                }
            }
        }
        .info{
            margin:20px 100px 0 100px;
            .info-item{
                width: 50%;
                .flex{
                    margin-bottom: 15px;
                    .label{
                        margin-right: 20px;
                        display: inline-block;
                        width: 90px;
                        text-align: right;
                    }
                    .val{
                        color: #666;
                    }
                }
            }
        }
        .orderList{
            padding-top: 26px;
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
    .orderinfo{
        margin-top: 20px;
        .orderinfo-item{
            width: 32.33%;
            .main-b{
                padding: 20px;
                background: #fff;
                .main-bgd{
                    .el-dropdown-link {
                        cursor: pointer;
                        color: #409EFF;
                        outline: none;
                    }
                    .el-dropdown{
                        width: 100%;
                        outline: none;
                        span{
                            display: inline-block;
                            width: 100%;
                            outline: none;
                            .el-icon-arrow-down{
                                float: right;
                            }
                        }
                    }
                    .el-icon-arrow-down {
                        font-size: 12px;
                    }
                    .demonstration {
                        display: block;
                        color: #8492a6;
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}
.el-dropdown-menu{
    width: 20%;
    /*left: 0!important;*/
    max-height:400px!important;
    overflow: visible;
}
</style>
