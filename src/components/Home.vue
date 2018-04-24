<template>
  <h3 class="home">
    home组件
    {{msg}}
    <img :src="beauty">
  </h3>
</template>

<script>
import  beauty from '../assets/beauty.jpg'
export default {
  name: 'home',
  data(){
    return {
      beauty:beauty,
      msg:"您的快递员已上线"
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  color:green;
}
</style>
