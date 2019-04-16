<template>
    <div class="detail">
        <div class="main">
            <State></State>
            <Ordering></Ordering>
            <Wuliu></Wuliu>
            <Yiliao></Yiliao>
            <Maijia></Maijia>
            <OrderList></OrderList>
        </div>
    </div>
</template>

<script>
    import State from '@/components/state'//失败原因
    import Ordering from '@/components/ordering'//寄售订单
    import Wuliu from '@/components/wuliu'//物流轨迹
    import Yiliao from '@/components/yiliao'//医疗信息
    import Maijia from '@/components/maijia'//买家信息
    import OrderList from '@/components/orderList'//货物清单
    export default {
        name: "detail",
        components:{
            State,
            Ordering,
            Wuliu,
            Yiliao,
            Maijia,
            OrderList
        },
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">


</style>
