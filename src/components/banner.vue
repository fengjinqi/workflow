<template>
    <div class="banner">

        <div class="main">
            <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="(item,index) in list" :key="index">

                    <img :src='/api/+item.src' alt="">
                </el-carousel-item>
            </el-carousel>
            <!--<img :src='/api/+list.file' alt="">-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        data(){
            return{}
        },
        props:{
            list:{
                type:[Array]
            }
        },
    }
</script>
<style>
    .el-carousel__container{
        height: 629px!important;
    }
</style>
<style scoped lang="less">

    .banner{
        width: 100%;
        height: 629px;
        background: linear-gradient(to right,#62A3E2,#3742D2);
    }
    .main{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
