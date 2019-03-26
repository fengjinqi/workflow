<template>
    <div class="nav">
        <div class="main">
            <div class="flex">
                <div class="nav-first">全部商品分类</div>
                <div class="nav-list flex">
                    <div class="nav-item">
                        <router-link to="/order">订单中心</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link to="/account">账户金额</router-link>
                    </div>
                    <div class="nav-item">服务报告</div>
                    <div class="nav-item">待结算订单</div>
                    <div class="nav-item">待结算订单</div>
                </div>
                <div class="nav-last">杨浦经销商 >></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped lang="less">
.nav{
    background: #3198CD;
    color: #fff;
    height: 43px;
    line-height: 43px;
    .nav-item,.nav-last{
        padding:0 30px;
    }
    .nav-first{
        padding:0 47px;
    }
}
</style>