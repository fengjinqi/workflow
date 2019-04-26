<template>
   <div class="detail">
       <template v-if="type==1">
           <div class="main">
               <div class="detail-main">
                   <div class="detail-title">{{data.name}}</div>
                   <div class="detail-item flex-j">
                       <div class="flex item-name">
                           <div class="detail-item-name">商品编码</div>
                           <div>{{data.goodsSn}}</div>
                       </div>
                       <div class="item-num">
                           <div>销量：{{data.salesNumber}}</div>
                           <div>库存：{{data.goodsStorage}}</div>
                       </div>
                   </div>
                   <div class="detail-item">
                       <div class="flex item-name">
                           <div class="detail-item-name">产品类别</div>
                           <div>{{data.categoryName}}</div>
                       </div>
                   </div>
                   <div class="detail-item">
                       <div class="flex item-name">
                           <div class="detail-item-name">商品种类</div>
                           <div>{{data.goodsType==1?'单品':'套餐'}}</div>
                       </div>
                   </div>
                   <div class="detail-item">
                       <div class="flex item-name">
                           <div class="detail-item-name">单品价格</div>
                           <div class="price">¥{{data.price}}</div>
                       </div>
                   </div>

               </div>


               <div class="flex-r detail-main">
                   <div class="choseNum"><el-input-number v-model="num1" @change="handleChange" :min="1" :max="data.goodsStorage" label="描述文字"></el-input-number></div>
                   <div><el-button type="primary"  class="addCart" @click="add">加入购物车</el-button></div>
               </div>
               <div class="detail-main">
                   <div class="list-title">
                       <div>商品详情</div>
                   </div>
               </div>
               <div class="detail-main detailInfo">

                   <div class="flex-w">
                       <div class="detailInfo-item">
                           <div class="flex">
                               <div class="name">商品信息</div>
                               <div class="cont"></div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">{{data.name}}</div>
                           </div>
                           <div class="flex">
                               <div class="name">商品编号</div>
                               <div class="cont"></div>
                           </div>
                           <div class="flex">
                               <div class="name">规格</div>
                               <div class="cont">{{data.matModel}}</div>
                           </div>
                           <div class="flex">
                               <div class="name">一级编码</div>
                               <div class="cont"></div>
                           </div>
                           <div class="flex">
                               <div class="name">品类</div>
                               <div class="cont"></div>
                           </div>
                           <div class="flex">
                               <div class="name">类别</div>
                               <div class="cont">{{data.categoryName}}</div>
                           </div>

                       </div>

                   </div>
               </div>
           </div>
       </template>
       <template v-else>
           <div class="main">
               <div class="detail-main">
                   <div class="detail-title">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</div>
                   <div class="detail-item flex-j">
                       <div class="flex item-name">
                           <div class="detail-item-name">套餐编码</div>
                           <div>5688454545121</div>
                       </div>
                       <div class="item-num">
                           <div>销量：5688</div>
                           <div>标准套餐库存：5688</div>
                       </div>
                   </div>
                   <div class="detail-item">
                       <div class="flex item-name">
                           <div class="detail-item-name">业务类型</div>
                           <div>寄售</div>
                       </div>
                   </div>
                   <div class="detail-item">
                       <div class="flex item-name">
                           <div class="detail-item-name">产品类别</div>
                           <div>骨折/F3/施乐辉</div>
                       </div>
                   </div>
                   <div class="detail-item">
                       <div class="flex item-name">
                           <div class="detail-item-name">全套种类</div>
                           <div>12种</div>
                       </div>
                   </div>
                   <div class="detail-item">
                       <div class="flex item-name">
                           <div class="detail-item-name">套餐总价</div>
                           <div class="price">¥15889</div>
                       </div>
                   </div>
                   <div class="detail-item detail-item-last">
                       <div class="flex item-name">
                           <div class="detail-item-name">选择套餐</div>
                           <div class="flex type">
                               <div class="type-item" :class="type=='1'?'active':''" @click="typeChose('1')">标准套餐</div>
                               <div class="type-item" :class="type=='2'?'active':''" @click="typeChose('2')">自定义套餐</div>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="detail-main">
                   <div class="list-title">
                       <div v-if="type=='1'">标准套餐</div>
                       <div v-else>
                           自定义套餐
                           <span class="defined">可一键选择标准套餐内容</span>
                           <el-button type="primary"  class="fastBtn">一键加入标配</el-button>
                       </div>
                   </div>
               </div>
               <div v-if="type=='1'">
                   <ListStandard></ListStandard>
               </div>
               <div v-else>
                   <ListDefined></ListDefined>
               </div>
               <div class="detail-main">
                   <div class="list-title">
                       <div>
                           其他商品
                           <span class="defined" v-if="type=='1'">请在自定义套餐中选择</span>
                       </div>
                   </div>
               </div>
               <div v-if="type=='1'">
                   <ListStandard></ListStandard>
               </div>
               <div v-else>
                   <ListDefined></ListDefined>
               </div>
               <div class="flex-r detail-main">
                   <div class="choseNum">已选 <span>2</span> 件商品</div>
                   <div><el-button type="primary"  class="addCart">加入购物车</el-button></div>
               </div>
               <div class="detail-main">
                   <div class="list-title">
                       <div>套餐详情</div>
                   </div>
               </div>
               <div class="detail-main detailInfo">
                   <div style="margin-bottom: 20px;">
                       <div class="detailInfo-title">套餐详情</div>
                       <div class="flex detailInfo-main">
                           <div class="detailInfo-info">
                               <div class="flex">
                                   <div>套餐名称</div>
                                   <div>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</div>
                               </div>
                               <div class="flex">
                                   <div>套餐编码</div>
                                   <div>32214523351</div>
                               </div>
                           </div>
                           <div class="detailInfo-info">
                               <div class="flex">
                                   <div>套餐类别</div>
                                   <div>骨折/F3/施乐辉</div>
                               </div>
                               <div class="flex">
                                   <div>全套种类</div>
                                   <div>12种</div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex-w">
                       <div class="detailInfo-item">
                           <div class="flex">
                               <div class="name">商品信息</div>
                               <div class="cont">1</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</div>
                           </div>
                           <div class="flex">
                               <div class="name">规格</div>
                               <div class="cont">AX-201</div>
                           </div>
                           <div class="flex">
                               <div class="name">品类</div>
                               <div class="cont">正常 品规</div>
                           </div>
                           <div class="flex">
                               <div class="name">类别</div>
                               <div class="cont">锁定接骨板</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                       </div>
                       <div class="detailInfo-item">
                           <div class="flex">
                               <div class="name">商品信息</div>
                               <div class="cont">1</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</div>
                           </div>
                           <div class="flex">
                               <div class="name">规格</div>
                               <div class="cont">AX-201</div>
                           </div>
                           <div class="flex">
                               <div class="name">品类</div>
                               <div class="cont">正常 品规</div>
                           </div>
                           <div class="flex">
                               <div class="name">类别</div>
                               <div class="cont">锁定接骨板</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                       </div>
                       <div class="detailInfo-item">
                           <div class="flex">
                               <div class="name">商品信息</div>
                               <div class="cont">1</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</div>
                           </div>
                           <div class="flex">
                               <div class="name">规格</div>
                               <div class="cont">AX-201</div>
                           </div>
                           <div class="flex">
                               <div class="name">品类</div>
                               <div class="cont">正常 品规</div>
                           </div>
                           <div class="flex">
                               <div class="name">类别</div>
                               <div class="cont">锁定接骨板</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                       </div>
                       <div class="detailInfo-item">
                           <div class="flex">
                               <div class="name">商品信息</div>
                               <div class="cont">1</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</div>
                           </div>
                           <div class="flex">
                               <div class="name">规格</div>
                               <div class="cont">AX-201</div>
                           </div>
                           <div class="flex">
                               <div class="name">品类</div>
                               <div class="cont">正常 品规</div>
                           </div>
                           <div class="flex">
                               <div class="name">类别</div>
                               <div class="cont">锁定接骨板</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                           <div class="flex">
                               <div class="name">套餐名称</div>
                               <div class="cont">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨 Copy 2</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </template>

   </div>
