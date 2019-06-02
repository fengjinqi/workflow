<template>
    <div class="main">
        <div class="nav">
            <ul>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;开户人 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info.openingName}}</li>
                <li>开户银行 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info.openingBank}}</li>
                <li>开户地址 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info.openingAddress}}</li>
                <li>开户账户 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info.openingBankAccount}}</li>
            </ul>
        </div>
        <div class="orderType">
            <div class="flex type"style="position: relative;height: 42px;margin-bottom: 20px">
                <div :class="act=='1'?'active':''" @click="typeC('1')">已申请</div>
                <div :class="act=='2'?'active':''" @click="typeC('2')">已结清</div>
              <el-button type="primary" style="width: 100px;height: 42px;right: 0;position: absolute;background-color: #26B7BC;border-color: #26B7BC;" @click="$router.push({name:'money_add'})">新增</el-button>
            </div>
            <div class="order-main-th flex-j">
                <div class="order-main-th-item" style="width: 15%;">打款金额</div>
                <div class="order-main-th-item" style="width: 40%;">凭证说明</div>
                <div class="order-main-th-item" style="width: 15%;">备注信息</div>
                <div class="order-main-th-item" style="width: 15%;">时间</div>
                <div class="order-main-th-item" style="width: 15%;">订单状态</div>
            </div>
            <div class="order-main-list-item"  v-for="item in list">
                <div class="order-main-list-item-head"></div>
                <div class="order-main-list-item-cont1 flex">

                    <div style="width: 15%;">
                        <div class="order-main-list-item-cont-1">¥{{item.amount}}</div>
                    </div>
                    <div style="width:40%;">
                        <div class="order-main-list-item-cont-1" style="display: flex">
                            <template v-for="img in item.img">
                            <img :src="/api/+img.file" alt=""  style="margin: 0 5px;height: 100px;width: 200px">
                            </template>
                            </div>
                    </div>
                    <div style="width: 15%;">
                        <div class="order-main-list-item-cont-1">{{item.remark}}</div>
                    </div>
                    <div style="width: 15%;">
                        <div class="order-main-list-item-cont-1">{{new Date(item.createTime).toLocaleString()}}</div>
                    </div>
                    <div style="width: 15%;">
                        <div class="order-main-list-item-cont-1">{{item.status==1?'已申请':'已结算'}}</div>
                    </div>
                </div>
            </div>
            <p v-if="list.length==0" style="text-align: center;margin: 20px auto">暂无数据</p>
        </div>
    </div>
</template>

<script>
    import {getbankInfo,getRepaymentList} from '@/api/exit'
    import {getToken} from '@/libs/util'
    export default {
        data(){
            return{
                act:'1',
                info:{},
                list:[]
            }
        },
        created(){
            getbankInfo(getToken(('token'))).then(res=>{
                console.log(res)
                if(res.code=='OK'){
                    this.info = res.data
                }

            })
            getRepaymentList(getToken('token'),1).then((res)=>{
                console.log(res)
                if(res.code=='OK'){
                    res.data.list.map(res=>{
                        let arr = res.voucherImage.split(',')

                        res['img'] =arr.map(item=>{
                            return{file:item}

                        })
                    })
                    this.list = res.data.list
                    console.log(this.list)
                }
            })
        },
        methods:{
            typeC(n){
                this.act=n
                getRepaymentList(getToken('token'),n).then((res)=>{
                    if(res.code=='OK'){
                        res.data.list.map(res=>{
                            console.log(res.voucherImage)
                            // res['img']=JSON.parse(res.voucherImage)
                            // console.log(JSON.parse(res.voucherImage))
                        })
                        this.list = res.data.list
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.nav{
    margin: 20px auto;
    background-color: #E4FEFF;
    padding: 30px 40px;
    font-size: 18px;
    color: rgba(38, 183, 188, 1);
    li{
        margin-bottom: 8px;
    }
}
.orderType{
    margin-top: 20px;
    background: #fff;
    padding: 20px;
    .type{
        /*border-bottom: 1px solid #eee;*/
        div{
            width: 80px;
            text-align: center;
            /*padding-bottom: 20px;*/
            cursor: pointer;
        }
        div.active{
            color: #3198CD;
            border-bottom: 2px solid #3198CD;
        }
    }
    .typeItem{
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #333;
        font-size: 18px;
        cursor: pointer;
    }
    .typeItem.active{
        background-color: rgba(49, 152, 205, 1);
        color: #fff;
    }
    .order-main-th{
        height: 40px;
        line-height: 40px;
        background: #F9F9F9;
        border: 1px solid #EBEEF5;
        .order-main-th-item{
            text-align: center
        }
    }
    .order-main-list-item{
        margin-top: 20px;
        .order-main-list-item-head{
            height: 40px;
            line-height: 40px;
            background: #E4FEFF;
            border: 1px solid #26B7BC;
            div{
                padding:0 20px;
            }
        }
        .order-main-list-item-cont1{
            text-align:center;
            border-right:1px solid #EBEEF5;
            .order-main-list-item-cont-1{
                border-left:1px solid #EBEEF5;
                border-bottom:1px solid #EBEEF5;
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
            .order-main-list-item-cont-2{
                border:none
            }
        }
    }
}
</style>
