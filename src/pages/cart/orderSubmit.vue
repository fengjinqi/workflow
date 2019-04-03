<template>
    <div class="orderSubmit">
        <div class="main">
            <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="120px" class="demo-ruleForm">
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
                            <div class="list-item" v-for="(item,index) in address" @click="setAddress(item.id)">
                                <div class="name">{{item.province}} {{item.district}}（{{item.name}}</div>
                                <div class="border">{{item.address}}</div>
                                <div>{{item.phone}}</div>
                            </div>
                        </div>
                        <div class="alladdr">显示全部地址</div>
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
  import {getUserAdders} from '@/api/goods'
  import {mapActions} from 'vuex'
  import {getToken} from '@/libs/util'
    export default {
        name: "orderSubmit",
        components:{
            //Count,
        },
        data(){

            return {
                typeVal: true,//收货方式 自提
                address:[],
                addressId:'',
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

            }
        },
        created(){
            getUserAdders(getToken('token')).then(res=>{
                console.log(res)
                if(res.code=='OK'){
                    this.address=res.data
                }
            })
        },
        methods: {
            setAddress(id){
                this.addressId=id
            },
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
