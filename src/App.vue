<template>
  <div id="app">
    <div class="div1">
      <ul>
        <li class="tab" v-for="(item,index) in tab_list">
          <router-link :to="item.path" class="apple">
            <div class="tab_item" @click="clickwo(index)" :class="{acti1:item.classname}">
              {{item.name}}
            </div>
          </router-link>
        </li>        
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//  抛出组件
export default {
  name: 'app',
  data () {
    return {
      tab_list:[
        {
          name:"首页",
          path:"/shouye",
          classname:true,
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"练习",
          path:"/fenlei",
          classname:false,
          badge:5,
          icon_path:"xx.png"
        },
        {
          name:"课程",
          path:"/faxian",
          classname:false,
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"帮帮团",
          path:"/gouwuche",
          classname:false,
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"我的",
          path:"/wode",
          classname:false,
          badge:2,
          icon_path:"xx.png"
        },
      ]
    }
  },
  methods: {
      clickwo:function(index) {
        // alert("ssd")
        var tabs=this.$data.tab_list;
        for(var i=0;i<tabs.length;i++){
          tabs[i].classname = false
        }
        tabs[index].classname=true;
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.apple,.tab_item{
  text-decoration: none;
  display: inline-block;
  color: #8d9696;
  width:80%;
  height: 100%;
}
.div1 ul li:nth-child(1) .tab_item{
  background: url(assets/shouye.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
}
.div1 ul li:nth-child(1) .acti1{
  background: url(assets/shouye2.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
  color: #34cfc9;
}
.div1 ul li:nth-child(2) .tab_item{
  background: url(assets/liangxi.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
}
.div1 ul li:nth-child(2) .acti1{
  background: url(assets/lianxi2.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
  color: #34cfc9;
}
.div1 ul li:nth-child(3) .tab_item{
  background: url(assets/kecheng.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
}
.div1 ul li:nth-child(3) .acti1{
  background: url(assets/kecheng2.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
  color: #34cfc9;
}
.div1 ul li:nth-child(4) .tab_item{
  background: url(assets/bangbang.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
}
.div1 ul li:nth-child(4) .acti1{
  background: url(assets/bangbang2.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
  color: #34cfc9;
}
.div1 ul li:nth-child(5) .tab_item{
  background: url(assets/wode.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
}
.div1 ul li:nth-child(5) .acti1{
  background: url(assets/wode2.png) no-repeat;
  background-position: 50% -6px;
  background-size: 50px 40px;
  color: #34cfc9;
}
.div1 ul{
  width: 100%;
  height: 100%;
}
.tab{
  width: 20%;
  height: 100%;
  font-size: 0.6em;
  float: left;
  line-height:80px;

}
.div1{
  width:100%;
  height: 8%;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  border-top: 2px solid #b1b8b7;
}
</style>
