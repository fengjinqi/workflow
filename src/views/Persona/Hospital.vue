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
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址">
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
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
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
                this.title='新增收货地址'
                this.dialogFormVisible = true
            },
            handleChange(value) {
                console.log(value);
                console.log(this.selectedOptions);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data={
                            name:this.form.name,
                            phone:this.form.phone,
                            provinceCode:this.form.selectedOptions[0],
                            cityCode:this.form.selectedOptions[1],
                            districtCode:this.form.selectedOptions[2],
                            address:this.form.address,
                            remark:this.form.remark,
                            id:this.id
                        }
                        addaddrs(getToken('token'),data).then(res=>{
                            //this.dialogFormVisible = false
                            console.log(res)
                        })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.dialogFormVisible = false
                this.$refs[formName].resetFields();
            },
            remove(id) {
                this.$confirm('是否删除地址?', '删除地址', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    removeaddrs(getToken('token'),{addressId:id},id).then(res=>{
                        if(res.code=='OK'){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            window.location.reload()
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            update(id){
                this.title='修改收货地址'
                this.id=id
                this.dialogFormVisible = true
            }
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
