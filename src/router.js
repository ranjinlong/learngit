import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Arg from './views/Arg.vue'
import Detail from './views/Detail.vue'
import User from './views/User.vue'
import Login from './views/Login.vue'
import bus from './bus.js' 
import Register from './views/register/register.vue'
import Product from './views/product/Product.vue'
import Cart from './views/cart/Cart.vue'
Vue.use(Router)

const router =  new Router({

  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:["/home","/main"]
     
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register,   
     
    },
    {
      path: '/cart',
      name: 'Cart',
      component:Cart,   
     
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,   
     
    },
    {
      path: '/category',
      name: 'category',
      component: Category,

      
    },
    {
      path: '/user',
      name: 'user',

      component: User
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      
    },
 
    {
      path: '/about',
      name: 'about',
     
     
      component: () => import( './views/About.vue'),
      children:[
        {path:"arg",component:Arg},
        {path:"detail",component:Detail},
        {path:"",redirect:"arg"}
      ]
    }
  ]
})

router.beforeEach(function(to,from,next){

  console.log(to,from)
  
  if(to.meta.reAuth){
    if(bus.islog){
      next(); 
    }else{
      next("/login?redirect="+to.path)
    }
  }else{
    next();
   
  }
 
})
export default router;