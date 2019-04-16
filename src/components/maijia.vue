<template>
    <div class="flex-j orderinfo">
        <div class="orderinfo-item">
            <div class="main-b">
                <div class="main-bgd">
                    <!--买家备注-->
                    <el-collapse v-model="activeNames">
                        <el-collapse-item title="买家备注" name="1" >
                            <div>{{addrs.tradeMemo}}</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="orderinfo-item">
            <div class="main-b">
                <div class="main-bgd">
                    <!--收货人信息-->
                    <el-collapse v-model="activeNames3">
                        <el-collapse-item title="收货人信息" name="1">
                            <div>{{addrs.receiverName}}</div>
                            <div>{{addrs.receiverAddress}}</div>
                            <div>{{addrs.receiverPhone}}</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="orderinfo-item">
            <div class="main-b">
                <div class="main-bgd">
                    <!--订单信息-->
                    <el-collapse v-model="activeNames4">
                        <el-collapse-item title="订单信息" name="1">
                            <div>下单时间:{{new Date(addrs.createTime).toLocaleString()}}</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "maijia",
        data(){
            return{
                activeNames: ['1'],
                activeNames3: ['1'],
                activeNames4: ['1'],
            }
        },
        props:{
            addrs:{
                type:[Object,Array]
            }
        },
    }
</script>
<style>
    .el-collapse-item__header{
        font-weight: bold !important;
    }
    .el-collapse-item__wrap{
        border-bottom-color: transparent!important;
    }
</style>
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
    }
    .orderinfo{
        margin-top: 20px;
        .orderinfo-item{
            width: 32.33%;
            background: #fff;
            .main-b{
                padding: 20px;

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

</style>
