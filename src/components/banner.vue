<template>
    <div class="banner">

        <div class="main"><img :src='/api/+list.file' alt=""></div>
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
                type:[Object,Array]
            }
        },
    }
</script>

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
