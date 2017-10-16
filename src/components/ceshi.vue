<template>
  <div class="hello">
    <div class="header1">
      <div class="tab" v-for="(item,index) in tab_list" @click="clickwo(index)" :class="{acti:item.classname}">
          <span>{{item.content}}</span>
      </div>
    </div>
    <nolike :is="abc"></nolike>
  </div>
</template>

<script>
import Nolike from './nolike'
import Tour from './tour'
import Sport from './sport'
import Gold from './gold'
import Internet from './internet'
export default {
  name: 'Hello',
  components:{
    nolike:Nolike
  },
  data () {
    return {
      msg1: '耐心等待一下',
      abc:Nolike,
      tab_list: [
        {
          name:"nolike",
          class: "a1",
          content: "我喜欢",
          classname:true,
          component: Nolike
        },
        {
          name:"tour",
          class: "a2",
          content: "旅游",
          classname:false,
          component: Tour
        },
        {
          name:"sport",
          class: "a3",
          content: "体育",
          classname:false,
          component: Sport
        },
        {
          name:"gold",
          class: "a4",
          content: "财经",
          classname:false,
          component: Gold
        },
        {
          name:"internet",
          class: "a5",
          content: "互联网",
          classname:false,
          component: Internet
        },
      ]
    }
  },
  methods: {
    clickwo:function (index) {
      var tabs = this.$data.tab_list;
      for(var i = 0;i<tabs.length;i++){
        tabs[i].classname = false
      }
      tabs[index].classname = true
      console.log(this.components)
      this.$data.abc = tabs[index].component
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  margin-top: 50%;
}
.hello div{
  color: #a4a3a8;
}
.hello div.re 

{
  color: red;
}
.header1{
  display: flex;
  width: 100%;
  height: 30px;
}
.header1 div{
  width: 20%;
  height: 100%;
  border-bottom: 1px solid #c7c7c7;
}
.header1 div.acti{
  color: black;
  font-weight: bold;
  border-bottom: 1px solid red;
}
.header1 div span{
  line-height: 30px;
}
.header1 div span.re 

{
  color: red;
}
</style>