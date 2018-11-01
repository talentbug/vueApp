import Vue from 'vue'
import Router from 'vue-router'
// 导入各个组件
import Home from '@/components/tabbar/Home'
import Member from '@/components/tabbar/Member'
import Shopcar from '@/components/tabbar/Shopcar'
import Search from '@/components/tabbar/Search'
import Newslist from '@/components/news/Newslist'
import Photoshar from '@/components/news/Photoshar'
import Shopbuy from '@/components/news/Shopbuy'
import Feedback from '@/components/news/Feedback'
import Videoarea from '@/components/news/Videoarea'
import Contactus from '@/components/news/Contactus'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: Newslist
    },
    {
      path: '/home/photoshar',
      component: Photoshar
    },
    {
      path: '/home/shopbuy',
      component: Shopbuy
    },
    {
      path: '/home/feedback',
      component: Feedback
    },
    {
      path: '/home/videoarea',
      component: Videoarea
    },
    {
      path: '/home/contactus',
      component: Contactus
    }
  ]
})
