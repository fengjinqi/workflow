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
                            :options="options"
                            v-model="selectedOptions"
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
                        <el-form-item label="所在地区" :label-width="formLabelWidth">
                            <el-cascader
                                    :options="options"
                                    v-model="form.address"
                                    style="width: 100%;"
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
    import {getHospitalList} from '@/api/user'
    import {getToken} from '@/libs/util'
    export default {
        name: "index",
        data() {
            return {
                value:"",
                //表单
                dialogFormVisible: false,
                form: {
                    name: '',
                    level: '',
                    address: ''
                },
                formLabelWidth: '120px',
                //联动
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
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


            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
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
