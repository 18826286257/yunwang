<template>
	<div id="faxian">
      <div class="logo2">课程
         <span class="sp1">工具箱</span>
         <span class="sp5"></span>
       </div>
      <div class="wdkc">
         <div class="wokec"><img src="../assets/wokec.png"></div>
         <span>我的课程</span>
         <span class="wokech">></span>
      </div>
      <div class="suoyoukc" v-for="item in list3">
          <router-link :to="item.path" >
              <img v-lazy="item.url">
          </router-link>        
      </div>
      <div class="foot">
         <ul>
            <li>版权所有，侵权必究</li>
            <li>广州服务中心</li>
         </ul>
      </div>
   </div>
</template>

<script>
	export default{
	  data () {
	    return {
	       list3:[
            {
             url:"/static/suoyoukc.png",
             path:"/",
            },
            {
             url:"/static/suoyoukc.png",
             path:"/",
            },
            {
             url:"/static/suoyoukc.png",
             path:"/",
            },
            {
             url:"/static/suoyoukc.png",
             path:"/",
            },
            {
             url:"/static/suoyoukc.png",
             path:"/",
            },
            {
             url:"/static/suoyoukc.png",
             path:"/",
            },
            {
             url:"/static/suoyoukc.png",
             path:"/",
            },
         ] 
	  }
   }
}
</script>

<style scoped>
   #faxian{
   	width: 100%;
   	margin-top: 60px;
   }
   .logo2{
      width: 100%;
      color: white;
      background-color: #34cfc9;
      text-align: center;
      position: fixed;
      line-height: 68px;
      font-size: 1.2em;
      top: 0;
      left: 0;
      z-index: 1000;
  }
  .logo2 .sp1{
      display: inline-block;
      line-height: 68px;
      color: white;
      font-size: 0.8em;
      position: absolute;
      top:10px;
      left: 4%;    
  }

   .logo2 .sp5{
      display: inline-block; 
      width: 20%;
      height: 55px;
      background: url(../assets/pingf.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 6px;
      right: 1%;
    }
    .wdkc{
      margin-top: 78px;
      width:100%;
      font-size: 20px;
      overflow: hidden;
      position: relative;
      background-color: white;
    }
    .wokec{
      width: 20%;
      height: 100%;
      float: left;
    }
    .wokec img{
      width: 100%;
      /*height: 100%;*/
    }
    .wdkc span{
      display: inline-block;
      line-height: 70px;
    }
    .wokech{
      position: absolute;
      top:0;
      right: 3%;
    }
    .suoyoukc{
      width: 100%;
      margin:10px 0;
    }
    .suoyoukc img{
      width: 100%;
    }
    .foot{
      width: 100%;
      height: 60px;
      background-color: #626365;
      margin-bottom: 50px;
    }
    .foot ul{
      width: 60%;
      height: 100%;
      margin: 0px auto;
    }
    .foot ul li{
      width: 100%;
      height: 40%;
      font-size:12px;
      line-height: 31px;
      text-align: center;
    }   
</style>
