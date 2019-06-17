<template>
    <div class="main">
        <div class="conner">
            <div class="nav">
                发票详情
            </div>
            <div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
                    <el-form-item label="发票类型" >
                        普通发票
                    </el-form-item>
                    <el-form-item label="抬头类型" >
                        企业单位
                    </el-form-item>
                    <el-form-item label="发票抬头" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="纳税人识别号" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="发票内容" >
                        医疗器械
                    </el-form-item>

                    <el-form-item label="发票金额" >
                        ¥13578.00
                    </el-form-item>
                    <el-form-item label="备注说明" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="银行账户" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="开票内容" prop="name">
                        <el-input type="text" v-model="ruleForm.name"></el-input>
                    </el-form-item>




                    <el-form-item>
                        <div class="footers">
                            开票金额：<span>¥15680.00</span>
                            <el-button type="primary" @click="submitForm('ruleForm')" style="background-color: rgba(38, 183, 188, 1);color: #fff;border-color: rgba(38, 183, 188, 1);">确认开票</el-button>

                        </div>

                    </el-form-item>
                </el-form>
            </div>
            <div id="table">
                <h4><img :src="sang" alt="">商品内容</h4>
                <template>
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="商品名称"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="编号"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="数量">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="单价">
                        </el-table-column>
                    </el-table>
                </template>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                sang:require('../../assets/D1EDFCFC-11DF-462E-94E4-8EB48A88151E@1x.png'),
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
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
<style lang="less">
    .conner{
        .el-input{
            width: 35%;
        }

    }
    #table{
        margin: 40px 0;
        h4{
            margin-bottom: 15px;
            img{
                vertical-align: middle;
                margin-right: 5px;
            }
        };
        th{
            background-color: rgba(38, 183, 188, 1)!important;
            color: #fff;
        }
    }
</style>
<style scoped lang="less">
    .main {
        width: 1200px;
        margin: 0 auto;
        .conner{
            margin-top: 20px;
            background-color: #fff;

            padding: 20px;
            .nav{
                border-left: 4px solid rgba(38, 183, 188, 1);
                padding-left: 15px;
                font-size: 18px;
                margin-bottom: 20px;
            }
        }
    }
    .footers{
        text-align: right;
        span{
            color: orange;
            padding-right: 15px;
        }
    }
</style>
