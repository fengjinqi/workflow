<template>
    <div class="detail-item">
        <div class="flex-j">
            <div class="title titleW">
                <!--医疗信息-->
                <el-collapse v-model="activeNames1" @change="handleChange1">
                    <el-collapse-item title="医疗信息" name="1">
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
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "yiliao",
        data(){
            return{
                activeNames1: [],//医疗信息
                activeNames2: [],//买家备注
                activeNames3: [],//收货人信息
                activeNames4: [],//订单信息
            }
        },
        props:{

        },
        methods: {
            handleChange1(val) {
                console.log(val);
            },
        }
    }
</script>

<style scoped lang="less">
    .detail-item {
        /*padding: 20px;*/
        background: #fff;
        margin-top: 20px;

        .title {
            font-size: 18px;
            font-weight: bold;
            padding: 20px 20px 0 20px
        }

        .titleW {
            width: 100%;
            padding-bottom: 20px;
        }
        .info{
            margin:20px 100px 0 100px;
            font-size: 14px;
            font-weight: normal;
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
    }
</style>
