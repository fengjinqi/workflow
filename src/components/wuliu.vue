<template>
    <div class="detail-item">
        <div class="flex erbox">
            <div class="erleft">
                <div class="title"><img :src="tu" alt="">物流轨迹</div>
                <div class="map" id="container"></div>
            </div>
            <div class="erright">
                <div class="title"><img :src="sang" alt="">商品内容</div>
                <div class="flex">
                    <div class="tab">
                        <div class="active">包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                        <div>包裹一</div>
                    </div>
                    <div class="tabcont" >
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="date"
                                    label="商品名"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="编号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="数量">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="小计">
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
                sang:require('../assets/D1EDFCFC-11DF-462E-94E4-8EB48A88151E@1x.png'),
                tu:require('../assets/5741F403-6EB7-474B-969A-C55D008BB50E@1x.png'),
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
        mounted(){

            var map = new AMap.Map("container", {
                center: [121.490317, 31.222771],
                zoom: 13
            });

            var path = [
                [121.490317, 31.222771],
                [121.490317, 31.222771],
                [121.4222, 31.218123],
                [121.448224, 31.229003]
            ];

            var polyline = new AMap.Polyline({
                path: path,
                isOutline: true,
                outlineColor: '#ffeeff',
                borderWeight: 3,
                strokeColor: "#3366FF",
                strokeOpacity: 1,
                strokeWeight: 6,
                // 折线样式还支持 'dashed'
                strokeStyle: "solid",
                // strokeStyle是dashed时有效
                strokeDasharray: [10, 5],
                lineJoin: 'round',
                lineCap: 'round',
                zIndex: 50,
            })

            polyline.setMap(map)
            // 缩放地图到合适的视野级别
            map.setFitView([ polyline ])

            var polyEditor = new AMap.PolyEditor(map, polyline)





           /* var map = new AMap.Map("container", {
                center: [121.490317, 31.222771],
                zoom: 14
            });

            var truckDriving = new AMap.TruckDriving({
                policy: 0, // 规划策略
                size: 1, // 车型大小
                width: 2.5, // 宽度
                height: 2, // 高度
                load: 1, // 载重
                weight: 12, // 自重
                axlesNum: 2, // 轴数
                province: '京', // 车辆牌照省份
            })

            var path = []
            path.push({lnglat:[121.490317, 31.222771]});//起点
            path.push({lnglat:[121.490317, 31.222771]});//途径
            path.push({lnglat:[121.4222, 31.218123]});//途径
            path.push({lnglat:[121.448224, 31.229003]});//终点

            truckDriving.search(path, function(status, result) {
                // result即是对应的货车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                if (status === 'complete') {
                    log.success('绘制货车路线完成')

                    if (result.routes && result.routes.length) {
                        drawRoute(result.routes[0])
                    }
                } else {
                    log.error('获取货车规划数据失败：' + result)
                }
            })

            function drawRoute (route) {
                var path = parseRouteToPath(route)

                var startMarker = new AMap.Marker({
                    position: path[0],
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
                    map: map
                })

                var endMarker = new AMap.Marker({
                    position: path[path.length - 1],
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
                    map: map
                })

                var routeLine = new AMap.Polyline({
                    path: path,
                    isOutline: true,
                    outlineColor: '#ffeeee',
                    borderWeight: 2,
                    strokeWeight: 5,
                    strokeColor: '#0091ff',
                    lineJoin: 'round'
                })

                routeLine.setMap(map)

                // 调整视野达到最佳显示区域
                map.setFitView([ startMarker, endMarker, routeLine ])
            }

            // 解析DrivingRoute对象，构造成AMap.Polyline的path参数需要的格式
            // DrivingResult对象结构参考文档 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DriveRoute
            function parseRouteToPath(route) {
                var path = []

                for (var i = 0, l = route.steps.length; i < l; i++) {
                    var step = route.steps[i]

                    for (var j = 0, n = step.path.length; j < n; j++) {
                        path.push(step.path[j])
                    }
                }

                return path
            }


*/

            /*var map = new AMap.Map("container", {
                center: [116.397559, 39.89621],
                zoom: 14
            });

            // 当前示例的目标是展示如何根据规划结果绘制路线，因此walkOption为空对象
            var walkingOption = {}

            // 步行导航
            var walking = new AMap.Walking(walkingOption)

            //根据起终点坐标规划步行路线
            walking.search([116.399028, 39.845042], [116.436281, 39.880719], function(status, result) {
                // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
                if (status === 'complete') {
                    if (result.routes && result.routes.length) {
                        drawRoute(result.routes[0])
                        log.success('绘制步行路线完成')
                    }
                } else {
                    log.error('步行路线数据查询失败' + result)
                }
            });

            function drawRoute (route) {
                var path = parseRouteToPath(route)

                var startMarker = new AMap.Marker({
                    position: path[0],
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
                    map: map
                })

                var endMarker = new AMap.Marker({
                    position: path[path.length - 1],
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
                    map: map
                })

                var routeLine = new AMap.Polyline({
                    path: path,
                    isOutline: true,
                    outlineColor: '#ffeeee',
                    borderWeight: 2,
                    strokeWeight: 5,
                    strokeColor: '#0091ff',
                    lineJoin: 'round'
                })

                routeLine.setMap(map)

                // 调整视野达到最佳显示区域
                map.setFitView([ startMarker, endMarker, routeLine ])
            }

            // 解析WalkRoute对象，构造成AMap.Polyline的path参数需要的格式
            // WalkRoute对象的结构文档 https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkRoute
            function parseRouteToPath(route) {
                var path = []

                for (var i = 0, l = route.steps.length; i < l; i++) {
                    var step = route.steps[i]

                    for (var j = 0, n = step.path.length; j < n; j++) {
                        path.push(step.path[j])
                    }
                }

                return path
            }*/
        },

    }
</script>
<style lang="less">
    .tabcont{
        th{
            background-color: rgba(38, 183, 188, 1)!important;
            color: #fff;
        }
    }
</style>
<style scoped lang="less">
    .title{
        img{
            vertical-align: middle;
            margin-right: 5px;
        }
    }

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
