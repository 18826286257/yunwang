<template>
  <div>
    <router-view class="child-view"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>

<style scoped>
.child-view {
  width:100%;
  height: 100%;
}
</style>