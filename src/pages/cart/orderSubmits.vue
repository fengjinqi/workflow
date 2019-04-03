<template>
    <div class="orderSubmit">
        <div class="main">
            <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="120px" class="demo-ruleForm">
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
                                <!--<el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="120px" class="demo-ruleForm">-->
                                    <el-form-item label="手术单号" prop="orderId">
                                        <el-input type="text" v-model.number="ruleForm.orderId" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                    </el-form-item>
                                    <el-form-item label="医院名称" prop="hosName">
                                        <el-select v-model="ruleForm.hosName" placeholder="请选择医院">
                                            <el-option label="医院一" value="1"></el-option>
                                            <el-option label="医院二" value="2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="科室名称" prop="keName">
                                        <el-select v-model="ruleForm.keName" placeholder="请选择科室名称">
                                            <el-option label="科室一" value="1"></el-option>
                                            <el-option label="科室二" value="2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="患者姓名" prop="name">
                                        <el-input v-model="ruleForm.name" placeholder="请输入患者姓名"></el-input>
                                    </el-form-item>
                                    <el-form-item label="医师姓名" prop="yiName">
                                        <el-select v-model="ruleForm.yiName" placeholder="请选择医师姓名">
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
                                    <el-form-item label="跟台人员" prop="genName">
                                        <el-select v-model="ruleForm.genName" placeholder="请选择跟台人员">
                                            <el-option label="跟台人员一" value="1"></el-option>
                                            <el-option label="跟台人员二" value="2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="跟台人员电话" prop="genPhone">
                                        <el-input type="text" v-model.number="ruleForm.genPhone" autocomplete="off" placeholder="请输入跟台人员电话"></el-input>
                                    </el-form-item>
                                <!--</el-form>-->
                            </div>
                            <div class="info-item">
                                <!--<el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="120px" class="demo-ruleForm">-->
                                    <el-form-item label="器械名称" prop="jxName">
                                        <el-input type="text" v-model="ruleForm.jxName" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                    </el-form-item>
                                    <el-form-item label="器械规格" prop="container">
                                        <el-input type="text" v-model="ruleForm.container" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                    </el-form-item>
                                    <el-form-item label="器械批号" prop="jxNum">
                                        <el-input type="text" v-model="ruleForm.jxNum" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                    </el-form-item>
                                    <el-form-item label="有效期" prop="inTime">
                                        <!--<el-input type="text" v-model="ruleForm.inTime" autocomplete="off" placeholder="请输入手术单号"></el-input>-->
                                        <el-date-picker
                                                v-model="ruleForm.inTime"
                                                type="date"
                                                placeholder="请选择有效期">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="注册证号" prop="registerNum">
                                        <el-input type="text" v-model="ruleForm.registerNum" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                    </el-form-item>
                                    <el-form-item label="生产企业" prop="companey">
                                        <el-input type="text" v-model="ruleForm.companey" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                    </el-form-item>
                                    <el-form-item label="数量" prop="number">
                                        <el-input type="text" v-model="ruleForm.number" autocomplete="off" placeholder="请输入手术单号"></el-input>
                                    </el-form-item>
                                    <el-form-item label="使用日期" prop="time">
                                        <!--<el-input type="text" v-model="ruleForm.time" autocomplete="off" placeholder="请输入手术单号"></el-input>-->
                                        <el-date-picker
                                                v-model="ruleForm.time"
                                                type="date"
                                                placeholder="请选择使用日期">
                                        </el-date-picker>
                                    </el-form-item>
                                <!--</el-form>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="orderSubmit-main">
                <div class="orderSubmit-main-item">
                    <div class="title">货物清单</div>
                    <div class="listInfo">
                        <div class="listInfo-th flex-j">
                            <div class="list-th-item" style="width:25%">商品名称</div>
                            <div class="list-th-item">类型</div>
                            <div class="list-th-item">价格</div>
                            <div class="list-th-item">商品数量</div>
                            <div class="list-th-item">订单</div>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <div class="listInfo-tr flex-j">
                                <div class="list-tr-item" style="width:25%; text-align:left;">
                                    <div class="order-main-list-item-cont-1">
                                        <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L</div>
                                        <div class="type">标准套餐</div>
                                        <div style="color:#999">骨折/F3/施乐辉</div>
                                        <div style="color:#999">II—24</div>
                                    </div>
                                </div>
                                <div class="list-tr-item" style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        寄售
                                    </div>
                                </div>
                                <div class="list-tr-item" style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        ¥3132.00
                                    </div>
                                </div>
                                <div class="list-tr-item" style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        X2
                                    </div>
                                </div>
                                <div class="list-tr-item" style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        商品详情
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="subinfo">
                            <div>
                                <span class="label">商品总额</span>
                                <span class="val price">¥3132.00</span>
                            </div>
                            <div>
                                <span class="label">邮费</span>
                                <span class="val">¥31.00</span>
                            </div>
                            <div>
                                <span class="label">实付金额</span>
                                <span class="val price price1">¥3132.00</span></div>
                            <div class="border">
                                <span>寄送至：上海市 杨浦区 城区 上海市杨浦</span>
                                <span style="margin:0 20px">收货人：邹宇怀</span>
                                <span>186 3434 3783</span>
                            </div>
                        </div>
                        <div class="flex-j" style="text-align: right;">
                            <div style="margin-right: 20px;">买家备注</div>
                            <div class="textareaBox">
                                <textarea class="textarea" v-model="ruleForm.desc"  placeholder="选填对本次交易的说明"></textarea>
                            </div>
                        </div>
                        <div style="text-align: right;margin-top:20px">
                            <el-button type="primary" @click="submitForm('ruleForm')">提交订单</el-button>
                        </div>
                    </div>
                </div>
            </div>
            </el-form>
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
                    orderId: '',//手术单号
                    hosName: '',//医院名称
                    keName: '',//科室名称
                    name:'',//患者姓名
                    yiName:'',//医生姓名
                    age:'',//患者年龄
                    phone:'',//联系电话
                    genName:'',//跟台人员
                    genPhone:'',//跟台人员电话
                    jxName:'',//机械名称
                    container:'',//容器规格
                    jxNum:'',//器械批号
                    inTime:'',//有效期
                    registerNum:'',//注册证号
                    companey:'',//生产企业
                    number:'',//数量
                    time:'',//使用日期
                    desc:'',//备注
                },
                rules2: {
                    orderId: [
                        { validator: validate1, required: true, message: '请输入手术单号', trigger: 'blur'}
                    ],
                    hosName: [
                        { required: true, message: '请选择医院',trigger: 'blur' }
                    ],
                    keName: [
                        { required: true, message: '请选择科室名称',trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入患者姓名',trigger: 'blur' }
                    ],
                    yiName: [
                        { required: true, message: '请输入医师姓名',trigger: 'blur' }
                    ],
                    age: [
                        { validator: validate2, required: true, message: '请输入患者年龄', trigger: 'blur'}
                    ],
                    phone: [
                        { validator: validate3, required: true, message: '请输入联系电话', trigger: 'blur'}
                    ],
                    genName: [
                        {  required: true, message: '请选择跟台人员', trigger: 'blur'}
                    ],
                    genPhone: [
                        {  required: true, message: '请输入跟台人员电话', trigger: 'blur'}
                    ],
                    jxName: [
                        { required: true, message: '请输入容器名称', trigger: 'blur'}
                    ],
                    container: [
                        { required: true, message: '请输入容器规格', trigger: 'blur'}
                    ],
                    jxNum: [
                        {  required: true, message: '请输入器械批号', trigger: 'blur'}
                    ],
                    inTime: [
                        {  required: true, message: '请输入有效期', trigger: 'blur'}
                    ],
                    registerNum: [
                        {  required: true, message: '请输入注册证号', trigger: 'blur'}
                    ],
                    companey: [
                        {  required: true, message: '请输入生产企业', trigger: 'blur'}
                    ],
                    number: [
                        {  required: true, message: '请输入数量', trigger: 'blur'}
                    ],
                    time: [
                        {  required: true, message: '请输入使用日期', trigger: 'blur'}
                    ]
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
    .el-select , .el-date-editor.el-input{
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
                margin:20px 100px;
                .info-item{
                    width: 50%;
                }
            }
            .listInfo{
                text-align: center;
                .listInfo-th{
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    background-color: rgba(249, 249, 249, 1);
                    border: 1px solid rgba(221, 221, 221, 1);
                    margin: 20px 0;
                    .list-th-item{
                        width: 15%;
                        color: #333;
                    }
                }
                .listInfo-tr{
                    background-color: rgba(228, 254, 255, 1);
                    border: 1px solid rgba(38, 183, 188, 1);
                    .list-tr-item{
                        .order-main-list-item-cont-1{
                            height:100px;
                            padding:15px 20px 10px 20px;
                            div{
                                margin-bottom:5px;
                            }
                            div.type{
                                color: #26B7BC;
                                padding:2px 8px;
                                border-radius:4px;
                                border:1px solid #26B7BC;
                                display:inline-block;
                            }
                        }
                    }
                }
                .subinfo{
                    color: #333;
                    text-align: right;
                    .val{
                        display: inline-block;
                        width: 115px;
                    }
                    .val.price{
                        color: #FF8512;
                    }
                    .val.price1{
                        font-size: 24px;
                    }
                }
                .subinfo>div{
                    margin-bottom: 10px;
                }
                .border{
                    padding-bottom: 20px;
                    border-bottom:1px solid #eee;
                }
                .textareaBox{
                    width: 1061px;
                    height: 68px;
                    border-radius: 4px;
                    padding:10px;
                    background-color: rgba(255, 255, 255, 1);
                    border: 1px solid rgba(238, 238, 238, 1);
                    .textarea{
                        width: 100%;
                        height: 100%;
                        border: none;
                        background: none;
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>