</template>

<script>
    import ListStandard from '@/components/listStandard'//标准套餐
    import ListDefined from '@/components/listDefined'//自定义套餐
    import {getGoodsDetail,addGoodsShops} from '@/api/goods'
    import {getToken} from '@/libs/util'
    export default {
        name: "detail",
        components:{
            ListStandard,
            ListDefined
        },
        data(){
            return {
                data:[],
                num1:1,
                id:'',
                type:'1',//标准套餐
            }
        },
        created(){
            this.id = this.$route.params.id
            getGoodsDetail(getToken('token'),this.id).then(res=>{
                console.log(res)
                if(res.code=='OK'){
                    this.data = res.data
                }
            })
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            add(){
                let obj = {
                    id:this.id,
                    amount:this.num1,
                }
                addGoodsShops(getToken('token'),obj).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.$notify({
                            title: '成功',
                            message: res.message,
                            type: 'success'
                        });
                        this.$router.push({name:'home'})
                    }
                })
            },
            typeChose(index){
                this.type=index;
            }
        }
    }
</script>

<style scoped lang="less">
.detail{
    margin-top: 20px;
    .detail-main{
        padding:20px 20px 0 20px;
        background: #fff;
        .detail-title{
            padding:0 24px;
            height: 50px;
            line-height: 50px;
            border-radius: 4px;
            background-color: #4EAEE0;
            font-size: 18px;
            color: #fff;
        }
        .detail-item{
            border-bottom: 1px solid #eee;
            height: 76px;
            padding:0 20px;
            color: #999;
            .item-name{
                line-height: 76px;
                .detail-item-name{
                    color: #333;
                    margin-right: 22px;
                }
                .price{
                    color: #FF8819;
                    font-size: 24px;
                }
                .type{
                    margin-left: 12px;
                    .type-item{
                        margin-right: 34px;
                        cursor: pointer;
                    }
                    .type-item.active{
                        color: #26B7BC;
                        border-bottom: 1px solid #26B7BC;
                    }
                }
            }
            .item-num{
                padding:15px 0;
                div{
                    margin:2.5px 0;
                }
            }
        }
        .detail-item-last{
            border-bottom: none;
            line-height: 54px;
            height: 54px;
            .item-name{
                line-height: 54px;
            }
        }
        .choseNum{
            height: 40px;
            line-height: 40px;
            margin-right: 30px;
        }
    }
    .list-title{
        font-size: 18px;
        color: #333;
        border-left: 4px solid #26B7BC;
        padding-left: 10px;
        position: relative;
        .defined{
            color: #999;
            margin-left: 20px;
            font-size: 14px;
        }
        .fastBtn{
            position: absolute;
            right: 0;
        }
    }
    .detailInfo{
        .detailInfo-main{
            padding: 15px 20px;
            border: 1px solid rgba(221, 221, 221, 1);
            .detailInfo-info{
                width: 50%;
                .flex{
                    margin-bottom:10px
                }
            }
        }
        .detailInfo-title{
            height: 40px;
            line-height: 40px;
            background-color: rgba(245, 245, 245, 1);
            border: 1px solid rgba(238, 238, 238, 1);
            border-bottom: 0;
            text-align: center;
        }
        .detailInfo-item{
            margin-bottom: 15px;
            width: 572px;
            /*height: 367px;*/
            border: 1px solid rgba(221, 221, 221, 1);
            .flex{
                height: 52px;
                line-height: 52px;
                border-bottom: 1px solid #EEEEEE;
                .name{
                    width: 76px;
                    background: #F5F5F5;
                    text-align: right;
                    padding-right:20px;
                }
                .cont{
                    padding-left:20px;
                }
            }
        }
    }
}
</style>
