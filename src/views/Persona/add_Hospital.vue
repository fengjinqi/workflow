<template>
    <div class="main">
        <div class="orderM">
            <div class="title">新增医院</div>
        </div>
        <div class="connter">
            <!--<div class="flex-j">
                <div>
                    <span class="demonstration">选择</span>
                    <el-cascader
                            ref="cascaderAddr"
                            :options="data"
                            v-model="form.selectedOptions"
                            @change="handleChange">
                    </el-cascader>
                    <el-button type="info" style="margin-left: 10px;">重置</el-button>
                    <el-button type="primary">确认</el-button>
                </div>
                <div class="flex">
                    <el-input
                            placeholder="请输入医院名"
                            prefix-icon="el-icon-search"
                            v-model="value">
                    </el-input>
                    <el-button type="primary" style="margin-left: 10px;">搜索</el-button>
                </div>
            </div>
          -->
            <div>
                <el-button type="primary" style="margin: 20px 0;" @click="dialogFormVisible = true">申请医院</el-button>
                <el-dialog title="申请医院" :visible.sync="dialogFormVisible" center>
                    <el-form :model="form" style="width: 400px;margin:0 auto" :rules="rules" ref="ruleForm">
                        <el-form-item label="医院名称" :label-width="formLabelWidth" prop="name">
                            <el-input v-model="form.name" auto-complete="off" placeholder="请选择医院名称"></el-input>
                        </el-form-item>
                        <el-form-item label="医院级别" :label-width="formLabelWidth" prop="level">
                            <el-select v-model="form.level" placeholder="请选择" style="width: 100%;">
                                <el-option :label="item.name" :value="item.id" v-for="item in type"></el-option>

                            </el-select>
                        </el-form-item>
                        <el-form-item label="所在地区" :label-width="formLabelWidth" prop="selectedOptions">
                            <el-cascader
                                    ref="cascaderAddr"
                                    :options="data"
                                    v-model="form.selectedOptions"
                                    @change="handleChange">
                            </el-cascader>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="resetForm('ruleForm')">取 消</el-button>
                        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                    </div>
                </el-dialog>
            </div>

            <div>
                <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        style="width: 100%"
                       >
                    <el-table-column
                            width="100">
                        <template scope="scope">
                            <el-radio :label="scope.row.id" v-model="redis" @change.native="getTemplateRow(scope.row)">&nbsp</el-radio>
                        </template>

                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="医院名称"
                            width="330">
                        <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
                    </el-table-column>
                    <el-table-column
                            label="医院级别"
                            width="330">
                        <template  slot-scope="scope">
                            {{scope.row.type=='1'?'一级甲等':scope.row.type=='2'?'一级乙等 ':scope.row.type=='3'?'一级丙等':scope.row.type=='4'?'二级甲等 ':scope.row.type=='5'?' 二级乙等 ':scope.row.type=='6'?'二级丙等 ':scope.row.type=='7'?'三级甲等 ':scope.row.type=='8'?'三级乙等 ':scope.row.type=='9'?'三级丙等 ':''}}</template>
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="地区"
                            show-overflow-tooltip>

                    </el-table-column>
                </el-table>
            </div>
            <div style="text-align: right">
                <el-button type="primary" style="margin-top: 20px;"@click="add">确定新增</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {getHospitalLists,getaddrs,getHospitalType,addHospitalList} from '@/api/user'

    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        data() {
            return {
                value:"",
                data:[],
                redis:'',
                type:null,
                //表单
                dialogFormVisible: false,
                form: {
                    name: '',
                    level: '',
                    selectedOptions: [],
                },
                rules: {
                    name: [
                        { required: true, message: '请输入收货人姓名', trigger: 'blur' },
                    ],
                    level: [
                        { required: true, message: '请选择邓肯', trigger: 'change' }
                    ],
                    selectedOptions: [
                        { required: true, message: '请输入地址', trigger: 'change' }
                    ],
                },
                formLabelWidth: '120px',
                selectedOptions: [],
                selectedOptions2: [],

                //表格
                tableData3: [

                ],
                multipleSelection:'',
                province:'',
                city:'',
                district:''

            };
        },
        created(){
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
            getHospitalLists(getToken('token')).then(res=>{
                console.log(res)
                if(res.code=='OK'){
                    this.tableData3=res.data
                }
            })
            getHospitalType(getToken('token')).then(res=>{
                console.log(res)
                this.type=res.data
            })
        },
        methods: {
            handleChange(value) {
                console.log(value);
                this.province=this.$refs['cascaderAddr'].currentLabels[0]
                this.city=this.$refs['cascaderAddr'].currentLabels[1]
                this.district=this.$refs['cascaderAddr'].currentLabels[2]
                console.log(value, this.$refs['cascaderAddr'])
            },
            getTemplateRow(val) {
                console.log(val)
                this.multipleSelection = val;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data={
                            name:this.form.name,
                            provinceCode:this.form.selectedOptions[0],
                            cityCode:this.form.selectedOptions[1],
                            districtCode:this.form.selectedOptions[2],
                            province:this.province,
                            city:this.city,
                            district:this.district,
                            type:this.form.level,
                            //id:this.id
                        }
                        addHospitalList(getToken('token'),data).then(res=>{
                            if(res.code=='OK'){
                                this.$message({
                                    type: 'success',
                                    message: '添加成功!'
                                });
                                this.$router.push({
                                    name:'Persona_Hospital'
                                })
                            }
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
            add(){
                if(!this.multipleSelection){
                    this.$message({
                        type: 'error',
                        message: '请选择医院!'
                    });
                }else{
                    console.log(this.multipleSelection)
                    addHospitalList(getToken('token'),this.multipleSelection).then(res=>{
                        if(res.code=='OK'){
                            this.$message({
                                type: 'success',
                                message: '添加成功!'
                            });
                            this.$router.push({
                                name:'Persona_Hospital'
                            })
                        }
                    })
                }
            },
            apply(){

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
        padding:20px;
        .demonstration{
            margin-right: 20px;
        }
    }

}
</style>
