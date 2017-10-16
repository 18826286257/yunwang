<template>
  <div class="shouye">
    <div class="logo">云网学习
      <router-link :to="item.path" class="guangd" v-for="item in list1">
        <span class="sp1">{{item.name}} <span class="sp2" >></span></span>         
      </router-link>
      <router-link :to="item.path" class="guangd" v-for="item in list2">
        <span class="sp4"></span>       
      </router-link>
      <span class="sp5"></span>
    </div>
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/1.jpg"alt=""></div>
            <div class="swiper-slide"><img src="../assets/2.jpg"alt=""></div>
            <div class="swiper-slide"><img src="../assets/3.jpg"alt=""></div>
            <div class="swiper-slide"><img src="../assets/4.jpg"alt=""></div>
            <div class="swiper-slide"><img src="../assets/5.jpg"alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
<!--         <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </div>
    </div>
    <div class="daohang">
      <router-link :to="item.path" v-for="item in tab_list">
              {{item.name}}
      </router-link>
    </div>
    <div class="xuexi">
      <a href=""><img src="../assets/xuexijh.png"></a>
      <div class="xue">
        <p>我们基于十数年的教育经验，为你打造一套可指定的高效率弹性学习系统。我...</p>              
      </div>
      <span>定制计划</span>
    </div>
    <div class="mijuan">
      <a href="#"><img src="../assets/mijuan.png"></a>
      <div class="mijuan1">
        <p>2017年省考《行政职业能力...</p>
        <span class="span1">￥69.90</span><span class="span2"></span>
      </div>
      <a href="#"><img src="../assets/mijuan.png"></a>
      <div class="mijuan1">
        <p>2017年广东省考《行政职业能力...</p>
        <span class="span1">￥69.90</span><span class="span2"></span>
      </div>
    </div>
    <div class="gongmix">
      <div class="gongk">
        <span class="sp1">公开课</span>
        <span class="sp2">直播免费</span>
        <img src="../assets/gongkaik.png">
      </div>
      <div class="miaos">
        <span class="sp3">秒杀</span>
        <img src="../assets/miaos.png">
      </div>
      <div class="jingx">
        <span class="sp1">精选</span>
        <span class="sp2">精选商品</span>
        <img src="../assets/jingx.png">
      </div>
    </div>
    <div class="mingsy">
      <span class="sp6">名师卷</span><span class="sp7">查看往期 ></span>
    </div>
    <div class="mings">
      <img src="../assets/mings.png">
    </div>
    <div class="mingsy">
      <span class="sp6">课程推荐</span><span class="sp7">更多 ></span>
    </div>
    <div class="shangpin">
        <div class="tw" v-for="item in list">
          <div class="link">
            <img :src="loc+item.icon[0]">
          </div>
        <div class="wenzi">
            <p>{{item.title}}</p>
            <p>{{item.priceShow}}￥</p> 
          </div>
        </div>        
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
import Swiper from '../../static/swiper-3.4.2.min.js'
export default {
  name: 'shouye',
  data () {
    return {
      list2:[
      {
        path:'/sousuo'
      }
      ],
      list1:[
      {
        name:"请选择城市",
        path:'/didian',
      }
      ],
      loc:"https://xcx.honqb.com",
      list:[],
      tab_list:[
        {
          name:"资料提取",
          path:"/ziliao"
        },
        {
          name:"真题卷",
          path:"/zhentijuan"
        },
        {
          name:"电子书",
          path:"/dianzi"
        },
        {
          name:"考友切磋",
          path:"/kaoyou"
        },
        {
          name:"每日任务",
          path:"/meiri"
        },
      ],
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container',{
      loop:true,      //循环切换
      autoplay : 1000,
      autoplayDisableOnInteraction : false,
      speed:1000,  
      pagination : '.swiper-pagination',
      paginationClickable :true,
    });
      this.$http.get("/commodity/getList",{}).then((s_res)=>{
            console.log("请求成功")
            console.log(s_res)
            this.$data.list=s_res.body.data;
          },(e_res)=>{
            console.log("请求失败")
            console.log(e_res)
          })
  },
  methods:{
    
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/swiper-3.4.2.min.css';
    a{
      text-decoration: none;
      color: black;
    }
    .shouye{
      width: 100%;
      height: 100%;
    } 
    .logo{
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
    .logo .sp1{
      line-height: 20px;
      color: white;
      font-size: 0.8em;
      position: absolute;
      top:35px;
      left: 4%;
    }
    .logo .sp2{
      color: white;
      display: inline-block;
      margin-left: 5px;
      transform: rotate(90deg);
    }
    .sp4{
      display: inline-block;
      width: 30px;
      height: 30px;
      position: absolute;
      top: 18px;
      right: 10%;
      background: url(../assets/fangd.png) no-repeat;
      background-size: 100% 100%;
    }
    .sp5{
      display: inline-block; 
      width: 30px;
      height: 30px;
      background: url(../assets/erwei.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 18px;
      right: 1%;
    }
    .mint-popup{
      width: 100%;
      height: 100%;
    }
    .lunbo{
      width: 100%;
      margin-top: 69px;
    }
    .swiper-container,.swiper-wrapper,.swiper-slide{
      width: 100%;
      height:100%;
      z-index: 1
    }
    .swiper-slide img{
      width: 100%;
      height: 100%;
    }
    .daohang{
      width: 100%;
      text-align: center;
      overflow: hidden;
      background-color: #ffffff;
    }
    .daohang a{
      display: block;
      width: 20%;
      float: left;
      font-size: 14px;
      line-height: 52px;
      padding-top:37px;
    }
    .daohang a:nth-child(1) {
      background: url(../assets/ziliao.png) no-repeat;
      background-size: 100% 58%;
    }
    .daohang a:nth-child(2) {
      background: url(../assets/zhenti.png) no-repeat;
      background-size: 100% 58%;
    }
    .daohang a:nth-child(3) {
      background: url(../assets/dianzis.png) no-repeat;
      background-size: 100% 58%;
    }
    .daohang a:nth-child(4) {
      background: url(../assets/kaoyouq.png) no-repeat;
      background-size: 100% 58%;
    }
    .daohang a:nth-child(5) {
      background: url(../assets/meirir.png) no-repeat;
      background-size: 100% 58%;
    }
    .xuexi{
      width: 100%;
      background: #ffffff;
      overflow: hidden;
      position: relative;
      margin-top: 12px;
    }
    .xuexi a{
      display: inline-block;
      margin:9px 2%;
      width: 28%;
      height: 80.3%;
      float: left;
    }
    .xuexi img,.mijuan img,.gongk img,.miaos img,.jingx img,.mings img{
      width: 100%;
      height: 100%;
    }
    .xue{
      width: 67%;
      float: left;
      font-size: 13px;
      position: relative;
    }
    .xue p{
      margin-top: 2%;
      font-size: 14px;
    }
    .xuexi span{
      display: inline-block;
      width: 20%;
      height: 33%;
      text-align: center;
      line-height: 193%;
      font-size: 15px;
      position: absolute;
      color: #c8f2f0;
      bottom: 7%;
      right: 3%;
      border-radius: 5px;
      border:2px solid #c8f2f0;
    }
    .mijuan{
      width: 100%;
      margin-top: 12px;
      background: #ffffff;
      overflow: hidden;
    }
    .mijuan a{
      display: inline-block;
      width: 15%;
      margin:10px 8px 10px 10px;
      float: left;
    }
    .mijuan .mijuan1{
      width: 29%;
      float: left;
      font-size: 13px;
    }
    .mijuan1 p{
      margin-top: 10px;
    }
    .mijuan1 .span1{
      display: inline-block;
      font-size: 15px;
      color: orange;
    }
    .mijuan1 .span2{
      display: inline-block;
      width: 45%;
      height: 23px;
      background: url(../assets/tejia.png) no-repeat;
      background-size: 100% 100%;
    }
    .gongmix{
      width: 100%;
      background: #ffffff;
      overflow: hidden;
    }
    .gongk,.miaos,.jingx{
      width: 32%;
      float:left;
      text-align: center;
      border: 1px solid #d9d9d9;
    }
    .gongk{
      border-left-color: #ffffff;
      border-bottom-color: #ffffff;
    }
    .miaos{
     border-bottom-color: #ffffff; 
    }
    .jingx{
      border-right-color: #ffffff;
      border-bottom-color: #ffffff;
    }
    .gongk span, .miaos span,.jingx span{
      display: block;
    }
    .gongk .sp1{
      font-size: 21px;
      color:orange;
    }
    .gongk .sp2{
      color:#848484;
    }
    .sp3{
     font-size: 21px; 
     line-height: 37px;
    }
    .mingsy{
      width: 100%;
      height: 40px;
      margin-top: 10px;
      line-height: 40px;
      position: relative;
      background: #ffffff;
      z-index: 500;
      border-bottom:2px solid #d9d9d9;
    }
    .mingsy .sp6,.mingsy .sp7{
      display: inline-block;
      width: 23%;
      font-size: 16px
    }
    .mingsy .sp6{
      margin-left: 5%;
    }
    .mingsy .sp7{
      position: absolute;
      top:0;
      right: 0;
    }
    .shangpin{
      width: 100%;
      overflow: hidden;
      background-color: #ffffff; 
    }

    .shangpin .tw{
      width: 100%;
      overflow: hidden;
    }
    .shangpin .tw .link{
      /*display: block;*/
      width: 35%;
      float: left;
      margin-left: 2%;
      margin-top: 10px;
    }
    .wenzi{
      width: 61%;
      float: left;
    }
    .shangpin .tw .link img{
      width: 100%;
      height: 100%;
    }
    .wenzi p{
      font-size: 1em;
      margin: 10px 10px;
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