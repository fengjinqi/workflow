<template>
    <div class="orderSubmit">
        <div class="main">
            <div class="orderSubmit-main">
                <div class="orderSubmit-main-item flex-j">
                    <div class="title">收货方式</div>
                    <div>
                        <el-switch
                                v-model="typeVal"
                                active-text="自提">
                        </el-switch>
                    </div>
                </div>
                <div class="orderSubmit-main-item">
                    <div class="title">收货人信息</div>
                    <div class="list flex-w">
                        <div class="list-item">
                            <div class="name">上海 杨浦区（邹宇怀收</div>
                            <div class="border">凉城路1201弄 凤凰大楼 18号楼 1 copy</div>
                            <div>186 3444 1386</div>
                        </div>
                        <div class="list-item">
                            <div class="name">上海 杨浦区（邹宇怀收</div>
                            <div class="border">凉城路1201弄 凤凰大楼 18号楼 1 copy</div>
                            <div>186 3444 1386</div>
                        </div>
                        <div class="list-item">
                            <div class="name">上海 杨浦区（邹宇怀收</div>
                            <div class="border">凉城路1201弄 凤凰大楼 18号楼 1 copy</div>
                            <div>186 3444 1386</div>
                        </div>
                        <div class="list-item">
                            <div class="name">上海 杨浦区（邹宇怀收</div>
                            <div class="border">凉城路1201弄 凤凰大楼 18号楼 1 copy</div>
                            <div>186 3444 1386</div>
                        </div>
                    </div>
                    <div class="alladdr">显示全部地址</div>
                </div>
            </div>
            <div class="orderSubmit-main">
                <div class="orderSubmit-main-item">
                    <div class="title">医疗信息</div>
                    <div class="info flex-j">
                        <div class="info-item">
                            <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                                <el-form-item label="手术单号" prop="orderid">
                                    <el-input type="text" v-model.number="ruleForm.orderid" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                </el-form-item>
                                <el-form-item label="医院名称" prop="hosname">
                                    <el-select v-model="ruleForm.hosname" placeholder="请选择医院">
                                        <el-option label="医院一" value="1"></el-option>
                                        <el-option label="医院二" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="科室名称" prop="kename">
                                    <el-select v-model="ruleForm.kename" placeholder="请选择科室名称">
                                        <el-option label="科室一" value="1"></el-option>
                                        <el-option label="科室二" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="患者姓名" prop="name">
                                    <el-input v-model="ruleForm.name" placeholder="请输入患者姓名"></el-input>
                                </el-form-item>
                                <el-form-item label="医师姓名" prop="yiname">
                                    <el-select v-model="ruleForm.yiname" placeholder="请选择医师姓名">
                                        <el-option label="医生一" value="1"></el-option>
                                        <el-option label="医生二" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="患者年龄" prop="age">
                                    <el-input type="text" v-model.number="ruleForm.age" autocomplete="off" placeholder="请输入患者年龄"></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话" prop="phone">
                                    <el-input type="text" v-model.number="ruleForm.phone" autocomplete="off" placeholder="请输入联系电话"></el-input>
                                </el-form-item>
                                <el-form-item label="跟台人员" prop="genname">
                                    <el-select v-model="ruleForm.genname" placeholder="请选择跟台人员">
                                        <el-option label="跟台人员一" value="1"></el-option>
                                        <el-option label="跟台人员二" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="跟台人员电话" prop="genphone">
                                    <el-input type="text" v-model.number="ruleForm.genphone" autocomplete="off" placeholder="请输入跟台人员电话"></el-input>
                                </el-form-item>


                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交订单</el-button>

                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="info-item">

                        </div>
                    </div>
                </div>
            </div>
            <div class="orderSubmit-main"></div>
        </div>
    </div>
</template>

<script>
    // import Count from '@/components/count'//数量
    export default {
        name: "orderSubmit",
        components:{
            //Count,
        },
        data(){
            var validate1 = (rule, value, callback) => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    callback();
                }
            };
            var validate2 = (rule, value, callback) => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    callback();
                }
            };
            var validate3 = (rule, value, callback) => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    callback();
                }
            };
            var validate4 = (rule, value, callback) => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    callback();
                }
            };
            return {
                typeVal: true,//收货方式 自提
                ruleForm: {
                    orderid: '',//手术单号
                    hosname: '',//医院名称
                    kename: '',//科室名称
                    name:'',//患者姓名
                    yiname:'',//医生姓名
                    age:'',//患者年龄
                    phone:'',//联系电话
                    genname:'',//跟台人员
                    genphone:'',//跟台人员电话
                },
                rules2: {
                    orderid: [
                        { validator: validate1, required: true, message: '请输入手术单号', trigger: 'blur'}
                    ],
                    hosname: [
                        { required: true, message: '请选择医院',trigger: 'blur' }
                    ],
                    kename: [
                        { required: true, message: '请选择科室名称',trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入患者姓名',trigger: 'blur' }
                    ],
                    yiname: [
                        { required: true, message: '请输入医师姓名',trigger: 'blur' }
                    ],
                    age: [
                        { validator: validate2, required: true, message: '请输入患者年龄', trigger: 'blur'}
                    ],
                    phone: [
                        { validator: validate3, required: true, message: '请输入联系电话', trigger: 'blur'}
                    ],
                    genname: [
                        {  required: true, message: '请选择跟台人员', trigger: 'blur'}
                    ],
                    genphone: [
                        { validator: validate4, required: true, message: '请输入跟台人员电话', trigger: 'blur'}
                    ],
                }
            }
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

        }
    }
</script>

<style scoped lang="less">
    .el-select {
        width: 100%;
    }
.orderSubmit{
    .orderSubmit-main{
        background: #fff;
        margin-top: 20px;
        .orderSubmit-main-item{
            padding:20px;
            .title{
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .list{
                margin-top: 20px;
                .list-item{
                    width: 270px;
                    /*height: 154px;*/
                    border-radius: 4px;
                    background-color: rgba(255, 255, 255, 1);
                    border: 4px solid rgba(238, 238, 238, 1);
                    div{
                        padding:15px;
                    }
                    .border{
                        border-top:1px solid #EEEEEE;
                        border-bottom:1px solid #EEEEEE;
                    }
                    .name{
                        font-size: 18px;
                    }
                }
            }
            .alladdr{
                color: #26B7BC;
                margin-top: 20px;
            }
            .info{
                margin:24px 100px;
                .info-item{
                    width: 50%;
                }
            }
        }
    }
}
</style>
