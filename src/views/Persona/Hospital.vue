<template>
    <div class="main">
        <div class="orderM">
            <div class="title">医院管理</div>
        </div>
        <div class="connter">
            <div id="tabl">
            <span :class="act=='1'?'active':''" @click="tabl(1)">待审核</span>
            <span  :class="act=='2'?'active':''" @click="tabl(2)">已审核</span>
            <span  :class="act=='3'?'active':''" @click="tabl(3)">审核失败</span>
            <el-button style="background: #26B7BC;color: #fff;float: right" @click="add"> 新增</el-button>
            </div>
            <p style="margin: 20px 0"></p>
            <template>
                <el-table
                        :data="list"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="name"
                            label="医院名称"
                          >
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="医院级别"
                         >
                    </el-table-column>
                    <el-table-column
                            prop="province"
                            label="地区"
                            >
                    </el-table-column>
                    <el-table-column
                            label="状态"
                          >
                        <template  slot-scope="scope">
                            {{scope.row.status=='1'?'待审核':scope.row.status=='2'?'已审核':scope.row.status=='3'?'审核失败':''}}</template>
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template  slot-scope="scope">
                            <template v-if="scope.row.status=='1'">

                                <el-button @click="Revoke(scope.row.id)">撤销</el-button>
                            </template>
                            <template v-if="scope.row.status=='2'">

                                <el-button @click="del(scope.row.id)">删除</el-button>
                            </template>
                            <template v-if="scope.row.status=='3'">
                                <el-button>再次提交</el-button>
                            </template>
                         </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    import {getHospitalList,delHospitalList,RevokeHospitalList} from '@/api/user'
    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        data(){
            return{
                list:[],
                act:1,
                dialogFormVisible: false,
            }
        },
        created(){

            getHospitalList(getToken('token'),1).then(res=>{
                if(res.code=='OK'){
                    this.list = res.data.list
                    console.log(this.list)
                }
            })
        },
        methods:{
            tabl(n){
                this.act=n
                getHospitalList(getToken('token'),n).then(res=>{
                    if(res.code=='OK'){
                        this.list = res.data.list
                        console.log(this.list)
                    }
                })
            },

            add(){
                this.$router.push({
                    name:'add_Hospital'
                })
            },
            del(n){
                this.$confirm('是否删除该医院?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    delHospitalList(getToken('token'),n).then(res=>{
                        if(res.code=='ServiceError') {
                            this.$message({
                                type: 'success',
                                message:res.message
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
            Revoke(n){
                this.$confirm('是否删撤销?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    RevokeHospitalList(getToken('token'),n).then(res=>{
                        console.log(res)
                        if(res.code=='ServiceError') {
                            this.$message({
                                type: 'success',
                                message:res.message
                            })
                        }else if(res.code =='OK'){
                            this.$message({
                                type: 'success',
                                message:'撤销成功'
                            })
                            window.location.reload()
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped lang="less">
    #tabl{
        span{
            margin: 5px 20px;
            height: 40px;
            display: inline-block;
            line-height: 40px;
            cursor: pointer;
        }
        span.active{
            color: #26B7BC;
            border-bottom: 2px solid #26B7BC;
        }
    }
.main{
    background: #fff;margin-top: 20px;
    .orderM{
        padding: 15px;
        border-bottom: 1px solid #f9f9f9;
        .title{
            font-size: 18px;
            color: #333;
            border-left: 3px solid #3198CD;
            padding-left: 10px;
        }
    }
    .connter{
        padding: 15px;
        .addrs-connner{
            padding: 20px;
            margin: 10px 0;

            .title{
                font-size: 18px;
                color: #333;
            }
            div{
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #333;
                p{
                    float: right;
                }
                span{
                    color: #999;
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
