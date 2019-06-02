<template>
    <div class="main">
        <div class="orderM">
            <div class="title">地址管理</div>
        </div>
        <div class="connter">
            <div id="tabl">
                <span  :class="act=='2'?'active':''" @click="tabl(2)">已审核</span>
                <span :class="act=='1'?'active':''" @click="tabl(1)">待审核</span>
                <span  :class="act=='3'?'active':''" @click="tabl(3)">审核失败</span>
            <el-button style="background: #26B7BC;color: #fff;float: right" @click="add"> 新增</el-button>
            </div>
            <div class="addrs-connner" v-for="item in list">
                <div class="title">{{item.name}}<p style="color: rgb(255, 142, 35)">{{item.status=='1'?'待审核':item.status=='2'?'':item.status=='3'?'审核失败':''}}</p></div>
                <div><span>姓名</span>{{item.name}}</div>
                <div><span>所在地区</span>{{item.province}}{{item.city}}{{item.district}}</div>
                <div><span>详细地址</span>{{item.address}}</div>
                <div><span>手机号码</span>{{item.phone}} <p><el-button style="background: #26B7BC;color: #fff" @click="update(item.id)">修改</el-button ><el-button style="background: #FFEDDC;border-color: #FF8819;color: #FF8E23" @click="remove(item.id)">删除</el-button></p></div>

            </div>
        </div>
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label="收货人" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" placeholder="请输入收货人姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="form.phone" placeholder="请输入手机号码或固定电话"></el-input>
                </el-form-item>
                <el-form-item label="详细地址" :label-width="formLabelWidth" prop="selectedOptions">
                    <el-cascader
                            ref="cascaderAddr"
                            :options="data"
                            v-model="form.selectedOptions"
                            @change="handleChange">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="详细地址" :label-width="formLabelWidth" prop="address">
                    <el-input v-model="form.address" placeholder="请输入详细地址"></el-input>
                </el-form-item>
                <el-form-item label="备注信息" :label-width="formLabelWidth" prop="remark">
                    <el-input v-model="form.remark" placeholder="请输入备注信息" type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('ruleForm')">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {getUserAdders} from '@/api/goods'
    import {getaddrs,addaddrs,removeaddrs,updateaddrs} from '@/api/user'
    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        data(){
            return{
                list:[],
                dialogFormVisible: false,
                data:[],
                title:'新增收货地址',
                province:'',
                city:'',
                district:'',
                is_update:false,
                act:2,
                form: {
                    name: '',
                    phone: '',
                    remark:'',
                    address:'',
                    selectedOptions: [],
                },
                rules: {
                    name: [
                        { required: true, message: '请输入收货人姓名', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '请输入电话', trigger: 'blur' }
                    ],
                    remark: [
                        { required: true, message: '请输入备注信息', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' }
                    ],
                    selectedOptions: [
                        { required: true, message: '请输入地址', trigger: 'change' }
                    ],
                },
                formLabelWidth: '120px'
            }
        },
        created(){
            getUserAdders(getToken('token'),2).then(res=>{

                if(res.code=='OK'){
                    this.list = res.data
                }
            })
            getaddrs(getToken('token')).then(res=>{
                if(res.code=='OK'){
                    this.data = res.data.area
                    this.data = res.data.area.map((item)=>{
                        let currentItem = {
                            label: item.provinceName,
                            value: item.provinceCode,
                            children: []
                        }
                        currentItem.children =item.cityList.map((its)=>{
                            let childer={
                                value:its.cityCode,
                                label:its.cityName,
                                //children: []
                            }
                            its.districtList.length==0?'':childer['children']=[]
                            its.districtList.length==0?'':childer['children']=
                            childer.children=its.districtList.map((res,i)=>{
                                    return{
                                        value:res.districtCode,
                                        label:res.districtName
                                    }
                            })
                            return childer;
                        })
                        return currentItem;
                    })
                }
            })
        },
        methods:{
            tabl(n){
                this.act=n
                getUserAdders(getToken('token'),n).then(res=>{

                    if(res.code=='OK'){
                        this.list = res.data
                    }
                })
            },
            add(){
                this.title='新增收货地址'
                this.dialogFormVisible = true
                this.is_update=false
            },
            handleChange(value) {
                console.log(value);
                this.province=this.$refs['cascaderAddr'].currentLabels[0]
                this.city=this.$refs['cascaderAddr'].currentLabels[1]
                this.district=this.$refs['cascaderAddr'].currentLabels[2]
                console.log(value, this.$refs['cascaderAddr'])
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
                            province:this.province,
                            city:this.city,
                            district:this.district,
                            id:this.id
                        }
                        if(this.is_update==true){
                            updateaddrs(getToken('token'),data).then(res=>{
                                this.dialogFormVisible = false
                                if(res.code=='OK'){
                                    this.$message({
                                        type: 'success',
                                        message: '修改成功!'
                                    });
                                    window.location.reload()
                                }
                            })
                        }else{


                        addaddrs(getToken('token'),data).then(res=>{
                            this.dialogFormVisible = false
                            if(res.code=='OK'){
                                this.$message({
                                    type: 'success',
                                    message: '添加成功!'
                                });
                                window.location.reload()
                            }
                        })
                        }

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
                this.is_update=true
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
            border: 1px solid #eee;
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
