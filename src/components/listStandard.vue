<template>
    <div class="list">
        <div class="main">
            <div class="list-main flex-w">
                <div class="list-item" v-for="item in list">
                    <div class="list-item-main">
                        <div class="divM">
                            <span class="divMH">{{item.name}}</span>
                        </div>
                        <div class="divM info">编码：{{item.goodsSn}}</div>
                        <div class="divM info">{{item.categoryName}}</div>
                        <div class="divM price">¥{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "list",
         data(){
            return {

            }
        },
        props:{
            list:{
                type:[Array,Object]
            }
        },
        computed:{

        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .list{
        .list-main{
            padding:15px 20px;
            background:#fff;
            .list-item{
                width: 278px;
                height: 164px;
                border: 1px solid #eee;
                margin:7px 0;
                position: relative;
                .list-item-main{
                    padding:15px 10px 0 10px;
                    .divM{
                        margin-bottom:10px;
                        .divMH{
                            display: inline-block;
                            height: 35px;
                            /*display: -webkit-box;*/
                            /*-webkit-box-orient: vertical;*/
                            /*-webkit-line-clamp:2;*/
                            overflow: hidden;
                        }
                    }
                    .divM.info{
                        color: #999;
                        font-size:12px;
                    }
                    .divM.price{
                        color: #FF8819;
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>
