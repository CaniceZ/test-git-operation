<template>
    <div>
        子组件:{{num}}
        <test-child></test-child>
    </div>
</template>

<script>
  import testChild from "./testChild.vue"
  export default {
    name: "test",
    components:{
      testChild
    },
    data(){
      return{
        num: 0
      }
    },
    mounted(){
      this.$eventBus.$on('add2',res=>{
        this.num = res.num
      })
    },
    destroyed(){
      this.$eventBus.$off()
    }
  }
</script>

<style scoped>

</style>
