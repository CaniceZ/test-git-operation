<template>
    <div class="a"><span class="b">1111</span></div>
</template>

<script>
  // import axios from '@/http'
  export default {
    name: "index",
    mounted(){
      console.log(this.$http)
      this.search()
    },
    methods:{
      async search() {
        let data = {
            a: 1
        };
        try {
          const res = await this.http.get("/sugrec", data);
          if (res.state === "fail") {
            console.log("请求失败")
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
