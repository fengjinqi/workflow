<template>
    <div class="count flex" min='1' max='100'>
        <button class="cut" @click.stop="cuts(chil,currentIndex)">-</button>
        <input class="" v-model="number" type="number" readonly />
        <button class="add" @click.stop="add(chil,currentIndex)">+</button>
    </div>
</template>

<script>
    export default {
        name: "count",
        data(){
            return {
                number:1,
                typ:[],
                zhen:[]
            }
        },
        props:{
            chil:{
              type: Object,
                default: ()=>{
                    return {}
                }
          },
            currentIndex: {
                type: Number,
                default: 0
            }
        },
        created(){
            console.log(this.chil)
        },
        methods: {
            cuts(item,index){
                if(this.number<=1) return
                this.number--;
                // this.typ.push({
                //     goodsId:e.target.getAttribute('data'),
                //     amount:this.number
                // })

                item.count = this.number;
                this.$emit("number",item,index);
            },
            add(item,index){
                if(this.number>=10) return
                this.number++;
                // this.typ.push({
                //     goodsId:e.target.getAttribute('data'),
                //     amount:this.number
                // })
                item.count = this.number;
                // this.zhen.push(this.typ)
                this.$emit("number",item,index);
            }
        }
    }
</script>

<style scoped lang="less">

.count{
    button{
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
    }
    input{
        width: 66px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-bottom:1px solid #e8e8e8;
        border-top:1px solid #e8e8e8
    }
}
</style>
