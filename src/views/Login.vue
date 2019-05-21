<template>
<div>
    <h1>我是登录页面</h1>
    <p>用户名：<input type="text" v-model="userid" /></p>
    <p>密码：<input type="password" v-model="pwd"/></p>
    <button @click="login()">登录</button>
</div>
</template>
<script>
import bus from "./../bus.js";
export default{
    data(){
        return {userid:'',pwd:''}
    },
    
    methods:{
        login(){
            console.log(this.$router);
           
            this.$http({
                url:"http://www.520mg.com/member/index_login.php",
                method:"POST",
                withCredentials:true,
                data:`fmdo=login&dopost=login&userid=${this.userid}&pwd=${this.pwd}`
            })
            .then(res=>{
                    if(res.data.status==1){
                         bus.islog=true;
                     
                            if(this.$router.query.redirect){
                                this.$ruter.push(this.$router.query.redirect);
                            }
                    }else{
                        alert(res.data.msg)
                    }
            },err=>{
                console.log(err);
            })

            bus.islog=true;

            this.$router.push("/user");
        }
    }
}
</script>
<style>

</style>
