<template>
    <div class="login">
        <div class="login-banner">
            <div class="main flex-j">
                <div class="center">
                    <div class="welcom">欢迎加入康美医疗</div>
                    <div class="name">医疗服务平台</div>
                    <div class="banbtn">康美产业服务平台</div>
                    <div class="type">产品 | 物流 | 寄售 | 批发</div>
                </div>
                <div class="form">
                    <div class="form-main">
                        <div class="form-title">用户登录</div>
                        <div class="form-cont">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
                                <el-form-item label="" prop="username">
                                    <el-input v-model="ruleForm.username" placeholder="手机号码"></el-input>
                                </el-form-item>
                                <div class="flex-j">
                                    <el-form-item label="" prop="code">
                                        <el-input v-model="ruleForm.code" placeholder="验证码"></el-input>
                                    </el-form-item>
                                    <el-button type="primary" @click="getCodes" class="getCode">获取验证码</el-button>
                                </div>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')" class="loginBtn">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                  <!--      <div class="form-forgetPwd">忘记密码？</div>-->
                    </div>
                </div>
            </div>
        </div>
        <img src="../../assets/loginbottom.png" alt="" class="loginbottom">
        <!--<div class="login-nav">-->
            <!--<div class="main flex-j">-->
                <!--<div class="nav-item">-->
                    <!--<div class="div">-->
                        <!--<div class="img"><img src="" alt=""></div>-->
                        <!--<div class="title">上市集团参股</div>-->
                        <!--<div class="info">上市集团参股上市集团参股上市集团参股上市集团参股-->
                            <!--上市集团参股上市集团参股</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="nav-item">-->
                    <!--<div class="div">-->
                        <!--<div class="img"><img src="" alt=""></div>-->
                        <!--<div class="title">上市集团参股</div>-->
                        <!--<div class="info">上市集团参股上市集团参股上市集团参股上市集团参股-->
                            <!--上市集团参股上市集团参股</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="nav-item">-->
                    <!--<div class="div">-->
                        <!--<div class="img"><img src="" alt=""></div>-->
                        <!--<div class="title">上市集团参股</div>-->
                        <!--<div class="info">上市集团参股上市集团参股上市集团参股上市集团参股-->
                            <!--上市集团参股上市集团参股</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="nav-item">-->
                    <!--<div class="div">-->
                        <!--<div class="img"><img src="" alt=""></div>-->
                        <!--<div class="title">上市集团参股</div>-->
                        <!--<div class="info">上市集团参股上市集团参股上市集团参股上市集团参股-->
                            <!--上市集团参股上市集团参股</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div></div>-->
    </div>
</template>

<script>
    import {getCode,Login} from '@/api/login'
    import {setToken} from '@/libs/util'
    import {mapActions} from 'vuex'
    export default {
        name: "login",
        data() {
            return {
                ruleForm: {
                    username: '18616755331',//手机号
                    code: '666666',//验证码
                },
                rules: {
                    username: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            //登录
            ...mapActions([
                'handleLogin'
            ]),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let obj = {
                            userName:this.ruleForm.username,
                            code:this.ruleForm.code,
                        }
                        this.handleLogin(obj).then(res=>{

                            let data = res
                            //let data = JSON.parse(res)
                            if(data.code=='OK') {
                                this.$notify({
                                    title: '成功',
                                    message: data.message,
                                    type: 'success'
                                });
                                this.$router.push({
                                    name: 'home'
                                })
                            }else {
                                this.$notify({
                                    title: '警告',
                                    message: data.message,
                                    type: 'warning'
                                });
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //获取验证码
            getCodes(){
                let obj={
                    userName:this.ruleForm.username
                };
                getCode(obj).then(res=>{
                    console.log(res)
                    //let data = JSON.parse(res)
                    let data = res
                    if(data.code=='OK') {
                        this.$notify({
                            title: '成功',
                            message: data.message,
                            type: 'success'
                        });
                    }else {
                        this.$notify({
                            title: '警告',
                            message: data.message,
                            type: 'warning'
                        });
                    }

                }).catch(err=>{
                    console.log(err)
                })
            },
        }
    }
</script>

<style scoped lang="less">
.el-form-item {
    margin-bottom: 30px;
}
.login{
    .login-banner{
        width:100%;
        height: 580px;
        background: url('../../assets/login-banner.png')no-repeat 50%;
        background-size:cover;
        color: #fff;
        position: relative;
        .center{
            margin-top:150px;
            margin-left: 67px;
            .welcom{
                background: url('../../assets/login-icon.png')no-repeat;
                font-size: 20px;
                padding-left: 64px;
            }
            .name{
                font-size: 64px;
                margin:20px 0;
                text-shadow: 0px 4px 5px rgba(1, 90, 135, 0.5);
                font-family: PingFangSC-Semibold;
            }
            .banbtn{
                font-size: 36px;
                background: #fff;
                color: #0777B1;
                width: 326px;
                height: 61px;
                border-radius: 10px;
                text-align: center;
                line-height: 61px;
            }
            .type{
                font-size: 20px;
                margin-top: 77px;
            }
        }
        .form{
            margin-right: 67px;
            width: 419px;
            /*height: 393px;*/
            background-color: rgba(255, 255, 255, 1);
            margin-top:94px;
            .form-main{
                padding:30px;
                .form-title {
                    font-size: 24px;
                    color: #333;
                    margin-bottom: 40px;
                }
                .form-cont{
                    .loginBtn{
                        width:100%;
                        margin-top: 20px;
                    }
                    .getCode{
                        height: 40px;
                        line-height: 40px;
                        padding: 0;
                        width: 139px;
                        text-align: center;
                    }
                }
                .form-forgetPwd{
                    text-align: right;
                    color: #26B7BC;
                    cursor: pointer;
                }
            }
        }
    }
    .login-nav{
        width: 100%;
        height: 212px;
        background: #fff;
        text-align: center;
        .nav-item{
            width: 25%;
            .div{
                padding:20px;
                .img{
                    width: 80px;
                    margin: 0 auto;
                    height: 80px;
                    background: #eee;
                }
                .title{
                    font-size: 18px;
                    color: #333;
                    margin: 10px 0;
                }
                .info{
                    color: #999;
                }
            }
        }
    }
    .loginbottom{
        display: block;
        margin:0 auto;
        width: 100%;
    }
}
</style>
