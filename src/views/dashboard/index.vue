<template>
    <div>
        <div class="a" @click="b"><span class="b">1111</span></div>
        <test></test>
    </div>
</template>

<script>
  // import axios from '@/http'
  import VConsole from 'vconsole'
    import test from "./test.vue"
  // if (process.env.NODE_ENV === 'production') {
  //   new VConsole()
  // }
  export default {
    name: "index",
    components:{
      test
    },
    mounted(){
      // this.search()
    },
    data(){
      return{
        num: 0
      }
    },
    methods:{
      b(){
        this.$eventBus.$emit('add2',{num:this.num+=1})
      },
      async search() {
        let data = {
            a: 1
        };
        try {
          const res = await this.http.get("/shakespeare/notes/48360024/comments?page=1&count=10&author_only=false&order_by=desc");
          if (res.state === "fail") {
            console.log("请求失败2")
          } else if (res.state === "ok") {
            console.log("请求成功")
          }
        } catch (error) {
          console.error("异常");
        }
      },
    }
  }
</script>

<style lang="stylus" scoped>
.a{
    font-size 14px;
    height 100px;
    display flex;
    justify-content center;
    .b{
        color red;
        display inline-block;
        width 175px;
        font-size 24px;
        background #ccc
    }
}
</style>
