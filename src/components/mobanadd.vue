<template>
    <div class="main">
        <div class="nav">商品导入</div>
        <template>
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
                                <!--<div class="type">单品</div>-->
                                <!--<div style="color:#999">{{ name.row.categoryName}}</div>-->
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="goodsSn"
                            label="商品编码">
                    </el-table-column>
                    <el-table-column

                            label="单价">
                        <template slot-scope="name">
                            <div >￥{{name.row.price}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column

                            label="数量">
                        <template slot-scope="name">
                            <div >X{{name.row.salesNumber}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column

                            label="小计">
                        <template slot-scope="name">
                            <div >￥{{name.row.subtotal}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="订单操作">
                        <template slot-scope="name">
                            <div  @click="del(name.row)" style="color: #FF8819">删除</div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="cart-bo">
                <div class="cart-bo-main flex-j">
                    <div class="flex ri">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAllChange">全选</el-checkbox>
                        <div @click="dels">删除</div>
                    </div>
                    <div class="flex le">
                        <div>已选 <span style="color:#26B7BC">{{num}}</span> 件商品 </div>
                        <div> <el-button type="primary" @click="toSubmit">导入</el-button></div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {getImportCartData,deleteImportCommodity,importCommodityFotCart} from '@/api/exit'

    import {getToken} from '@/libs/util'
    export default {
        data(){
            return{
                tableData:[],
                multipleSelection: [],
                num:0,
                price:0,
                isIndeterminate: false,
                checked: false,
                checkAll:false,
                data:[]

            }
        },
        created(){
            getImportCartData(getToken('token')).then(res=>{

                if(res.code=='OK'){
                    this.tableData = res.data
                    console.log(this.tableData )
                }

            })
        },
        methods:{
            handleCheckAllChange() {
                this.$refs.multipleTable.toggleAllSelection()
                this.isIndeterminate = false
            },
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

            /**
             * 单全删
             * */
            dels() {
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
                this.$confirm('是否删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(this.multipleSelection.id)
                    let obj=[]
                    this.multipleSelection.map(item=>{
                        obj.push(item)
                    })
                    deleteImportCommodity(getToken('token'),{importGoodsResponses:JSON.stringify(obj)}).then(res=>{
                        if(res.code=='OK'){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.tableData=[]

                        }else{
                            this.$message({
                                type: 'error',
                                message: '删除失败'
                            })
                        }
                    }).catch(err=>{
                        this.$message({
                            type: 'error',
                            message: '删除失败'
                        })
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            del(id) {

                this.$confirm('是否删除该商品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                   /* console.log(this.multipleSelection.id)
                    let obj=[]
                    this.multipleSelection.map(item=>{
                        obj.push(item.id)
                    })*/
                    deleteImportCommodity(getToken('token'),{importGoodsResponses:JSON.stringify(id)}).then(res=>{
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

                        }else{
                            this.$message({
                                type: 'error',
                                message: '删除失败'
                            });
                        }
                    }).catch(err=>{
                        this.$message({
                            type: 'error',
                            message: '删除失败'
                        })
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
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
                let obj=[]
                this.multipleSelection.map(item=>{
                    obj.push(item)
                })
                importCommodityFotCart({importGoodsResponses:JSON.stringify(obj)}).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.$router.push({
                            name: 'cart',

                        })
                    }else{
                        this.$message({
                            type: 'error',
                            message: '导入失败'
                        });
                    }

                }).catch(err=>{
                    this.$message({
                        type: 'error',
                        message: '删除失败'
                    })
                })
            },
        }
    }
</script>
<style>
    .el-upload-list.el-upload-list--picture-card{
        display: none;
    }
    .el-checkbox__label{
        display: inline-block !important;
    }
</style>
<style scoped lang="less">

.main{
    background-color: #fff;
    padding:0 20px;
    overflow: hidden;
    margin-top: 20px;
    .nav{
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin: 20px 0;
        border-left: 4px solid #26B7BC;
        padding-left: 20px;

    }

}
.cart-bo{
    width: 100%;
    height: 60px;
    line-height: 60px;

    .cart-bo-main{
        padding:0 14px;
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
</style>
