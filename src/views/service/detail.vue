<template>
    <div class="main">
        <template v-if="main==true">
            <div class="nav"><img :src="dao" alt="">订单医疗信息</div>
            <div class="nav-main">
                <ul>
                    <li><p>手术单号: <span>{{info.operationSn}}</span></p><p>患者姓名: <span>{{info.sickPersonName}}</span></p></li>
                    <li><p>订单编号: <span>{{info.tradeSn}}</span></p><p>患者年龄: <span>{{info.sickPersonAge}}</span></p></li>
                    <li><p>医院名称: <span>{{info.hospitalName}}</span></p><p>联系电话: <span>{{info.sickPersonPhone}}</span></p></li>
                    <li><p>科室名称: <span>{{info.treatmentRoomName}}</span></p><p>跟台人员: <span>{{info.userName}}</span></p></li>
                    <li><p>医师姓名: <span>{{info.physicianName}}</span></p><p>跟台人电话: <span>{{info.userPhone}}</span></p></li>
                </ul>

            </div>
            <div class="orderType">
                <template>
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="id"
                                label="序号"
                        >

                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="报告标题"
                        >
                        </el-table-column>

                        <el-table-column

                                label="状态"
                        >
                            <template slot-scope="scope">
                                {{scope.row.data?'已完成':'未完成'}}

                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="data.updateTime"
                                label="最近更新时间">
                        </el-table-column>
                        <el-table-column

                                label="操作"
                        >
                            <template slot-scope="scope">

                                <span class="ac" v-if="scope.row.id==1" @click="show(1,scope.row.data?scope.row.data.category:'',scope.row.data?scope.row.data.describe:'')">选择</span>
                                <span class="ac" v-else-if="scope.row.id==2"  @click="show(2,scope.row.data?scope.row.data.brandList[0]:'',scope.row.data?scope.row.data.classification:'')">选择</span>
                                <span class="ac" v-else-if="scope.row.id==3" @click="Adest(1)">填写</span>
                                <span class="ac" v-else-if="scope.row.id==4" @click="Adest(2)">填写</span>
                                <span class="ac" v-else-if="scope.row.id==5" @click="Adest(3)">填写</span>
                                <span class="ac" v-else-if="scope.row.id==6" @click="Adest(4)">填写</span>
                                <span class="ac" v-else-if="scope.row.id==7" @click="Adest(5)">填写</span>

                            </template>
                        </el-table-column>
                    </el-table>

                </template>

                <el-dialog :title="title" :visible.sync="dialogTableVisible">
                    <div class="mains">
                        <div style="margin-bottom: 20px;"><strong>当前已选:</strong><span style="color: #26B7BC">{{html}}</span></div>
                        <div>
                            <strong>请选择:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                            <el-cascader
                                    ref="list"
                                    v-model="value"
                                    :options="options"
                                    @change="handleChange"></el-cascader>
                            <div style="margin-top: 20px;margin-left: 125px;">
                                <el-button type="primary" style="background-color: #26B7BC"@click="add"> 保存</el-button>
                            </div>

                        </div>


                    </div>
                </el-dialog>

            </div>
        </template>

        <template v-else-if="care==true">
            <div class="nav"><img :src="dao" alt="">医疗机构信息表</div>
            <div class="orderType">
                <h4>综合信息</h4>
                <ul class='care'>
                    <li><p><span>全称: </span><el-input  placeholder="请输入医院全称"></el-input></p><p><span>简称:</span> <el-input  placeholder="请输入医院简称"></el-input></p></li>
                    <li><p><span>曾用名称: </span><el-input  placeholder="请输入医院曾用名称"></el-input></p><p><span>详细地址:</span> <el-input  placeholder="请输入详细地址"></el-input></p></li>
                    <li><p><span>等级: </span><el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p><p><span>总床位数:</span> <el-input  placeholder="请输入床位数"></el-input></p></li>


                </ul>
                <h4>市场信息</h4>
                <ul class='care'>
                    <li><p><span>所用产品科室：</span> <el-input  placeholder="请输入所用产品科室"></el-input></p><p><span>病区数量：</span> <el-input  placeholder="请输入病区数量"></el-input></p></li>
                    <li><p><span>可用产品总床位数：</span><el-input  placeholder="请输入可用产品总床位数"></el-input></p>
                        <p><span>是否有托管意向：</span><el-select  placeholder="请选择">
                            <el-option

                                    label="1"
                                    value="1">
                            </el-option>
                        </el-select></p>
                    </li>
                    <li><p><span>是否托管：</span> <el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p><p> <span>托管公司名称: </span> <el-input  placeholder="请输入托管公司名称"></el-input></p></li>
                    <li><p><span>是否有扩建计划： </span><el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">care
                        </el-option>
                    </el-select></p><p></p></li>

                </ul>
                <h4>其他信息</h4>
                <ul class='care'>
                    <li><p class="upinpt"><span>附件</span>
                        <el-upload class="upload-demo">
                            <el-button size="small">+ 添加</el-button>
                        </el-upload>
                        <el-button type="text" style="color:#26B7BC; position: relative;top: -5px;">下载附件模版</el-button>
                    </p></li>
                </ul>
                <div class="buttondiv">
                    <el-button type="primary" plain>取消</el-button>
                    <el-button type="primary">确认提交</el-button>
                </div>
            </div>
        </template>
        <template v-else-if="A==true">
            <div class="nav"><img :src="dao" alt="">手术病例随访表(A) -手术情况</div>
            <div class="orderType">
                <h4>基本情况</h4>
                <ul class='care'>
                    <li><p><span>病人姓名：</span><el-input  placeholder="请输入病人姓名"></el-input></p><p><span>性别：</span> <el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p></li>
                    <li><p><span>年龄： </span><el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p><p><span>病案号：</span> <el-input  placeholder="请输入病案号"></el-input></p></li>
                    <li><p><span>诊断：</span> <el-input  placeholder="请输入医生诊断内容"></el-input></p></li>
                    <li>
                        <p><span>进行手术名称：</span> <el-input  placeholder="请输入手术名称"></el-input></p>
                        <p><span>进行手术时间：</span> <el-date-picker
                                v-model="value"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker></p>
                    </li>
                    <li><p><span>使用产品：</span> <el-input  placeholder="请输入使用产品名称"></el-input></p></li>
                </ul>
                <h4>以下是需要了解的问题:</h4>
                <ul class='care'>
                    <li>
                        <p>
                            <span>麻醉方式：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>出血量：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>复位情况：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>创伤对位：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>对线：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>脊柱对位：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>曲度：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>关节安装角度：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>关节间松紧度：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>有无骨质疏松：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>有无骨缺损：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>产品固定是否牢固：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>术中是否反复安装：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>有无重要结构损伤：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>术中血压是否稳定：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>切口皮肤是否缝合良好：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>器械使用是否顺利：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>术后有无附加外固定：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                </ul>
                <h4>其他信息</h4>
                <ul class='care'>
                    <li><p class="upinpt"><span>附件</span>
                        <el-upload class="upload-demo">
                            <el-button size="small">+ 添加</el-button>
                        </el-upload>
                        <el-button type="text" style="color:#26B7BC; position: relative;top: -5px;">下载附件模版</el-button>
                    </p></li>
                </ul>
                <div class="buttondiv">
                    <el-button type="primary" plain>取消</el-button>
                    <el-button type="primary">确认提交</el-button>
                </div>
            </div>
        </template>
        <template v-else-if="B==true">
            <div class="nav"><img :src="dao" alt="">手术病例随访表(B) -出院情况</div>
            <div class="orderType">
                <h4>基本情况</h4>
                <ul class='care'>
                    <li><p><span>病人姓名：</span><el-input  placeholder="请输入病人姓名"></el-input></p><p><span>性别：</span> <el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p></li>
                    <li><p><span>年龄： </span><el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p><p><span>病案号：</span> <el-input  placeholder="请输入病案号"></el-input></p></li>
                    <li><p><span>诊断：</span> <el-input  placeholder="请输入医生诊断内容"></el-input></p></li>
                    <li>
                        <p><span>进行手术名称：</span> <el-input  placeholder="请输入手术名称"></el-input></p>
                        <p><span>进行手术时间：</span> <el-date-picker
                                v-model="value"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker></p>
                    </li>
                </ul>
                <h4>以下是需要了解的问题:</h4>
                <ul class='care'>
                    <li>
                        <p>
                            <span>局部是否有肿胀：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>切口愈合是否正常：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>X线表现有无变化：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>住院期是否有发热：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>有无并发症：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>有无感觉障碍：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>有无运动障碍：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>住院期间有无主动功能锻炼：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>有无再次移位或脱位：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>有无增加其它治疗手段：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                </ul>
                <h4>其他信息</h4>
                <ul class='care'>
                    <li><p class="upinpt"><span>附件</span>
                        <el-upload class="upload-demo">
                            <el-button size="small">+ 添加</el-button>
                        </el-upload>
                        <el-button type="text" style="color:#26B7BC; position: relative;top: -5px;">下载附件模版</el-button>
                    </p></li>
                </ul>
                <div class="buttondiv">
                    <el-button type="primary" plain>取消</el-button>
                    <el-button type="primary">确认提交</el-button>
                </div>
            </div>
        </template>
        <template v-else-if="C==true">
            <div class="nav"><img :src="dao" alt="">手术病例随访表(C) -一年后情况</div>
            <div class="orderType">
                <h4>基本情况</h4>
                <ul class='care'>
                    <li><p><span>病人姓名：</span><el-input  placeholder="请输入病人姓名"></el-input></p><p><span>性别：</span> <el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p></li>
                    <li><p><span>年龄： </span><el-select  placeholder="请选择">
                        <el-option

                                label="1"
                                value="1">
                        </el-option>
                    </el-select></p><p><span>病案号：</span> <el-input  placeholder="请输入病案号"></el-input></p></li>
                    <li><p><span>诊断：</span> <el-input  placeholder="请输入医生诊断内容"></el-input></p></li>
                    <li>
                        <p><span>进行手术名称：</span> <el-input  placeholder="请输入手术名称"></el-input></p>
                        <p><span>进行手术时间：</span> <el-date-picker
                                v-model="value"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker></p>
                    </li>
                </ul>
                <h4>以下是需要了解的问题:</h4>
                <ul class='care'>
                    <li>
                        <p>
                            <span>局部是否仍有疼痛：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>是否有肿胀：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>是否有畸形：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>有无功能锻炼：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>何时负重行走：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>行走情况：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>关节活动度减小：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>切口情况：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>感觉情况：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>肌力减退：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>术后有无定期复诊：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                        <p>
                            <span>有无严重并发症：</span>
                            <el-select  placeholder="请选择">
                                <el-option

                                        label="1"
                                        value="1">
                                </el-option>
                            </el-select>
                        </p>
                    </li>
                </ul>
                <h4>其他信息</h4>
                <ul class='care'>
                    <li><p class="upinpt"><span>附件</span>
                        <el-upload class="upload-demo">
                            <el-button size="small">+ 添加</el-button>
                        </el-upload>
                        <el-button type="text" style="color:#26B7BC; position: relative;top: -5px;">下载附件模版</el-button>
                    </p></li>
                </ul>
                <div class="buttondiv">
                    <el-button type="primary" plain>取消</el-button>
                    <el-button type="primary">确认提交</el-button>
                </div>
            </div>
        </template>
        <template v-else-if="D==true">
            <div class="nav"><img :src="dao" alt="">产品质量反馈</div>
            <div class="orderType">
                <ul class='care'>
                    <li><p class="textareap"><span>质量反馈：</span><el-input  placeholder="请输入产品质量反馈" type="textarea"></el-input></p></li>

                </ul>
            </div>
        </template>
    </div>
