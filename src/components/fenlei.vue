<template>
  <div id="fenlei">
    <div class="logo2">练习
      <span class="sp1">工具箱</span>
      <span class="sp5"></span>
    </div>
    <div class="zhengq">
      <div class="zhengq1">
        <span class="col">正确率</span>
        <span class="col2">0%</span>
        <span class="col3"></span>
      </div>
      <div class="zhengq2">
        <span class="col">刷题量</span>
        <span class="col2">0</span>
      </div>
    </div>
    <div class="biaot">
      能力测试
    </div>
    <div class="kuais">
      快速练习
      <span class="kuaisl">></span>
    </div>
    <div class="tiku">
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li v-for="item in list"><span>></span>{{ item }}<div class="tiku1"></div></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
     name: 'fenlei',
    data () {
      return {
        // loadMore:false,
        list:[ "常识判断","语言理解","数量题"]
      }
  },
  methods: {
      loadMore() {
          this.loading = true;
          setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
          }, 250);
        }
    }
  }
</script>

<style scoped>
  #fenlei{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
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
      width: 30px;
      height: 30px;
      background: url(../assets/erwei.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 18px;
      right: 1%;
    }
    .zhengq{
      width: 100%;
      margin-top: 68px;
      background:#17bbb5;
      overflow: hidden;
      position: relative;
    }
    .zhengq1,.zhengq2{
      width: 50%;
      text-align: center;
      color: white;
      float: left;
      line-height: 35px;
    }
    .zhengq1 span,.zhengq2 span{
      display: block;
    }
    .col{
      font-size: 15px;
    }
    .col2{
      font-size: 32px;
    }
    .col3{
      width:0;
      height: 40px;
      position: absolute;
      top: 13px;left:50%;
      border: 1px solid #b8f2f0;
    }
    .biaot{
      width: 100%;
      font-size: 20px;
      padding-left: 13px;
      line-height: 40px;
    }
    .kuais{
      width: 100%;
      font-size: 20px;
      padding-left: 13px;
      line-height: 40px;
      background: white;
      position: relative;
      border-bottom:1px solid #dcdede;
    }
    .kuaisl{
      display: inline-block;
      font-size: 25px;
      position: absolute;
      top: 0px;right:5%;
    }
    .tiku{
      width: 100%;
      line-height: 55px;
      font-size: 15px;
      background-color: #ffffff;
    }
    .tiku ul li{
      padding-left: 15px;
      position: relative;
      border-bottom: 1px solid #d6d6d6;
    }
    .tiku ul li span{
      display: inline-block;
      margin-right: 40px;
    }
    .tiku1{
      width: 15%;
      height: 53px;
      position: absolute;
      top: 0px;right: 0%;
      background: url(../assets/xiez.png) no-repeat;
      background-size: 100% 100%;
    }
</style>
