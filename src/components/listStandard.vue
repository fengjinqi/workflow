<template>
    <div class="list">
        <div class="main">
            <div class="list-main flex-w">
                <div class="list-item">
                    <div class="list-item-main" @click="todetail('1')">
                        <div class="divM">
                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">

                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">

                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">

                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">

                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">

                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">

                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">

                            <span class="divMH">股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>

                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "list",
         data(){
            return {

            }
        },
        computed:{

        },
        methods: {
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
            addCart(){
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
                height: 164px;
                border: 1px solid #eee;
                margin:7px 0;
                position: relative;
                .list-item-main{
                    padding:15px 10px 0 10px;
                    .divM{
                        margin-bottom:10px;
                        .divMH{
                            display: inline-block;
                            height: 35px;
                            /*display: -webkit-box;*/
                            /*-webkit-box-orient: vertical;*/
                            /*-webkit-line-clamp:2;*/
                            overflow: hidden;
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
            }
        }
    }
</style>
