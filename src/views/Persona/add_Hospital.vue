<template>
    <div class="main">
        <div class="orderM">
            <div class="title">新增医院</div>
        </div>
        <div class="connter">
            <div class="flex-j">
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
            <div>
                <el-button type="primary" style="margin: 20px 0;" @click="dialogFormVisible = true">申请医院</el-button>
                <el-dialog title="申请医院" :visible.sync="dialogFormVisible" center>
                    <el-form :model="form" style="width: 400px;margin:0 auto">
                        <el-form-item label="医院名称" :label-width="formLabelWidth">
                            <el-input v-model="form.name" auto-complete="off" placeholder="请选择医院名称"></el-input>
                        </el-form-item>
                        <el-form-item label="医院级别" :label-width="formLabelWidth">
                            <el-select v-model="form.level" placeholder="请选择" style="width: 100%;">
                                <el-option label="二甲" value="二甲"></el-option>
                                <el-option label="三甲" value="三甲"></el-option>
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
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
            <div>
                <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="医院名称"
                            width="330">
                        <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
                    </el-table-column>
                    <el-table-column
                            prop="level"
                            label="医院级别"
                            width="330">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地区"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
            </div>
            <div style="text-align: right">
                <el-button type="primary" style="margin-top: 20px;">确定新增</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {getHospitalList,getaddrs} from '@/api/user'

    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        data() {
            return {
                value:"",
                data:[],
                //表单
                dialogFormVisible: false,
                form: {
                    name: '',
                    level: '',
                    address: '',
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
                formLabelWidth: '120px',
                selectedOptions: [],
                selectedOptions2: [],

                //表格
                tableData3: [
                    {
                        name: '上海第一人民医院',
                        level: '三甲',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        name: '上海第一人民医院',
                        level: '三甲',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        name: '上海第一人民医院',
                        level: '三甲',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        name: '上海第一人民医院',
                        level: '三甲',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        name: '上海第一人民医院',
                        level: '三甲',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        name: '上海第一人民医院',
                        level: '三甲',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                ],
                multipleSelection: [],
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
        },
        methods: {
            handleChange(value) {
                console.log(value);
                this.province=this.$refs['cascaderAddr'].currentLabels[0]
                this.city=this.$refs['cascaderAddr'].currentLabels[1]
                this.district=this.$refs['cascaderAddr'].currentLabels[2]
                console.log(value, this.$refs['cascaderAddr'])
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
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
