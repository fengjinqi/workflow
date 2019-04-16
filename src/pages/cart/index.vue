<template>
    <div class="cart">
        <div class="main">
            <div class="cart-main">
                <div class="flex cart-title">
                    <div :class="chose=='1'?'active':''" @click="typed('1')">寄售</div>
                    <div :class="chose=='2'?'active':''" @click="typed('2')">批发</div>
                </div>
                <template v-if="chose==1">
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
                </template>
                <template v-else-if="chose==2">
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
                                <template slot-scope="name">

                                    <div class="order-main-list-item-cont-1">
                                        <div>{{ name.row.name}}</div>
                                        <div class="type">单品</div>
                                        <div style="color:#999">{{ name.row.categoryName}}</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="goodsSn"
                                    label="商品编码">
                            </el-table-column>
                            <el-table-column
                                    prop="price"
                                    label="单价">

                            </el-table-column>
                            <el-table-column
                                    label="数量">
                                <template slot-scope="amount" >
                                    <template>
                                        <div ref="dataId"  :dataid="amount.row.goodId"></div>
                                        <el-input-number  v-model="amount.row.amount"  @change="handleChange(amount.row.id,amount.row.amount,amount.row.price)" :min="1" size="mini"></el-input-number>
                                    </template>

                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="小计">
                                <template slot-scope="name">

                                    <div class="order-main-list-item-cont-1">
                                        <div>{{name.row.price*name.row.amount}}</div>

                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="订单操作">
                                <template slot-scope="name">
                                    <div  @click="del(name.row.id)">删除商品</div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="cart-bo">
                        <div class="cart-bo-main flex-j">
                            <div class="flex ri">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAllChange">全选</el-checkbox>
     <!--                           <div> <el-checkbox v-model="checked"  @change="toggleSelection">全选</el-checkbox></div>-->
                                <div>删除</div>
                            </div>
                            <div class="flex le">
                                <div>已选 <span style="color:#26B7BC">{{num}}</span> 件商品 </div>
                                <div>总价：<span style="color:#26B7BC">{{price}}</span> </div>
                                <div> <el-button type="primary" @click="toSubmit">提交</el-button></div>
                            </div>
                        </div>
                    </div>
                </template>

            </div>
        </div>
    </div>
</template>

<script>
    import Count from '@/components/count'//数量
    import {setGoodsShopsCount,delGoodsShopsCount} from '@/api/goods'
    import {mapActions} from 'vuex'
    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        components:{
            Count,
        },
        data(){
            return {
                chose:'2',//寄售
                tableData: [],
                multipleSelection: [],
                num:0,
                price:0,
                isIndeterminate: false,
                checked: false,
                checkAll:false,
                data:[]
            }
        },
        computed: {
            indeterminate(){
                return this.multipleSelection.length &&  this.multipleSelection.length < this.tableData.length
            },
           /* checked: {
                get() {
                    return this.multipleSelection.length === this.tableData.length
                },
                set(val) {
                    this.$refs.multipleTable.toggleAllSelection(val)
                }
            }*/
        },
        created(){
            this.getGoodsShopsCounts()
            this.tableData=this.$store.state.user.goods
        },
        methods: {
            ...mapActions([
                'getGoodsShopsCounts',
                'setSubGoodsShopsList'
            ]),
            handleSelectionChange(val) {
                let vlength = val.length
                this.multipleSelection = val
                this.checkAll = vlength
                this.isIndeterminate = vlength > 0
                if(val.length<=0){
                    this.price=0
                }
                this.num=val.length
                this.price=0
                this.multipleSelection.map((item)=>{
                    this.price+=item.price*item.amount
                })
            },
            handleCheckAllChange() {
                this.$refs.multipleTable.toggleAllSelection()
                this.isIndeterminate = false
            },
            handleChange(id,value,price) {
                let obj ={}
                obj.cartId=id
                obj.amount = value
                setGoodsShopsCount(getToken('token'),id,value).then(res=>{
                    console.log(res)
                    this.getGoodsShopsCounts()
                })
                console.log(value,id,price);
                //this.price=value*price
            },
            del(id) {
                this.$confirm('是否删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    delGoodsShopsCount(getToken('token'),{id:id},id).then(res=>{
                        if(res.code=='OK'){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.tableData.map((item,index)=>{
                                if(item.id==id){
                                    this.tableData.splice(index,1)
                                }
                            })
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            //寄售/批发
            typed(index){
                this.chose=index;
            },
            //全选
           /* handleSelectionChange(val) {
                this.multipleSelection = val;
                if(val.length<=0){
                    this.price=0
                    this.checked=false
                }
                this.num=val.length
                this.price=0
                this.multipleSelection.map((item)=>{
                    this.price+=item.price*item.amount
                })
                if(this.multipleSelection.length==this.tableData.length){
                    this.checked=true
                }
            },*/
            /*toggleSelection(rows) {

                if (rows) {
                    this.tableData.forEach(row => {
                        if(this.multipleSelection){
                            this.$refs.multipleTable.toggleRowSelection(row)
                        }else{
                            this.$refs.multipleTable.toggleRowSelection(row);
                        }
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },*/
            //跳转到提交页面
            toSubmit(){
                this.data=[]
                this.multipleSelection.map(item=>{
                    this.data.push(item.id)

                })
                if(this.data.length<=0){
                    this.$message({
                        type: 'error',
                        message: '请选择商品'
                    });
                    return false
                }
                this.setSubGoodsShopsList({cartIds:this.data.join(',')}).then(res=>{
                    this.$router.push({
                        name: 'orderSubmit',
                        params:{
                            id:Math.random().toString(36).substr(2)
                        }
                    })
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
