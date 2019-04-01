<template>
    <div class="cart">
        <div class="main">
            <div class="cart-main">
                <div class="flex cart-title">
                    <div :class="chose=='1'?'active':''" @click="typed('1')">寄售</div>
                    <div :class="chose=='2'?'active':''" @click="typed('2')">批发</div>
                </div>
                <div class="tab">
                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                label="商品简介"
                                width="300" >
                            <template slot-scope="scope">
                                <div class="order-main-list-item-cont-1">
                                    <div>{{ scope.row.title}}</div>
                                    <div class="type">{{ scope.row.type}}</div>
                                    <div style="color:#999">{{ scope.row.info1}}</div>
                                    <div style="color:#999">{{ scope.row.info2}}</div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="code"
                                label="商品编码">
                        </el-table-column>
                        <el-table-column
                                prop="price"
                                label="单价">
                        </el-table-column>
                        <el-table-column
                                label="数量">
                            <template slot-scope="scope">
                                <Count></Count>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="xiaoPrice"
                                label="小计">
                        </el-table-column>
                        <el-table-column
                                label="订单操作">
                            <template slot-scope="scope">
                                <div>商品详情</div>
                                <div>删除商品</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="cart-bo">
                    <div class="cart-bo-main flex-j">
                        <div class="flex ri">
                            <div> <el-checkbox  @change="handleSelectionChange">全选</el-checkbox></div>
                            <div>删除</div>
                        </div>
                        <div class="flex le">
                            <div>已选 <span style="color:#26B7BC">2</span> 件商品 </div>
                            <div>总价：<span style="color:#26B7BC">¥15680.00</span> </div>
                            <div> <el-button type="primary" @click="toSubmit">提交</el-button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Count from '@/components/count'//数量
    export default {
        name: "index",
        components:{
            Count,
        },
        data(){
            return {
                chose:'1',//寄售
                tableData: [{
                    title: '股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L',
                    type: '标准套餐',
                    info1: '骨折/F3/施乐辉',
                    info2: 'II—24',
                    code: '5688454545121',
                    price: '¥1566.00',
                    num: '2',
                    xiaoPrice:'¥1566.00',

                },{
                    title: '股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L',
                    type: '标准套餐',
                    info1: '骨折/F3/施乐辉',
                    info2: 'II—24',
                    code: '5688454545121',
                    price: '¥1566.00',
                    num: '2',
                    xiaoPrice:'¥1566.00',

                },{
                    title: '股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L',
                    type: '标准套餐',
                    info1: '骨折/F3/施乐辉',
                    info2: 'II—24',
                    code: '5688454545121',
                    price: '¥1566.00',
                    num: '2',
                    xiaoPrice:'¥1566.00',

                },{
                    title: '股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L',
                    type: '标准套餐',
                    info1: '骨折/F3/施乐辉',
                    info2: 'II—24',
                    code: '5688454545121',
                    price: '¥1566.00',
                    num: '2',
                    xiaoPrice:'¥1566.00',

                },{
                    title: '股骨LC-DCP接骨板Ⅱ（锥螺纹）股骨L',
                    type: '标准套餐',
                    info1: '骨折/F3/施乐辉',
                    info2: 'II—24',
                    code: '5688454545121',
                    price: '¥1566.00',
                    num: '2',
                    xiaoPrice:'¥1566.00',

                }],
                multipleSelection: []
            }
        },
        methods: {
            //寄售/批发
            typed(index){
                this.chose=index;
            },
            //全选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //跳转到提交页面
            toSubmit(){
                this.$router.push({
                    name: 'orderSubmit',
                })
            },
        }
    }
</script>
<style >
    .el-table th{
        background: #EBEEF5!important;
    }
</style>
<style scoped lang="less">

.cart{
    margin-top:20px;
    .cart-main{
        padding:20px;
        background: #fff;
        .cart-title{
            font-size: 18px;
            div{
                border-bottom: 2px solid transparent;
                width: 80px;
                text-align: center;
                padding-bottom: 10px;
                cursor: pointer;
            }
            .active{
                color: #26B7BC;
                border-bottom: 2px solid #26B7BC;
            }
        }
        .tab{
            border: 1px solid #EBEEF5;
            .order-main-list-item-cont-1{
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
        .cart-bo{
            width: 100%;
            height: 60px;
            line-height: 60px;
            background-color: rgba(249, 249, 249, 1);
            margin-top: 52px;
            .cart-bo-main{
                padding:0 20px;
                .ri{
                    div{
                        margin-right: 40px;
                        cursor: pointer;
                    }
                }
                .le{
                    div{
                        margin-left: 40px;
                    }
                }
            }
        }
    }
}
</style>
