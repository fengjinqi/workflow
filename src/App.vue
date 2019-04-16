<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <Top />
      <router-view/>
    </div>
   <div v-if="!$route.meta.keepAlive">
     <router-view/>
   </div>
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
      mounted(){
          // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
          window.onbeforeunload = function (e) {
             alert()
          }
      }
  }
</script>
<style lang="less">
  *{
    padding: 0;
    margin: 0;
  }
  .fl{
      float: left;
  }
  .fr{
      float: right;
  }
  body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: #F9F9F9;
    font-size: 14px;
      color: #333;
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
  button{
      background-color: rgba(245, 245, 245, 1);
      border: 1px solid rgba(232, 232, 232, 1);
      color: #666;
      outline: none;
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
    /*justify-content: space-between;*/
  }
  .flex-r{
      display: flex;
      display: -webkit-flex;
      justify-content:flex-end;
  }
  .router-link-exact-active.router-link-active{
  background: rgba(68, 200, 204, 1);
  }
</style>
