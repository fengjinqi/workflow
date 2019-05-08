<template>
    <div class="list">
        <div class="main">
            <div class="list-main flex-w">
                <div class="list-item" v-for="(item,index) in list" :key="index" @click.prevent="onTap(item)">
                    <div class="list-item-main" >
                        <div class="divM flex">
                            <!-- <el-checkbox-group v-model="dts" @change="handleCheckedCitiesChange"> -->
                            <el-checkbox v-model="item.isChecked" :checked="item.isChecked"></el-checkbox>

                            <!-- </el-checkbox-group> -->
                            <span  class="divMH">{{item.name}}</span>

                        </div>
                        <div class="divM info">编码：{{item.goodsSn}}</div>
                        <div class="divM info">{{item.categoryName}}</div>
                        <div class="divM price flex-j">
                            <div>¥{{item.price}}</div>
                            <div> <Count :chil="item" :current-index="index" @number="onNumberChange" ref="nb"></Count></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<style>
    .el-checkbox__label{
        display: none!important;
    }
</style>
<script>
    import Count from '@/components/count'//加减
    export default {
        name: "listDefinned",
         data(){
            return {
                checkedCities:[],
                dts:[],
                isChecked: false
            }
        },
        props:{
          list:{
              type:[Array]
          }
        },
        components:{
            Count,
        },
        watch:{
            "dts": {
                handler(newVal){
                    if(newVal.length>0){
                        this.$emit("input",newVal);
                    }
                },
                deep: true
            }
        },
        methods: {
            onTap(item){
                console.log("点击item块")
                item.isChecked = !item.isChecked;
                console.log(item.isChecked)
                if(item.isChecked){
                    if(this.dts.some((itemChild)=>itemChild.goodsId === item.id)){
                            this.dts.map((itemChilds,indexChilds)=>{
                                if(itemChilds.goodsId === item.id){
                                    this.dts.splice(indexChilds,1,{
                                        goodsId: item.id,
                                        amount:item.count
                                    })
                                }
                            })
                        }else{
                            this.dts.push({
                                goodsId: item.id,
                                amount: item.count
                            })
                        }
                }else{
                     if(this.dts.length>0&&this.dts.some((itemChild)=>itemChild.goodsId === item.id)){
                        this.dts.map((itemChilds,indexChilds)=>{
                            if(itemChilds.goodsId === item.id){
                                this.dts.splice(indexChilds,1)
                            }
                        })
                    }
                }
                this.$forceUpdate();
            },
            onNumberChange(item,index){
                this.list.splice(index,1,item);
                    if(item.count>1){
                        item.isChecked = true;
                        if(this.dts.some((itemChild)=>itemChild.goodsId === item.id)){
                            this.dts.map((itemChilds,indexChilds)=>{
                                if(itemChilds.goodsId === item.id){
                                    this.dts.splice(indexChilds,1,{
                                        goodsId: item.id,
                                        amount:item.count
                                    })
                                }
                            })
                        }else{
                            this.dts.push({
                                goodsId: item.id,
                                amount: item.count
                            })
                        }
                    }else{
                        item.isChecked = false;
                        if(this.dts.length>0&&this.dts.some((itemChild)=>itemChild.goodsId === item.id)){
                            this.dts.map((itemChilds,indexChilds)=>{
                                if(itemChilds.goodsId === item.id){
                                    this.dts.splice(indexChilds,1)
                                }
                            })
                        }

                    }
                // })
                console.log(this.dts)
            },
            /**
             * 单选
             * @param value
             */
            handleCheckedCitiesChange(value) {
                this.dts = []
                this.checkedCities.map((item)=>{
                    this.dts.push({
                        goodsId:item.id,
                        amount:1
                    })
                })
                console.log(this.dts)
                console.log(this.list)
            },
            /**
             * 全选
             */
            clickme(){ // 如果先单选了，这时候多选，单选会被置空吗不得
                if(this.isChecked){
                  return ;
                }
                this.dts = []
                this.isChecked = true;
                console.log("aaa")
                this.list.map((item)=>{
                    // this.checkedCities.push(item.id)
                    item.isChecked = true;
                     this.dts.push({
                         goodsId:item.id,
                         amount:item.count
                     })
                 })
                 this.$forceUpdate();
                // this.checkedCities=[]
                // this.dts = []
                // this.list.map(item=>{
                //     this.checkedCities.push(item.id)
                //     this.dts.push({
                //         goodsId:item.id,
                //         amount:1
                //     })
                // })
                // console.log(this.checkedCities)
                 console.log(this.dts)
            }
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
    .el-checkbox {
        margin-right: 8px;
    }
</style>
