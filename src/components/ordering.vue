<template>
    <div class="detail-item">
        <div class="flex-j border">
            <div class="title">寄售订单</div>
            <div class="orderNumb">订单编号：001A181030DC000</div>
        </div>
        <div class="flex" style="height: 300px;">
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
</template>

<script>
    export default {
        name: "ordering",
        data(){
            return{

            }
        },
        props:{

        },
    }
</script>

<style scoped lang="less">
    .detail-item{
        /*padding: 20px;*/
        background: #fff;
        margin-top: 20px;
        .border{
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }
        .title{
            font-size: 18px;
            font-weight: bold;
            padding:20px 20px 0 20px
        }
        .orderNumb{
            font-size: 14px;
            padding:20px 20px 0 20px
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
    }
</style>
