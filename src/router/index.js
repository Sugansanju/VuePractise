import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vfor from '@/components/V-for/Vfor'
import Vif from '@/components/V-if/Vif'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vfor',
      name: 'Vfor',
      component:Vfor
    },
    {
      path: '/vif',
      name: 'Vif',
      component:Vif
    }
  ]
})
