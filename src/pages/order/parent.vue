<template>
    <div class="pay">
        <div class="main">
            <div class="box">
                <div class="title">账户信息</div>
                <div class="cont">
                    <div class="flex">

                        <div style="margin: 15px 0;"></div>


                        <div class="cont-title"><el-radio v-model="radis" label="0">信用支付额度 </el-radio> </div>
                        <div class="cont-info">可用¥{{$store.state.user.afterSaleAmount.rebateAmount+$store.state.user.afterSaleAmount.giveAmount+$store.state.user.afterSaleAmount.afterSaleAmount}}</div>

                    </div>
                    <div class="cont-main">
                        <el-radio-group v-model="radio" @change="chose">
                            <div>
                                <el-radio label="3">佣金额度支付
                                    <span style="margin-left: 15px;">{{yong}}</span>
                                    <span  style="margin-left: 25px;">佣金余额 ¥{{$store.state.user.afterSaleAmount.rebateAmount}}</span>
                                </el-radio>
                            </div>
                            <div>
                                <el-radio label="2">赠品额度支付
                                    <span style="margin-left: 15px;">{{zen}}</span>
                                    <span  style="margin-left: 25px;">赠品余额 ¥{{$store.state.user.afterSaleAmount.giveAmount}}</span>
                                </el-radio>
                            </div>
                            <div>
                                <el-radio label="4">售后额度支付
                                    <span style="margin-left: 15px;">{{song}}</span>
                                    <span  style="margin-left: 25px;">售后余额 ¥{{$store.state.user.afterSaleAmount.afterSaleAmount}}</span>
                                </el-radio>
                            </div>
                        </el-radio-group>


                    </div>
                    <div class="cont-title">
                        <el-radio v-model="radio" label="1">押金支付 <span style="margin-left: 15px;"></span>  {{ya}} <span  style="margin-left: 25px;">押金余额 ¥{{$store.state.user.afterSaleAmount.deposit}}</span></el-radio>  </div>

                </div>
            </div>
            <div class="box1" style="margin-top:20px;">
                <div class="flex titleBox">
                   <div class="title">支付方式</div>
                   <div class="info">{{radio=='1'?'押金支付':'信用支付'}}</div>
                </div>
                <div class="flex titleBox">
                    <div class="title">实付金额</div>
                    <div class="price">￥{{price}}</div>
                </div>
                <div style="padding:20px 0;">
                    <div class="pay-item">请输入支付密码</div>
                    <div class="pay-item">
                        <el-input  v-model="password" show-password></el-input>
                    </div>
                    <div class="pay-item">请输入6位数字支付密码</div>
                    <div class="pay-item">
                        <el-button type="primary">立即结算</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                checkAll: true,
                checkedCities: [],
                isIndeterminate: false,
                ya:'',
                yong:'',
                zen:'',
                song:'',
                password:"",
                price:0,
                radis:'0',
                radio:'3',

            }
        },
        computed: {

        },

        watch:{
            'radio':function (val) {
                val=='1'?this.radis='':this.radis='0'
            },
            'radis':function (val) {
                val=='0'?this.radio='3':''
            }
        },
        created(){

            this.price=this.$route.query.price

        },

        methods:{
            handleCheckAllChange(val) {
                // this.checkedCities = val
                // this.isIndeterminate = false;

            },
            handleCheckedCitiesChange(value) {
                //alert(value)
                let checkedCount = value.length;
                this.checkAll = checkedCount
                this.isIndeterminate = checkedCount > 0
            },
            chose(value){
                //alert(value);
            }
        }
    }
</script>
<style>
    .cont-title .el-checkbox__label{
        font-size: 16px;
        font-weight: bold;
        color: #333;
    }
    .pay-item .el-input__inner{
        width: 200px;
    }
</style>
<style scoped lang="less">
.pay{
    .box{
        background: #fff;
        margin-top: 20px;
        color: #666;
        font-size: 14px;
        .title{
            font-size: 16px;
            font-weight: bold;
            color: #333;
            padding:20px;
            border-bottom: 1px solid #e8e8e8;
        }
        .cont{
            padding:20px;
            .cont-info{
                margin-left: 40px;
            }
            .cont-main{
                margin: 20px 0;
                padding: 20px;
                background: #F9F9F9;
            }
        }
    }
    .box1{
        color: #666;
        font-size: 14px;
        padding:0 20px;
        background: #fff;
        .titleBox{
            padding:20px 0;
            border-bottom: 1px solid #e8e8e8;
        }
        .title{
            font-size: 16px;
            font-weight: bold;
            color: #333;
        }
        .info{
            margin-left: 20px;
        }
        .price{
            margin-left: 20px;
            color: orangered;
            font-size: 16px;
            font-weight: bold;
        }
        .pay-item{
            margin-bottom: 10px;
        }
    }
}
</style>
