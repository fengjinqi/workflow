<template>
    <div class="detail-item">
        <div class="flex-j border">
            <div class="title">审核失败原因</div>
        </div>
        <div style="padding:20px">邮递地址与经销商合作地址不符。</div>
    </div>
</template>

<script>
    export default {
        name: "state",
        data(){
            return{

            }
        },
        props:{

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    .detail-item{
        /*padding: 20px;*/
        background: #fff;
        margin-top: 20px;
        .border{
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }
        .title{
            font-size: 18px;
            font-weight: bold;
            padding:20px 20px 0 20px
        }
    }
</style>
