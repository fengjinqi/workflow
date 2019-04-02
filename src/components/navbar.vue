<template>
    <div class="nav">
        <div class="main">
            <div class="flex">
                <div>
                    <el-cascader
                            placeholder="商品分类"
                            expand-trigger="hover"
                            :options="list"
                            v-model="selectedOptions2"
                            @change="handleChange">
                    </el-cascader >
                </div>
               <!-- <div class="nav-first" @mouseover="selectType" :class="selectTypeShow?'active':''">
                    <div>全部商品分类</div>
                    <div v-show="selectTypeShow" class="selectType"  @mouseout="outSelectType" >
                        <ul>

                            <li  @mouseover='selectTypeFun(item.id)' :class="selectTypeIndex==item.id?'active':''" v-for="(item,index) in list">
                                <router-link :to="{ name: 'search', params: { id: item.id}}">{{item.name}}</router-link>
                            </li>

                        </ul>
                    </div>
                </div>-->
                <div class="nav-list flex">
                    <div class="nav-item" @mouseover="selectNav">
                        <router-link to="/order">订单中心</router-link>
                    </div>
                    <div class="nav-item" @mouseover="selectNav">
                        <router-link to="/account">账户金额</router-link>
                    </div>
                    <div class="nav-item" @mouseover="selectNav">服务报告</div>
                    <div class="nav-item" @mouseover="selectNav">待结算订单</div>
                    <div class="nav-item" @mouseover="selectNav">待结算订单</div>
                </div>
                <div class="nav-last">杨浦经销商 >></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return {
                selectTypeShow:false,
                selectTypeIndex:'1',
                selectedOptions2: [],

            }
        },
        props: {
            list: Array,
            required: true
        },
        methods: {
            //商品分类
            selectType(){
                this.selectTypeShow=true;
            },
            outSelectType(){
                this.selectTypeShow=false;
            },
            selectTypeFun(index){
                this.selectTypeIndex=index;

            },
            handleChange(value) {
                this.$router.push({
                    name:'search',
                    params:{
                        id:value.pop()
                    }
                })

            },
            //选择导航
            selectNav(){
                this.selectTypeShow=false;

            },
        }
    }
</script>

<style scoped lang="less">
.nav{
    background: #26B7BC;
    color: #fff;
    height: 43px;
    line-height: 43px;
    font-size:18px;
    .nav-item,.nav-last{
        padding:0 39px;
        cursor: pointer
    }
    .nav-first{
        padding:0 47px;
        position: relative;
        cursor: pointer;
        .selectType{
            position: absolute;
            top: 43px;
            left: 0;
            text-align: left;
            width:100%;
            z-index: 9;
            ul{
                li{
                    padding-left:47px;
                    height:79px;
                    line-height:79px;
                    font-size:18px;
                    background: #fff;
                    cursor: pointer;
                    a{
                        color:#333;
                        display:inline-block;
                        width:100%;
                        height:100%;
                    }
                }
                li.active{
                    background: #DCEBF2;
                    a{
                        color: #26B7BC;
                    }
                }
            }
        }
    }
    .nav-first.active{
        background: #35CED4;
    }
}
</style>
