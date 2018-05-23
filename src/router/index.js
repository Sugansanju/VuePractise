import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vfor from '@/components/V-for/Vfor'
import Vif from '@/components/V-if/Vif'
import Vshow from '@/components/V-show/Vshow'
import Vmodel from '@/components/V-model/V-model'
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
    },
    {
      path: '/vshow',
      name: 'Vshow',
      component:Vshow
    },
    {
      path: '/vmodel',
      name: 'Vmodel',
      component:Vmodel
    }
  ]
})
