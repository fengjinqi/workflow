<template>
  <div id="app">
    <Top />
    <router-view/>
  </div>
</template>
<script>
    import Top from '@/components/top'//头部
  export default {
      name: "top",
      data() {
          return{

          }
      },
      components:{
          Top,
      },
  }
</script>
<style lang="less">
  *{
    padding: 0;
    margin: 0;
  }
  body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: #F9F9F9;
    font-size: 14px;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  input{
    outline: none;
    border:none;
  }
  .main{
    width: 1200px;
    margin:0 auto;
  }
  .flex{
    display: flex;
    display: -webkit-flex;
  }
  .flex-j{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .flex-w{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
