<template>
  <div id="shijuan">    
    <div class="logo1" >试卷历史</div>
    <div class="icon">
      <span class="fanh" @click="add"><</span>
    </div>      
  </div>
</template>

<script>
  export default{
    name: 'shijuan',
    data () {
      return {
      }
      },
      methods:{
        add (){
         this.$router.goBack() 
        }
      }
  }
</script>
<!--scoped 表示作用域 为当前模板对象 -->

<style scoped>
  #pigai{
    width: 100%;
  }
  .logo1{
    width: 100%;
    height: 68px;
    color: white;
    font-size: 20px;
    text-align: center;
    background: #34cfc9;
    line-height: 70px;
  }
  .fanh{
      width: 8%;
      height: 68px;
      display: inline-block;
      color: white;
      font-size: 30px;
      line-height: 70px;
      background-color: #34cfc9;
      text-align: right;
      position: fixed;
      top:0;
      left: 0;
    }
</style>