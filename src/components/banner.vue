<template>
    <div class="banner">
        <div class="main"><img :src="src" alt=""></div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        porps:{
            src:{
                type:Array
            }
        }
    }
</script>

<style scoped lang="less">
    .banner{
        width: 100%;
        height: 629px;
        background: linear-gradient(to right,#62A3E2,#3742D2);
    }
</style>
