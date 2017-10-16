<template>
	<div id="gouwuche">
		<div class="logo3">帮帮团
	        <span class="sp1">我的帖子</span>
	        <span class="sp5"></span>
        </div>
        <div class="daohang">
		    <ul>
		        <li class="tab4" v-for="(item,index) in list5">
		          <router-link :to="item.path" class="apple">
		            <div class="tab_item" @click="clickwo(index)" :class="{acti:item.classname}">
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
	export default{
	  data () {
	    return {
	      list5:[
        {
          name:"行测",
          path:"/diany",
          classname:true,
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"申论",
          path:"/dians",
          classname:false,
          badge:5,
          icon_path:"xx.png"
        },
        {
          name:"面试",
          path:"/zongy",
          classname:false,
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"交流",
          path:"/dongm",
          classname:false,
          badge:2,
          icon_path:"xx.png"
        },
        {
          name:"反馈",
          path:"/xinw",
          classname:false,
          badge:2,
          icon_path:"xx.png"
        },
       ]
	}
  },
  methods: {
  	clickwo:function(index) {
  		var tabs=this.$data.list5;
  		for(var i=0;i<tabs.length;i++){
  			tabs[i].classname = false
  		}
  		tabs[index].classname=true;
  	}
  }
}
</script>

<style scoped>
	#gouwuche{
	   	width: 100%;
	}
	.logo3{
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
	.logo3 .sp1{
	      display: inline-block;
	      line-height: 68px;
	      color: white;
	      font-size: 0.8em;
	      position: absolute;
	      top:10px;
	      left: 4%;    
	}
	.logo3 .sp5{
	      display: inline-block; 
	      width: 15%;
	      height: 55px;
	      background: url(../assets/bangb.png) no-repeat;
	      background-size: 100% 100%;
	      position: absolute;
	      top: 6px;
	      right: 1%;
	}
	.daohang{
		width: 100%;
        text-align: center;
        position: fixed;
        top:68px;
        left: 0;
        z-index: 1000;
		background-color: #ffffff;
		border-bottom: 2px solid #b1b8b7;
	}
	.tab4{
		width: 19%;
		float: left;
		line-height: 45px;
		font-size: 1.1em;
		color: red;
	}
	.acti{
		color: red;
		text-decoration: underline;
	}
</style>
