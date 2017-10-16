<template>
	<div id="zongy">
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
	  name: 'zongy',
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
	#zongy{
		width: 100%;
	}    
	.nek{
	    margin-top: 125px;
	    margin-bottom: 50px;
    }
	.ice{
      width: 100%;
      margin:10px 0;
    }
    .ice img{
      width: 100%;
    }

</style>