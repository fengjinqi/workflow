<template>
    <div>
        <div class="header">
            <div><img class="logo" :src="src" alt=""></div>
            <div class="search">
                <el-row>
                    <el-col :span="18">
                        <div class="search-main">
                            <el-row>
                                <el-col :span="6"><div class="select">搜单</div></el-col>
                                <el-col :span="18"><input type="text" placeholder="搜全网6085789件商品" style="width: 100%;height: 40px; border:none;outline: none;padding-left: 15px;color:rgba(153, 153, 153, 1);  box-sizing: border-box;"></el-col>
                            </el-row>

                        </div>
                    </el-col>
                    <el-col :span="6">
                        <button type="button" class="btn">搜索</button>
                    </el-col>
                </el-row>
            </div>
            <div class="me-shops">
                我的购物车
            </div>
        </div>
        <div class="nav">
            <ul>
                <li><i class="el-icon-tickets"></i>全部商品分类</li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                src:require('../assets/logo.png'),
                region:''
            }
        },
    }
</script>

<style scoped lang="less">
.header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 15px 0;
    justify-content: space-around;

    .logo {
        height: 45px;
    }

    .search-main {
        width: 400px;
        height: 40px;
        box-sizing: content-box;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(49, 152, 205, 1);

        .select {
            width: 100px;
            height: 40px;
            background-color: rgba(244, 244, 244, 1);
            font-size: 14px;
            line-height: 40px;
            text-align: center;
            color: rgba(153, 153, 153, 1);

        }
    }

    .btn {
        width: 100px;
        height: 42px;
        background-color: rgba(49, 152, 205, 1);
        color: #fff;
        border: none;
        outline: none;
    }

    .me-shops {
        width: 210px;
        background: #fff;
    }
}
    .nav{
        width: 100%;
        background: rgb(49, 152, 205);
        ul{
            width: 1200px;
            margin: 0 auto;
            li{
                color: #fff;
                font-size: 18px;
            }
        }
    }
</style>
