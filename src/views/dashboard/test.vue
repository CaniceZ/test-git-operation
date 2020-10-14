<template>
    <div>
        子组件:{{num}}
        <test-child></test-child>
    </div>
</template>

<script>
  import testChild from "./testChild.vue"
  const worker = require("../../worker")
  console.log(worker)
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
      //WEB页主线程
      var worker = new Worker(worker); //创建一个Worker对象并向它传递将在新线程中执行的脚本的URL
      worker.postMessage("hello world");     //向worker发送数据
      worker.onmessage = function (evt) {     //接收worker传过来的数据函数
        console.log(evt.data);              //输出worker发送来的数据
        worker.terminate();
      }
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
