<template>
    <div>
        孙组件{{num}}
    </div>
</template>

<script>
  export default {
    name: "testChild",
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
