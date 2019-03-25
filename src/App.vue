<template>
  <div id="app">
    <Head></Head>
    <router-view/>
  </div>
</template>
<script>
  import Head from '@/components/header'
  export default {
    components:{
      Head
    }
  }
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: #F9F9F9;
}
*{
  padding: 0;
  margin: 0;
}
  ul{
    list-style: none;
  }
</style>
