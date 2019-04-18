<template>
    <div class="main">
        <div class="orderM">
            <div class="title">地址管理</div>
        </div>
        <div class="connter">
            <el-button style="background: #3198CD;color: #fff" @click="add"> 新增</el-button>
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
                            prop="area"
                            label="地区"
                            >
                    </el-table-column>
                    <el-table-column
                            label="状态"
                          >
                        <template  slot-scope="scope">
                            {{scope.row.status=='1'?'待审核':scope.row.status=='2'?'':scope.row.status=='3'?'审核失败':''}}</template>
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template  slot-scope="scope">
                            <template v-if="scope.row.status=='1'">

                                <el-button>撤销</el-button>
                            </template>
                            <template v-if="scope.row.status=='2'">

                                <el-button>删除</el-button>
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
    import {getHospitalList} from '@/api/user'
    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        data(){
            return{
                list:[],
                dialogFormVisible: false,
            }
        },
        created(){
            getHospitalList(getToken('token')).then(res=>{
                if(res.code=='OK'){
                    this.list = res.data.list
                    console.log(this.list)
                }
            })
        },
        methods:{
            add(){
                this.$router.push({
                    name:'add_Hospital'
                })
            },
        }
    }
</script>

<style scoped lang="less">
.main{
    background: #fff;
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
