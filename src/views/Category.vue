<template>
<div class="category">
    <div class="bar-header row">
        <span class="pa" @click="$router.go(-1)">返回</span>
        <div class="col tac">分类</div>
        <span class="pa">搜索</span>
    </div>
    <div class="full has-header">
        <div class="container row full">
                <div class="col-20 list scollV">
                    <div class="item" v-for="item in category" :key="item.category_id">
                            {{item.category_name}}

                    </div>
                </div>
                <div class="col-80 scollV">
                    <div v-for="bcat in category" :key="bcat.category_id">
                         {{bcat.category_name}}
                         <div v-for="(mcat,index) in bcat.category_list" :key="index">
                            <div v-if="mcat.view_type=='cells_auto_fill'">
                                    <img :src="mcat.body.items[0].img_url" width="100%" alt="">
                            </div>
                      
                         <div v-if="mcat.view_type=='category_title'">
                                <div class="tac">--{{mcat.body.category_name}} --</div>
                            </div>
                               <div class="row row-warp" v-if="mcat.view_type=='category_group'">
                                <div class="col-33 tac pa small" @click="$router.push('/product/'+pro.action.path)" v-for="(pro,ind) in mcat.body.items" :key="ind">
                                   
                                        <img :src="pro.img_url" alt="" width="100%">
                                        <p class="ellipisis">{{pro.product_name}}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){return{
        category:[]
    }},
    created(){
        this.getCat();
    },
    methods:{
        getCat(){
            this.$http.get("https://biger.applinzi.com/category.php")
            .then(res=>{
                console.log(res.data);
                this.category=res.data.data;
            })
        }
        
    }

}
</script>
<style>
.list .item{
    line-height: 0.43rem;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
}
</style>
