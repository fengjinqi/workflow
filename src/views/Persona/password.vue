<template>
    <div class="main">
        <div class="orderM">
            <div class="title">修改密码</div>
        </div>
        <div class="connter">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="原密码" prop="oldPass" placeholder="请输入原密码">
                    <el-input type="password" v-model="ruleForm2.oldPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item  label="新密码" prop="pass" placeholder="请输入新密码">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item  type="password" label="确认新密码" prop="checkPass" placeholder="请输入新密码">
                    <el-input v-model="ruleForm2.checkPass"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;">
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "password",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.valipdateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
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

<style scoped lang="less">
    .main{
        background: #fff;
        margin-top: 20px;
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