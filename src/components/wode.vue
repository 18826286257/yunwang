<template>
	<div id="wode">
    <div class="logo4">
          <span class="sp2">未登录</span>
          <span class="sp1">未选择地址</span>
          <span class="sp5"></span>
          <div class="sp3"><img src="../assets/renw.png">每日任务</div>
    </div>
		<div class="cente">
		  <ul>
	        <li class="tab" v-for="item in tab_list">
	          <router-link :to="item.path" class="apple">
	              {{item.name}}
	          </router-link>
	          <span>></span>
	        </li>        
      	  </ul>
    </div>

    <!-- <div class="foot">
      <ul>
        <li>版权所有，侵权必究</li>
        <li>广州服务中心</li>
      </ul>
    </div> -->
	</div>
</template>

<script>
import Bus from '../buse/buse'
	export default{
	  name: 'wode',
  data () {
    return {
      tab_list:[
        {
          name:"查看代金券",
          path:"/dingd",
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"订单查询",
          path:"/chaxun",
          badge:5,
          icon_path:"xx.png"
        },
        {
          name:"我的电子书",
          path:"/dianzishu",
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"下载管理",
          path:"/zhifu",
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"申论批改",
          path:"/pigai",
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"我的错题",
          path:"/caip",
          badge:2,
          icon_path:"xx.png"
        },
                {
          name:"我的收藏",
          path:"/shoucang",
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"试卷历史",
          path:"/shijuan",
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"练习历史",
          path:"/lianxi",
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"设置",
          path:"/shezhi",
          badge:2,
          icon_path:"xx.png"
        },
      ]
    }
  },
  methods:{

  },   
}
</script>

<style scoped>
	#wode{
	   	width: 100%;
	}
  .logo4{
        width: 100%;
        color: white;
        background-color: #34cfc9;
        position: fixed;
        line-height: 150px;
        top: 0;
        left: 0;
        z-index: 1000;
  }
  .logo4 .sp1{
        width: 20%;
        display: inline-block;
        color: white;
        font-size: 0.8em;
        position: absolute;
        top:25px;
        left: 30%;    
  }
  .logo4 .sp2{
        margin-left: 30%;
        font-size: 1.2em;
  }
  .logo4 .sp5{
        display: inline-block; 
        width: 25%;
        height: 54%;
        background: url(../assets/renx.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 40px;
        left: 3%;
  }
  .logo4 .sp3{
    display: inline-block;
    width: 22%;
    line-height: 35px;
    font-size: 18px;
    padding-left: 13%;
    margin-right: 0%;
    border-radius: 15px 0px 0px 15px;
    background: #2fbab5;
    position: absolute;
    right: 0;top:65px;
  }
  .logo4 .sp3 img{
    width: 23%;
    height: 97%;
    position: absolute;
    top: 1px;left: 7%;
  }
   .cente{
    margin-top: 150px;
    width: 100%;
    overflow: hidden;
    background-color: white;
   }
   .cente ul li{
   	 width: 100%;
   	 font-size: 20px;
   	 line-height: 55px;
   	 border: 1px solid #d5d5d5;
   }
   .cente ul li:nth-child(1){
   	 background:url(../assets/daijinq.png) no-repeat;
   	 background-position: 0px 3px;
   	 background-size: 12% 87%;
   }
    .cente ul li:nth-child(2){
   	background:url(../assets/chaxun.png) no-repeat;
   	background-position: 0px 3px;
   	background-size: 12% 96%;
    border-bottom: 15px solid #d5d5d5;
   }
    .cente ul li:nth-child(3){
   	background:url(../assets/dianzishu.png) no-repeat;
   	background-position: 0px 3px;
   	background-size: 12% 96%;
   }
    .cente ul li:nth-child(4){
   	background:url(../assets/xizgl.png) no-repeat;
   	background-position: 0px 3px;
   	background-size: 12% 96%;
   }
    .cente ul li:nth-child(5){
   	background:url(../assets/pigai.png) no-repeat;
   	background-position: 0px 3px;
   	background-size: 12% 96%;
    border-bottom: 15px solid #d5d5d5;    

   }
    .cente ul li:nth-child(6){
   	background:url(../assets/cuoti.png) no-repeat;
   	background-position: 0px 3px;
   	background-size: 12% 96%;
   }
    .cente ul li:nth-child(7){
    background:url(../assets/shoucang.png) no-repeat;
    background-position: 0px 3px;
    background-size: 12% 96%;
   }
    .cente ul li:nth-child(8){
    background:url(../assets/lishi.png) no-repeat;
    background-position: 0px 3px;
    background-size: 12% 96%;
   }
    .cente ul li:nth-child(9){
    background:url(../assets/lishi.png) no-repeat;
    background-position: 0px 3px;
    background-size: 12% 96%;
   }
    .cente ul li:nth-child(10){
    background:url(../assets/shezhi.png) no-repeat;
    background-position: 0px 3px;
    background-size: 12% 96%;
   }
   .cente ul li a{
   	display: inline-block;
   	width: 70%;
   	height: 100%;
   	margin-left: 16%;
   }
   .cente ul li span{
   	width: 5%;
   	height: 100%;
   	display: inline-block;
	  text-align: right;
   }
    .mint-popup{
    width: 100%;
    height: 100%;
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