</template>

<script>
    import {report,medicalInfo,serveAdd,brandAdd} from '@/api/exit'
    import {getToken} from '@/libs/util'
    export default {
        data(){
            return{
                //value:"",
                dao:require('../../assets/6970B5CB-5342-43CE-859A-AA107BD0F96B@1x.png'),
                info:{},
                list:[],
                value:[],
                main:true,
                care:false,
                A:false,
                B:false,
                C:false,
                D:false,
                care_medicalInstitutionsResponse:null,
                html:'',
                tableData:[
                    {id:1,name:'服务类型'},
                    {id:2,name:'产品分类'},
                    {id:3,name:'医疗机构信息表'},
                    {id:4,name:'手术病例随访表(A)-手术情况'},
                    {id:5,name:'手术病例随访表(B)-出院情况'},
                    {id:6,name:'手术病例随访表(C)-一年后情况'},
                    {id:7,name:'产品质量反馈表'},
                ],
                title:'',
                type:null,
                describe:'',
                dialogTableVisible:false,
                options: null,
                classification:null,
                options1: [
                    {
                        value: '施乐辉',
                        label: '施乐辉',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    },
                    {
                        value: 'PLUS',
                        label: 'PLUS',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,
                    {
                        value: '捷迈',
                        label: '捷迈',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    },
                    {
                        value: '邦美',
                        label: '邦美',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,
                    {
                        value: '蒙泰因',
                        label: '蒙泰因',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,
                    {
                        value: '康辉',
                        label: '康辉',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,
                    {
                        value: '理贝尔',
                        label: '理贝尔',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,
                    {
                        value: '创生',
                        label: '创生',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,
                    {
                        value: '奥斯迈',
                        label: '奥斯迈',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,
                    {
                        value: '公平',
                        label: '公平',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    , {
                        value: '微创',
                        label: '微创',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    , {
                        value: '威高亚华',
                        label: '威高亚华',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    , {
                        value: '美精技',
                        label: '美精技',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    , {
                        value: '康力',
                        label: '康力',
                        children: [
                            {
                                value: '关节',
                                label: '关节',
                            },
                            {
                                value:'创伤',
                                label:'创伤'
                            },
                            {
                                value:'脊柱',
                                label:'脊柱'
                            },
                            {
                                value:'运医',
                                label:'运医'
                            },
                            {
                                value:'其他',
                                label:'其他'
                            },

                        ]
                    }
                    ,



                ],
                options2: [
                    {
                        value: '产品服务类',
                        label: '产品服务类',
                        children: [
                            {
                                value: 'A',
                                label: '骨科相关内植物类',
                            },
                            {
                                value:'B',
                                label:'心内科相关内植物类'
                            },
                            {
                                value:'C',
                                label:'其他内植物类'
                            },
                            {
                                value:'D',
                                label:'设备类'
                            },
                            {
                                value:'E',
                                label:'低值耗材类'
                            },
                            {
                                value:'F',
                                label:'试剂类'
                            }
                        ]
                    },
                    {
                        value: '市场推广类',
                        label: '市场推广类',
                        children: [
                            {
                                value: 'G',
                                label: '科内产品推广',
                            },  {
                                value: 'H',
                                label: '第三方会议产品推广',
                            },
                        ]
                    }
                    ,
                    {
                        value: '调研类',
                        label: '调研类',
                        children: [{
                            value: 'J',
                            label: '院内数据收集',
                        }]
                    }
                ],

            }
        },
        created(){
           this.id = this.$route.params.id
          this.getList()

        },
        methods:{
            getList(){
                report(getToken('token'),this.id).then(res=>{
                    if(res.code=='OK'){
                        this.tableData[0]['data'] = res.data.reportTypeResponse
                        this.tableData[1]['data'] = res.data.productClassificationResponse
                        this.tableData[2]['data'] = res.data.medicalInstitutionsResponse
                        this.tableData[3]['data'] = res.data.surgicalCasesAResponse
                        this.tableData[4]['data'] = res.data.surgicalCasesBResponse
                        this.tableData[5]['data'] = res.data.surgicalCasesCResponse
                        this.tableData[6]['data'] = res.data.surgeryBasicDataResponse
                        this.care_medicalInstitutionsResponse = res.data.medicalInstitutionsResponse
                        console.log(this.care_medicalInstitutionsResponse)
                    }
                })
                medicalInfo(getToken('token'),this.id).then(res=>{
                    console.log(res)
                    if(res.code=='OK'){
                        this.info = res.data
                    }
                })
            },
            show(id,category,childer){
                if(id == 1){
                    this.type=1
                    this.options = this.options2
                    this.title = '请选择服务类型'
                    this.html = category+"-"+childer
                    this.dialogTableVisible = true
                }else if(id == 2){
                    this.type=2
                    this.options = this.options1
                    this.title = '请选择产品分类'
                    this.html = category+"-"+childer
                    this.dialogTableVisible = true
                    this.classification = childer
                }

            },
            handleChange(value) {
                let strs = this.$refs.list.currentLabels.join(',')
                this.html = strs.replace(',','-')
                this.describe = this.$refs.list.currentLabels[1]
                //this.value = this.$refs.list.currentLabels
                console.log(this.$refs.list.currentLabels);
                console.log(this.html)
            },
            add(){
                if(this.value.length>0){
                    if(this.type==1){
                        let obj = {
                            tradeSn:this.id,
                            describeType:0,
                            category:this.value[0],
                            code:this.value[1],
                            describe:this.describe

                        }
                        let form = new FormData()
                        form.append('tradeSn',this.id)
                        form.append('describeType',0)
                        form.append('category',this.value[0])
                        form.append('code',this.value[1])
                        form.append('describe',this.describe)

                        serveAdd(getToken('token'),form).then(res=>{
                            console.log(res)
                            if(res.data.code=='OK'){
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                })
                                this.dialogTableVisible = false
                                this.getList()

                            }else{
                                this.$message({
                                    type: 'error',
                                    message: '保存失败'
                                })
                                this.dialogTableVisible = false
                            }
                        }).catch(err=>{
                            this.$message({
                                type: 'error',
                                message: '保存失败'
                            })
                            this.dialogTableVisible = false
                        })
                    }else if(this.type==2){
                        let obj = {
                            tradeSn:this.id,
                            describeType:1,
                            brandList:[this.value[0]],

                            describe:this.value[1]

                        }

                        let form = new FormData()
                        form.append('tradeSn',this.id)
                        form.append('describeType',1)
                        form.append('brandList',[this.value[0]])
                        form.append('classification',this.value[1])
                        brandAdd(getToken('token'),form).then(res=>{
                            console.log(res)
                            if(res.data.code=='OK'){
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                })
                                this.dialogTableVisible = false
                                this.getList()

                            }else{
                                this.$message({
                                    type: 'error',
                                    message: '保存失败'
                                })
                                this.dialogTableVisible = false
                            }
                        }).catch(err=>{
                            this.$message({
                                type: 'error',
                                message: '保存失败'
                            })
                            this.dialogTableVisible = false
                        })
                    }

                }else{
                    this.$message({
                        type: 'error',
                        message: '请选择'
                    })
                }
                console.log(this.value)

            },
            Adest(id){
                if(id==1){
                    this.main=false
                    this.care = true
                    this.A=false
                    this.B=false
                    this.C=false
                    this.D=false
                }else if(id ==2){
                    this.main=false
                    this.care = false
                    this.A=true
                    this.B=false
                    this.C=false
                    this.D=false
                }else if(id ==3){
                    this.main=false
                    this.care = false
                    this.A=false
                    this.B=true
                    this.C=false
                    this.D=false
                }else if(id ==4){
                    this.main=false
                    this.care = false
                    this.A=false
                    this.B=false
                    this.C=true
                    this.D=false
                }else if(id ==5){
                    this.main=false
                    this.care = false
                    this.A=false
                    this.B=false
                    this.C=false
                    this.D=true
                }
            }

        }
    }
</script>
<style>
    .el-dialog__header{text-align: center;}
    .el-cascader__label{
        color: #606266!important;
        padding: 0 25px 0 15px!important;
        font-size: 14px !important;
    }
</style>
<style scoped lang="less">
    strong{
        padding-right: 15px;
        text-align: right;
    }
    .mains{
        width: 500px;
        height: 300px;
        margin: 10px auto;
    }
    .main{
        margin-bottom: 40px;
    }
.nav{
    font-weight: bold;
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-bottom: 1px solid #eee;
    img{
        vertical-align: text-bottom;
        margin-right: 5px;
    }
}
.nav-main{
    background-color: #fff;
    padding: 20px;
    ul{
        li{
            display: flex;
            p{
                width: 50%;
                padding-left: 13%;
                span{
                    margin-left: 20px;
                }
            }
        }
    }
}
.ac{
    color: #26B7BC;
    padding: 2px 8px;
    margin: 9px 15px;
    border-radius: 4px;
    border: 1px solid #26B7BC;
    display: inline-block;
    cursor: pointer;
}
.orderType{
    margin-top: 20px;
    background: #fff;
    padding:1px 20px 20px 20px;
   /* .type{
        !*border-bottom: 1px solid #eee;*!
        div{
            width: 80px;
            text-align: center;
            !*padding-bottom: 20px;*!
            cursor: pointer;
        }
        div.active{
            color: #3198CD;
            border-bottom: 2px solid #3198CD;
        }
    }
    .typeItem{
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #333;
        font-size: 18px;
        cursor: pointer;
    }
    .typeItem.active{
        background-color: rgba(49, 152, 205, 1);
        color: #fff;
    }
    .order-main-th{
        height: 40px;
        line-height: 40px;
        background: #F9F9F9;
        border: 1px solid #EBEEF5;
        .order-main-th-item{
            text-align: center
        }
    }
    .order-main-list-item{
        margin-top: 20px;
        .order-main-list-item-head{
            height: 40px;
            line-height: 40px;
            background: #E4FEFF;
            border: 1px solid #26B7BC;
            div{
                padding:0 20px;
            }
        }
        .order-main-list-item-cont1{
            text-align:center;
            border-right:1px solid #EBEEF5;
            .order-main-list-item-cont-1{
                border-left:1px solid #EBEEF5;
                border-bottom:1px solid #EBEEF5;
                height:100px;
                padding:15px 20px 10px 20px;
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
            .order-main-list-item-cont-2{
                border:none
            }
        }
    }*/
}
h4{
    border-left: 4px solid #26B7BC;
    padding-left: 15px;
    margin-top: 20px;
}
    .care{
        li{
            display: flex;
            margin-top: 20px;
            p{
                width: 50%;
                display: flex;
                /*justify-content: space-between;*/
                span{
                    display: inline-block;
                    width: 32%;
                    text-align: right;
                    margin-right: 20px;
                }
                div{
                    width:50%;
                }
            }
            .upinpt{
                justify-content: left;
                div{
                    width: 80px;
                }
            }
            .textareap{
                width: 85%;
                .el-textarea__inner{
                    height: 200px;
                }
                div{
                    width: 100%;

                }
            }
        }
    }
    .buttondiv{
        text-align: right;
    }
</style>

