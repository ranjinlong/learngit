<template>
    <div>
        <van-nav-bar title="标题" left-text="返回" @click-left="$router.go(-1)" left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
        
        <div v-for="(item,index) in goods" :key="index" class="row">
            <div class="col-10 col-center"><van-checkbox v-model="checked"></van-checkbox></div>
             <div class="col-30">
                 <img :src="item.image_url" alt="" width="100%">
             </div>
             <div class="col-50">
                 <h3>{{item.name}}</h3>
                 <p>价格：{{item.pres}}</p>
                 <div><van-stepper
                v-model="item.num"
                integer
                :min="1"
                :max="item.buy_limite"
                :step="1"
                /></div>
             </div>
              <div class="col-10 col-end">
                  <van-icon name="delete" />
              </div>
            {{item.name}}--{{item.num}}
            </div>
    </div>
</template>
<script>
// 导入mapstate方法
import {mapState} from 'vuex';
// 01 插件第一步导入插件
import {NavBar,Icon,Checkbox, CheckboxGroup,Stepper} from 'vant';
export default {
    data(){
        return {Checked:true}
    },
    computed:{
        ...mapState(["goods"])
    },
    components:{
        //插件02 注册组件
        [NavBar.name]:NavBar,
        // vant-nav-bar:NavBar
        //es 属性动态设置写法
        [Icon.name]:Icon,
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup,
        [Stepper.name]:Stepper
    }
}
</script>
<style scoped>
.van-nav-bar .van-icon{
    color: #7c7c7c;
}
.van-nav-bar_txt{
    color: #777;
}

</style>

