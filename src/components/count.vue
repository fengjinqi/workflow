<template>
    <div class="count flex" min='1' max='10'>
        <button class="cut" @click="cuts">-</button>
        <input class="" v-model="number" type="number" readonly />
        <button class="add" @click="add">+</button>
    </div>
</template>

<script>
    export default {
        name: "count",
        data(){
            return {
                number:1,
            }
        },
        methods: {
            cuts(){
                if(this.number<=1) return
                this.number--;
            },
            add(){
                if(this.number>=10) return
                this.number++;
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
