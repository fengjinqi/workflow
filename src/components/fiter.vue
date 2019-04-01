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
                        <el-checkbox v-for="item in fiters1" :label="item" :key="item">{{item}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="fiter-item-more">更多 ></div>
            </div>
            <div class="fiter-item flex" style="border-top:1px solid #eee;border-bottom:1px solid #eee;">
                <div class="fiter-item-name">手术部位</div>
                <div class="fiter-item-all">
                    <el-checkbox  v-model="checkAll2" @change="handleCheckAllChange2">全部</el-checkbox>
                </div>
                <div class="fiter-item-list flex">
                    <el-checkbox-group v-model="checkedFiters2" @change="handleCheckedFitersChange2">
                        <el-checkbox v-for="item in fiters2" :label="item" :key="item">{{item}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="fiter-item-more">更多 ></div>
            </div>
    <!--        <div class="fiter-item flex" style="padding-bottom:20px;">
                <div class="fiter-item-name">价格区间</div>
                <div><input type="text" class="price" v-model="minPrice"></div>
                <div class="border"></div>
                <div><input type="text" class="price" v-model="maxPrice"></div>
                <div class="confirm" style="margin-left:20px;">确定</div>
                <div class="reset">重置</div>
            </div>-->
        </div>
    </div>
</template>

<script>
    const fiterOptions1 = ['分类一', '分类二', '分类三', '分类四', '分类五', '分类六', '分类七', '分类八', '分类九', '分类十', '分类', '分类十二', '分类十三', '分类十四', '分类十五'];
    const fiterOptions2 = ['分类一', '分类二', '分类三', '分类四', '分类五', '分类六', '分类七', '分类八', '分类九', '分类十', '分类', '分类十二', '分类十三', '分类十四', '分类十五'];
    export default {
        name: "fiter",
        data() {
            return {
                //品牌
                checkAll1: false,
                checkedFiters1: [],
                fiters1: fiterOptions1,
                //手术部位
                checkAll2: false,
                checkedFiters2: [],
                fiters2: fiterOptions2,
                //价格区间
                minPrice:"",
                maxPrice:""
            };
        },
        methods: {
            //品牌
            handleCheckAllChange1(val) {
                this.checkedFiters1 = val ? fiterOptions1 : [];
            },
            handleCheckedFitersChange1(value) {
                let checkedCount1 = value.length;
                this.checkAll1 = checkedCount1 === this.fiters1.length
            },
            //手术部位
            handleCheckAllChange2(val) {
                this.checkedFiters2 = val ? fiterOptions2 : [];
            },
            handleCheckedFitersChange2(value) {
                let checkedCount2 = value.length;
                this.checkAll2 = checkedCount2 === this.fiters2.length
            }
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
