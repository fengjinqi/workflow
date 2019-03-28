<template>
   <div class="detail">
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
                <div class="detail-item" style="border-bottom: none;line-height: 54px;">
                    <div class="flex item-name">
                        <div class="detail-item-name">选择套餐</div>
                        <div class="flex type">
                            <div class="type-item" :class="type=='1'?'active':''" @click="typeChose('1')">标准套餐</div>
                            <div class="type-item" :class="type=='2'?'active':''" @click="typeChose('2')">自定义套餐</div>
                        </div>
                    </div>
                </div>
                <div class="list-title">标准套餐</div>
            </div>
            <List></List>
        </div>
   </div>
</template>

<script>
    import List from '@/components/list'//列表
    export default {
        name: "detail",
        components:{
            List,
        },
        data(){
            return {
                type:'1',//标准套餐
            }
        },
        methods: {
            typeChose(index){
                this.type=index
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
    }
    .list-title{
        font-size: 18px;
        color: #333;
        border-left: 4px solid #26B7BC;
        padding-left: 10px;
    }
}
</style>