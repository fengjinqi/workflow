<template>
    <div class="fiter">
        <div class="main">
            <div class="fiter-item flex">
                <div class="fiter-item-name">品牌</div>
                <div class="fiter-item-all">
                    <el-checkbox v-model="checkAll1" @change="handleCheckAllChange1">全部</el-checkbox>
                </div>
                <div class="fiter-item-list flex">
                    <el-checkbox-group v-model="checkedFiters1" @change="handleCheckedFitersChange1">
                        <el-checkbox v-for="item in category.list" :label="item.id" :key="item.id">{{item.categoryName}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="fiter-item-more">更多 ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fiter",
        data() {
            return {
                //品牌
                checkAll1: false,
                checkedFiters1: [],
                fiters1: [],
            };
        },
        props:{
            category:{
                type:[Object,Array]
            }
        },
        watch:{
            category(v){
                console.log(v)
                //this.fiters1=v.list

            }
        },
        created(){
            console.log(this.category)
            //this.fiters1=this.category.list

        },
        methods: {
            //品牌
            handleCheckAllChange1(val) {
              console.log(val)


            },
            handleCheckedFitersChange1(value) {
                console.log(value)
            },
        }
    }
</script>

<style scoped lang="less">
.el-checkbox {
    margin-right: 20px;
    margin-bottom: 22px;
}
.confirm,.reset{
    margin-right: 10px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    width: 80px;
    text-align: center;
    border-radius:4px;
    cursor: pointer
}
.confirm{
    background: #26B7BC;
}
.reset{
    background: #999999;
}
    .fiter{
        margin-top: 20px;
        .fiter-item{
            padding:20px 20px 0 20px;
            background:#fff;
            .fiter-item-name,.fiter-item-all{
                margin-right: 20px;
                text-align: right;
                width: 56px;
            }
            .fiter-item-list{
                width: 950px;
            }
          .fiter-item-more{
              cursor: pointer;
              color: #26B7BC;
          }
          .price{
              width:76px;
              padding:0 12px;
              height: 30px;
              line-height: 30px;
              border: 1px solid #eee;
              border-radius: 4px
          }
          .border{
              width:16px;
              height: 1px;
              background: #666;
              margin: 0 10px;
              position: relative;
              top: 15px
          }
        }

    }
</style>
