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
                                <el-form-item label="" prop="password">
                                    <el-input v-model="ruleForm.password" placeholder="密码"></el-input>
                                </el-form-item>
                                <el-form-item label="" prop="code">
                                    <el-input v-model="ruleForm.code" placeholder="验证码"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="form-forgetPwd">忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="login-nav">
            <div class="main flex">
                <div class="nav-item">
                    <img :src="src" alt="" @click="reload">
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
    import {Login} from '@/api/login'
    let Timestamp = new Date().getTime();
    export default {
        name: "login",
        data() {
            return {
                src:'',
                ruleForm: {
                    username: '18616755331',//手机号
                    password:'123456',
                    code: '',//验证码
                },
                rules: {
                    username: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            };
        },
        created(){
            this.src=`/api/jcaptcha?r=${Timestamp}`

        },
        methods: {
            reload(){
                let Timestamp = new Date().getTime();
                this.src=`/api/jcaptcha?r=${Timestamp}`
            },
            //登录
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let obj = {
                            username:this.ruleForm.username,
                            password:this.ruleForm.password,
                            code:this.ruleForm.code,
                        }
                        Login(obj).then(res=>{
                            console.log(res)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
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
            }
        }
        .form-forgetPwd{
            text-align: right;
            color: #26B7BC;
            cursor: pointer;
        }
    }
    .login-nav{
        width: 100%;
        height: 212px;
        background: #fff;
    }
    .el-form-item {
        margin-bottom: 30px;
    }
    .el-button{
        width:100%;
        margin-top: 20px;
    }
}
</style>