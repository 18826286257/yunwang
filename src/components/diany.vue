<template>
	<div id="diany">
		<div class="nav">
			<span class="nav1">置顶</span><span class="nav2">公考三国营招募中</span>
		</div>
		<div class="nek">
			<div class="ice" v-for="item in list3">
	          <router-link :to="item.path" >
	              <img v-lazy="item.url">
	          </router-link>        
	        </div>			
		</div>
  </div>
	</div>
</template>

<script>
	export default{
	  name: 'diany',
	  data () {
	    return {
	    	list3:[
            {
             url:"/static/tiezi.png",
             path:"/",
            },
            {
             url:"/static/tiezi.png",
             path:"/",
            },
            {
             url:"/static/tiezi.png",
             path:"/",
            },
            {
             url:"/static/tiezi.png",
             path:"/",
            },
            {
             url:"/static/tiezi.png",
             path:"/",
            },
            {
             url:"/static/tiezi.png",
             path:"/",
            },
            {
             url:"/static/tiezi.png",
             path:"/",
            },
            {
             url:"/static/tiezi.png",
             path:"/",
            },
         ] 
	    }
  },
	  mounted () {
	    // console.log('mycomponent.vue 加载完成')
  }
	}
</script>
<!--scoped 表示作用域 为当前模板对象 -->

<style scoped>
	#diany{
		width: 100%;
	}
	.nav{
		width: 100%;
		margin-top: 125px;
		font-size: 18px;
		background: white;
	}
	.nav1{
		display: inline-block;
		border-radius: 2px;
		border: 1px solid red;
		padding: 2px 2px;
		margin: 10px 10% 10px 8%;
	}
	.ice{
      width: 100%;
      margin:10px 0;
    }
    .ice img{
      width: 100%;
    }
    .nek{
      margin-bottom: 50px;
    }
</style>