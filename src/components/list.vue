<template>
    <div class="list">
        <div class="main">
            <div class="list-main flex-w">
                <div class="list-item" v-for="(item ,index) in list.list" >
                    <div class="list-item-main" @click="todetail(item.id)">
                        <div class="divM">
                            <span class="type">{{item.goodsType==1?'单品':'寄售'}}</span>
                            <span>{{item.name}}</span>
                        </div>
                        <div class="divM info">编码：{{item.goodsSn}}</div>
                        <div class="divM info">{{item.categoryName}}</div>
                    </div>
                    <div class="btnBox">
                        <div class="fl text">¥{{item.price}}</div>
                        <div class="list-item-btn list-item-btn1 fr" @click="addCart(item.id)">加入购物车</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {addGoodsShops} from '@/api/goods'
    import {getToken} from '@/libs/util'
    import {mapActions} from 'vuex'
    export default {
        name: "list",
         data(){
            return {
                chose:'1',//标准
            }
        },
        props:{
          list:{
              type:[Object,Array]
          }
        },
        computed:{

        },
        methods: {
            ...mapActions([
                'getGoodsShopsCounts',

            ]),
            //标准/自定义
            choose(index){
                this.chose=index;
            },
            //跳转到详情页
            todetail(id){
                this.$router.push({
                    name: 'detail',
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

                }
                addGoodsShops(getToken('token'),obj).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.getGoodsShopsCounts()
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
                height: 182px;
                border: 1px solid #eee;
                margin:7px 5px;
                position: relative;
                .list-item-main{
                    padding:15px 10px 10px 10px;
                    height: 125px;
                    box-sizing: border-box;
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
                    overflow: hidden;
                    border-top: 1px solid #eee;
                    .text{
                        color: rgba(255, 136, 25, 1);
                        font-size: 24px;
                        text-align: left;
                        height: 50px;
                        line-height: 50px;
                        padding-left: 15px;
                    }
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
