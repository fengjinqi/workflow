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
                            <div class="list-item" :class="[index==0?'active':'',{'active':item.id==classId}]"  v-for="(item,index) in addressList" @click="setAddress(item.id)">
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
                            <div class="list-th-item" style="width:25%">商品简介</div>
                            <div class="list-th-item">商品编码</div>
                            <div class="list-th-item">商品数量</div>
                            <div class="list-th-item">支付金额</div>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <div class="listInfo-tr flex-j" v-for="item in shops.data.cartResponseList">
                                <div class="list-tr-item" style="width:25%; text-align:left;">
                                    <div class="order-main-list-item-cont-1">
                                        <div>{{item.name}}</div>

                                    </div>
                                </div>
                                <div class="list-tr-item" style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        {{item.goodsSn}}
                                    </div>
                                </div>
                                <div class="list-tr-item" style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                       {{item.amount}}
                                    </div>
                                </div>
                                <div class="list-tr-item" style="width:15%">
                                    <div class="order-main-list-item-cont-1">
                                        {{item.price}}
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="subinfo">
                            <div>
                                <span class="label">商品总额</span>
                                <span class="val price">¥{{shops.data.goodsTotalPrice}}</span>
                            </div>
                            <div>
                                <span class="label">邮费</span>
                                <span class="val">¥31.00</span>
                            </div>
                            <div>
                                <span class="label">实付金额</span>
                                <span class="val price price1">¥{{shops.data.goodsTotalPrice}}</span></div>
                            <div class="border">

                                <span>寄送至：{{address.province}}{{address.city}}{{address.district}}{{address.address}}</span>
                                <span style="margin:0 20px">收货人：{{address.name}}</span>
                                <span>{{address.phone}}</span>
                            </div>
                        </div>
                        <div class="flex-j" style="text-align: right;">
                            <div style="margin-right: 20px;">买家备注</div>
                            <div class="textareaBox">
                                <textarea class="textarea" v-model="ruleForm.desc"  placeholder="选填对本次交易的说明"></textarea>
                            </div>
                        </div>
                        <div style="text-align: right;margin-top:20px">
                            <el-button type="primary" @click="submitForm">提交订单</el-button>
                        </div>
                    </div>
                </div>
            </div>
            </el-form>
        </div>
    </div>
</template>

<script>
  import {getUserAdders,addGoodsShopst} from '@/api/goods'
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
                addressList:[],

                addressId:'',
                classId:'',
                address:[],
                shops:[],
                shopId:[],
                ruleForm: {
                    desc:'',//备注
                },

            }
        },
        created(){
            /*
            地址
             */
            getUserAdders(getToken('token')).then(res=>{
                if(res.code=='OK'){
                    this.addressList=res.data
                    this.address = this.addressList[0]
                    this.addressId=this.addressList[0].id
                }
            })
            this.shops = this.$store.state.shop.shops
            console.log(this.shops)

        },
        methods: {
            setAddress(id){
                this.addressId=id
                this.addressList.map((item,index)=>{
                    if(item.id==id){
                        this.address=this.addressList[index]
                        this.addressList[index]
                        this.classId = id
                    }
                })
            },
            submitForm() {
                this.shopId=[]
                this.shops.data.cartResponseList.map((el,id)=>{

                    this.shopId.push(el.id)
                })
                let obj={}
                obj.tradeMemo = this.ruleForm.desc
                obj.isExtract = this.typeVal
                obj.addressId = this.addressId
                obj.cartIds = this.shopId.join(',')
                addGoodsShopst(getToken('token'),obj).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.$notify({
                            title: '成功',
                            message: '提交成功',
                            type: 'success'
                        });
                        this.$router.push({name:'home'})
                    }
                })
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
                .list-item.active{
                    border: 4px solid rgba(38, 183, 188, 1)
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
                         /*   height:100px;*/
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
