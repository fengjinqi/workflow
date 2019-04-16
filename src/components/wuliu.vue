<template>
    <div class="detail-item">
        <div class="flex erbox">
            <div class="erleft">
                <div class="title">物流轨迹</div>
                <div class="map"></div>
            </div>
            <div class="erright">
                <div class="title">商品内容</div>
                <div class="flex">
                    <div class="tab">
                        <div class="active">包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                    </div>
                    <div class="tabcont">
                        <el-table
                                :data="tableData"
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wuliu",
        data(){
            return{
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
        props:{

        },
    }
</script>

<style scoped lang="less">
    .detail-item{
        /*padding: 20px;*/
        background: #fff;
        margin-top: 20px;
        .title{
            font-size: 18px;
            font-weight: bold;
            padding:20px 20px 0 20px
        }
        .erleft{
            width: 280px;
            height: 100%;
            border-right: 1px solid #eee;
            .map{
                margin-top: 20px;
                width: 100%;
                height: 360px;
                background: #eee;
            }
        }
        .erright{
            width: 920px;
            .tabcont{
                margin-top: 20px;
                width: 785px;
            }
            .tab{
                margin-top: 20px;
                div{
                    height: 58px;
                    line-height: 58px;
                    border-top: 1px solid #eee;
                    border-right: 1px solid #eee;
                    width:130px;
                    text-align: center;
                    font-size: 14px;
                    color: #333;
                    border-left: 4px solid transparent;
                }
                div.active{
                    border-left: 4px solid #26B7BC;
                }
            }
        }
    }
</style>
