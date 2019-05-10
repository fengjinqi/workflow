<template>
    <div class="list">
        <div class="main">
            <div class="list-main flex-w">
                <div class="list-item" v-for="(item,index) in list.list">
                    <div class="list-item-main" @click="todetail(item.id)">
                        <div class="divM">
                            <span class="type">{{item.goodsType==2?'寄售':'单品'}}</span>
                            <span>{{item.name}}</span>
                            <span class="num">共{{item.number}}种</span>
                        </div>
                        <div class="divM info">编码：{{item.packageSn}}</div>
                        <div class="divM info">{{item.categoryName}}</div>
                        <div class="divM price">¥{{item.price}}</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose(index)" >标准套餐</div>
                        <!--<div class="list-item-btn" @click="choose(index)" :class="[chose==index?'active':'']">自定义</div>-->
                        <div class="list-item-btn list-item-btn1" @click="addCart(item.id)">加入购物车</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {addTaoGoodsShops} from '@/api/goods'
    import {mapActions} from 'vuex'
    import {getToken} from '@/libs/util'
    export default {
        name: "lists",
         data(){
            return {
                chose:'',//标准
            }
        },
        props:{
          list:{
              type:[Array,Object]
          }
        },
        computed:{

        },
        methods: {
            ...mapActions([
                'getGoodsShopsCounts',
                'getGoodsTaoShopsCounts'

            ]),
            //标准/自定义
            choose(index){
                this.chose=index;
            },
            //跳转到详情页
            todetail(id){
                this.$router.push({
                    name: 'searchs_detail',
                    params:{
                        id:id
                    }
                })
            },
            //加入购物车
            addCart(index){
                let obj = {
                    id:index,
                    amount:1,
                    goodsJson:null
                }
             /*   let chi = JSON.stringify([{
                    amount:'',
                    goodsId:''
                }])
                obj.goodsJson=chi*/
                addTaoGoodsShops(getToken('token'),obj).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.getGoodsShopsCounts()
                        this.getGoodsTaoShopsCounts()
                        this.$notify({
                            title: '成功',
                            message: res.message,
                            type: 'success'
                        });
                        //this.$router.push({name:'home'})
                    }
                })
            },
        }
    }
</script>

<style scoped lang="less">
    .list{
        .list-main{
            padding:15px 20px;
            background:#fff;
            .list-item{
                width: 278px;
                height: 218px;
                border: 1px solid #eee;
                margin: 7px 5px;
                position: relative;
                .list-item-main{
                    padding:15px 10px 0 10px;
                    .divM{
                        margin-bottom:10px;
                        .type{
                            color: #fff;
                            background:#26B7BC;
                            padding:2px 6px;
                            border-radius:4px;
                            margin-right: 6px;
                        }
                        .num{
                            color: #FF8819;
                            margin-left: 6px;
                        }
                    }
                    .divM.info{
                        color: #999;
                        font-size:12px;
                    }
                    .divM.price{
                        color: #FF8819;
                        font-size: 24px;
                    }
                }
                .btnBox{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    .list-item-btn{
                        width:72px;
                        text-align: center;
                        height: 50px;
                        line-height: 50px;
                        font-size:12px;
                        color:#999;
                        cursor:pointer;
                    }
                    .list-item-btn1{
                        width:134px;
                        color: #FF8819;
                        font-size:14px;
                    }
                    .list-item-btn.active{
                        background: #E4FEFF;
                        color: #26B7BC;
                    }
                }

            }
        }
    }
</style>
