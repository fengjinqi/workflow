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
                                :data="tableData1"
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
                                        <div>{{ scope.row.name}}</div>
                                        <div class="type">{{ scope.row.packageType=='1'?'标准套餐':'自定义套餐'}}</div>
                                        <div style="color:#999">{{ scope.row.categoryName}}</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="packageSn"
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
                                        <el-input-number  v-model="amount.row.amount"  @change="handleChange1(amount.row.cartId,amount.row.amount,amount.row.price)" :min="1" size="mini"></el-input-number>
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
                                <template slot-scope="scope">
                                    <!--<div>商品详情</div>-->
                                    <div @click="taoDel(scope.row.cartId)">删除商品</div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="cart-bo">
                        <div class="cart-bo-main flex-j">
                            <div class="flex ri">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAllChange">全选</el-checkbox>
                                <!--                           <div> <el-checkbox v-model="checked"  @change="toggleSelection">全选</el-checkbox></div>-->
                                <div @click="dek">删除</div>
                            </div>
                            <div class="flex le">
                                <div>已选 <span style="color:#26B7BC">{{num}}</span> 件商品 </div>
                                <div>总价：<span style="color:#26B7BC">¥{{price}}</span> </div>
                                <div> <el-button type="primary" @click="toSubmits">提交</el-button></div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else-if="chose==2">
                    <div style="text-align: right">
                        <div style="cursor: pointer;margin-top: 10px;" @click="$router.push({name:'moban'})"><img :src="dao" alt="">表格批量导入</div>
                        <div style="margin: 15px 0;" class="parent">
                            新增商品 <input type="text" placeholder="请输入商品编号" style="border:1px solid #26B7BC;height: 30px;line-height: 30px;border-radius: 5%;width: 350px;padding-left: 15px;" >
                            <div class="child"><i class="el-icon-search"></i></div>
                        </div>
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
                                <div @click="dels">删除</div>
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
    import {setGoodsShopsCount,delGoodsShopsCount,setGoodsTaoShopsCount,delGoodsTaoShopsCount,subGoodsTaoShopsCount} from '@/api/goods'
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
                dao:require('../../assets/2E6208CD-1AA3-4947-9798-E653C4289E11@1x.png'),
                tableData1:[],
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
        },
        created(){
            this.getGoodsShopsCounts()
            this.getGoodsTaoShopsCounts()
            this.tableData=this.$store.state.user.goods.list
            this.tableData1=this.$store.state.user.tao.standardPackageResponse

                this.$store.state.user.tao.definedPackageResponse.map(item=>{
                    this.tableData1.push(item)

                })
        },
        methods: {
            ...mapActions([
                'getGoodsShopsCounts',
                'setSubGoodsShopsList',
                'setSubTaoGoodsShopsList',
                'getGoodsTaoShopsCounts'
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
                    this.getGoodsTaoShopsCounts()
                })
                console.log(value,id,price);
                console.log(this.multipleSelection)
               // this.price=value*price
                this.price=0
                this.multipleSelection.map((item)=>{
                    this.price+=item.price*item.amount
                })
            },
            handleChange1(id,value,price) {
                let obj ={}
                obj.id=id
                obj.amount = value
                setGoodsTaoShopsCount(getToken('token'),obj).then(res=>{
                    console.log(res)
                    this.getGoodsShopsCounts()
                    this.getGoodsTaoShopsCounts()
                })
                console.log(value,id,price);
                console.log(this.multipleSelection)
                // this.price=value*price
                this.price=0
                this.multipleSelection.map((item)=>{
                    this.price+=item.price*item.amount
                })
            },
            /*
            *单删除
            */
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
                            this.getGoodsShopsCounts()
                            this.getGoodsTaoShopsCounts()
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
           /**
            * 套删除
            * */
            taoDel(id) {
                this.$confirm('是否删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    delGoodsTaoShopsCount(getToken('token'),{ids:id}).then(res=>{
                        if(res.code=='OK'){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.tableData1.map((item,index)=>{
                                if(item.cartId==id){
                                    this.tableData1.splice(index,1)
                                }
                            })
                            this.getGoodsShopsCounts()
                            this.getGoodsTaoShopsCounts()
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            /**
             * 单全删
             * */
            dels(id) {
                this.$confirm('是否删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.multipleSelection.map((item)=>{
                        delGoodsShopsCount(getToken('token'),{id:item.id},item.id).then(res=>{
                            if(res.code=='OK'){
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                })
                                this.tableData.map((items,index)=>{
                                    if(items.id==item.id){
                                        this.tableData.splice(index,1)
                                    }
                                })
                                this.getGoodsShopsCounts()
                                this.getGoodsTaoShopsCounts()
                            }
                        })
                    })


                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            /**
             * 套全删
             * */
            dek() {
                this.$confirm('是否删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.multipleSelection.map((item)=>{
                        delGoodsTaoShopsCount(getToken('token'),{ids:item.cartId}).then(res=>{
                            if(res.code=='OK'){
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                })
                                this.tableData1.map((items,index)=>{
                                    console.log(items.cartId)
                                    if(items.cartId==item.cartId){
                                        this.tableData1.splice(index,1)
                                    }
                                })
                                this.getGoodsShopsCounts()
                                this.getGoodsTaoShopsCounts()
                            }
                        })
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
            toSubmits(){
                this.data=[]
                this.multipleSelection.map(item=>{
                    this.data.push(item.cartId)

                })
                if(this.data.length<=0){
                    this.$message({
                        type: 'error',
                        message: '请选择商品'
                    });
                    return false
                }
                this.setSubTaoGoodsShopsList({cartIds:this.data.join(',')}).then(res=>{
                    this.$router.push({
                        name: 'orderSubmits',
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
.parent{
    position: relative;
    .child{
        position: absolute;
        right: 0;
        top: 3px;
        padding: 0 10px;
        i{
            font-size: 24px;
            color: #ccc;
        }
    }
}
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
