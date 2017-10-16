<template>
	<div id="sousuo">
        <div class="icon">
            <span class="fanh" @click="add"><</span>
        </div>
       <div class="ssk">
          <!-- <div class="spand"></div>  -->
       	  <form action="" accept="" enctype="">
            <input type="text" value="搜索">
            <img src="../assets/fangd1.png">
       	  </form>
       </div>
	</div>
</template>

<script>
import Bus from '../buse/buse'
	export default{
	  name: 'sousuo',
	  data () {
	    return {
	   }
    },
    methods:{      
        add (){
          this.$router.goBack();
        }
    }
	}
</script>
<!--scoped 表示作用域 为当前模板对象 -->

<style scoped>
  #sousuo {
  	width: 93%;
  	height: 68px;
  	margin-left: 8%;
  }
  .ssk{
  	width: 100%;
  	height: 68px;
  	background: #34cfc9;
  }
  .ssk input{
  	width: 70%;
  	height: 30px;
  	margin-top: 20px;
  	font-size: 15px;
  	border-radius: 5px;
    margin-left: 10px;
    padding-left: 35px;
    background: #e8fffe;
    position: relative;
    border: 1px solid white;
  }
  .ssk img{
    width: 28px;
    height: 28px;
    position: absolute;
    top:21px;
    left: 45px;
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
