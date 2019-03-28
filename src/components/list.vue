<template>
    <div class="list">
        <div class="main">
            <div class="list-main flex-w">
                <div class="list-item">
                    <div class="list-item-main" @click="todetail('1')">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1" @click="addCart">加入购物车</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1">加入购物车</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1">加入购物车</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1">加入购物车</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1">加入购物车</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1">加入购物车</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1">加入购物车</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="type">寄售</span>
                            <span>股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨骨</span>
                            <span class="num">共8种</span>
                        </div>
                        <div class="divM info">编码：5688454545121</div>
                        <div class="divM info">骨折/F3/施乐辉</div>
                        <div class="divM price">¥15889</div>
                    </div>
                    <div class="flex btnBox">
                        <div class="list-item-btn" @click="choose('1')" :class="chose=='1'?'active':''">标准套餐</div>
                        <div class="list-item-btn" @click="choose('2')" :class="chose=='2'?'active':''">自定义</div>
                        <div class="list-item-btn list-item-btn1">加入购物车</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/store.js'
    export default {
        name: "list",
         data(){
            return {
                chose:'1',//标准
            }
        },
        computed:{

        },
        methods: {
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
            addCart(){
                console.log(store.state.cartNumber);
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
                margin:7px 0;
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