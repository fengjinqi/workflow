<template>
    <div class="userInfo main flex">
        <div class="user-left">
            <div class="header"><img style="width: 80px;height: 80px;border-radius: 50%;background: #ccc;display: block;margin: 0 auto" :src='/api/+$store.state.user.users.avatar' alt=""></div>
            <div class="userName">{{$store.state.user.users.userName}}</div>
            <div class="userPhone">{{$store.state.user.users.mobile}}</div>
            <el-button type="primary" class="userBtn">{{$store.state.user.users.typeName}}</el-button>
        </div>
        <div class="user-right">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="资料信息" name="zl">
                    <div style="padding:0 20px 40px 20px;border-bottom:1px solid #ddd;">
                        <div class="title">基本信息</div>
                        <div class="cont">
                            <div class="cont-item">
                                <label>性别</label>
                                <span>{{$store.state.user.users.sex}}</span>
                            </div>
                            <div class="cont-item">
                                <label>出生日期</label>
                                <span>{{$store.state.user.users.birthDate}}</span>
                            </div>
                            <div class="cont-item">
                                <label>电话号码</label>
                                <span>{{$store.state.user.users.mobile}}</span>
                            </div>
                            <div class="cont-item">
                                <label>固定电话</label>
                                <span>{{$store.state.user.users.phone}}</span>
                            </div>
                            <div class="cont-item">
                                <label>身份证号</label>
                                <span>{{$store.state.user.users.idCard}}</span>
                            </div>
                            <div class="cont-item">
                                <label>银行</label>
                                <span>{{$store.state.user.users.bankName}}</span>
                            </div>
                            <div class="cont-item">
                                <label>银行卡号</label>
                                <span>{{$store.state.user.users.bankAccount}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="padding:30px 20px 40px 20px">
                        <div class="title">公司信息</div>
                        <div class="cont">
                            <div class="cont-item">
                                <label>企业名称</label>
                                <span>{{$store.state.user.users.companyName}}</span>
                            </div>
                            <div class="cont-item">
                                <label>公司地址</label>
                                <span>{{$store.state.user.users.compAddress}}</span>
                            </div>

                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="证件信息" name="zj">
                    <!--<div class="title">证件信息</div>-->
                    <div class="cont flex-j">
                        <div>
                            <div class="imgBoxtitle">营业执照</div>
                            <div class="imgbOX">
                                <img style="width: 100%;height: 100%;" :src='/api/+JSON.parse($store.state.user.users.licenseImage).file' alt="">
                                <!--<div class="bo">还有6个月到期</div>-->
                            </div>
                        </div>
                        <div>
                            <div class="imgBoxtitle">医疗器械经营许可证</div>
                            <div class="imgbOX">
                                <img style="width: 100%;height: 100%;" :src='/api/+JSON.parse($store.state.user.users.medicalDeviceLicenseImage).file' alt="">
                                <!--<div class="bo">还有6个月到期</div>-->
                            </div>
                        </div>
                        <div>
                            <div class="imgBoxtitle">授权委托书</div>

                            <div class="imgbOX">
                                <img style="width: 100%;height: 100%;" :src='/api/+JSON.parse($store.state.user.users.medicalDeviceLicenseImage).file' alt="">
                                <!--<div class="bo">还有6个月到期</div>-->
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "password",
        data(){
            return{
                activeName: 'zl'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>
<style lang="less">

</style>
<style scoped lang="less">
.userInfo{
    margin-top:20px;
    .user-left{
        width: 200px;
        height: 210px;
        text-align: center;
        padding: 20px;
        background: #fff;
        position: relative;
        .header{
            margin: 0 auto;
            width: 80px;
            height: 80px;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;
            background: #000;
        }
        .userName{
            color: #333;
            margin:10px 0;
        }
        .userPhone{
            color: #999;
        }
        .userBtn{
            width: 200px;
            position: absolute;
            bottom: 20px;
            left: 50%;
            margin-left:-100px;
        }
    }
    .user-right{
        width: 900px;
        padding: 20px;
        background: #fff;
        margin-left: 20px;
        .title{
            margin-bottom: 20px;
        }
        .cont{
            .cont-item{
                margin-bottom: 15px;
                label{
                    display: inline-block;
                    width: 120px;
                    text-align: right;
                    margin-right: 30px;
                    color: #333;
                }
            }
            .imgBoxtitle{
                text-align: center;
            }
            .imgbOX{
                width: 252px;
                height: 346px;
                /*background: red;*/
                position: relative;
                margin:20px 20px 0 20px;
                .bo{
                    color: #fff;
                    background: rgba(0,0,0,0.4);
                    padding:10px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 232px;
                }
            }
        }
    }
}
</style>
