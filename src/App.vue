<template>
  <div id="app full">
    <keep-alive include="category">
      <!-- 缓存组件 -->
    <router-view class="full has-tabs"/>
    </keep-alive>
    <div  class="row tac tabs">
      <router-link class="col" to="/">首页</router-link>      
      <router-link class="col" to="/category">分类</router-link> 
      <router-link class="col" to="/cart">购物车({{cartNum}})</router-link> 
      <router-link class="col" to="/user">个人中心</router-link>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default {
  created(){
  
    this.getGoods();
    this.$http.get("http://www.mi.com/pro")
    .then(res=>{
      console.log(res.data);
    })
  },
  computed:{

    ...mapGetters(["cartNum"])
  },
  methods:{

    ...mapActions(["getGoods"])
  }
}
</script>


<style lang="less">
.about.router-link-active{ color:#f30;}
.router-link-exact-active{color:#f30;}
</style>
