<template>
    <div class="main">
        <div class="orderM">
            <div class="title">修改密码</div>
        </div>
        <div class="connter">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="原密码" prop="reload">
                    <el-input type="password" v-model="ruleForm.reload" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import {putPass} from '@/api/user'
    import {getToken,delToken} from '@/libs/util'
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    reload: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass,required: true, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, required: true,trigger: 'blur' }
                    ],
                    reload: [
                        { required: true, message: '请输入原密码', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let obj={
                            oldPassword:this.ruleForm.reload,
                            newPassword:this.ruleForm.pass,
                            confirmPassword:this.ruleForm.checkPass
                        }
                        putPass(getToken('token'),obj).then(res=>{
                            console.log(res)
                            if(res.code=='OK'){
                                this.$message({
                                    type: 'succes',
                                    message:'修改成功，重新登录'
                                })
                                delToken('token')
                                this.$router.push({name:'login'})
                            }else{
                                this.$message({
                                    type: 'error',
                                    message:res.message
                                })
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<!--
<script>

    export default {
        name: "password",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        //this.$refs.ruleForm.valipdateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    oldPass: '',
                    pass: '',
                    checkPass: ''
                },
                rules2: {
                    oldPass: [
                        { validator: validatePass, rigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],

                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
-->

<style scoped lang="less">
    .main{
        background: #fff;
        margin-top: 20px;
        height: 500px;
        .orderM{
            padding: 15px;
            border-bottom: 1px solid #f9f9f9;
            .title{
                font-size: 18px;
                color: #333;
                border-left: 3px solid #3198CD;
                padding-left: 10px;
            }
        }
        .demo-ruleForm{
            width: 450px;
            margin:60px auto;
        }

    }
</style>
