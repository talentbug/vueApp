import Vue from 'vue'
import Router from 'vue-router'
// 引入四个tabbar组件
import Home from '@/components/tabbar/Home'
import Member from '@/components/tabbar/Member'
import Shopcar from '@/components/tabbar/Shopcar'
import Search from '@/components/tabbar/Search'
// 引入新闻资讯组件
import Newslist from '@/components/news/Newslist'
import Newsinfo from '@/components/news/Newsinfo'
// 引入照片分享组件
import Photoshar from '@/components/photo/Photoshar'
import Photoinfo from '@/components/photo/Photoinfo'
// 引入商品购买组件
import Shopbuy from '@/components/shop/Shopbuy'
import Shopinfo from '@/components/shop/Shopinfo'
// 引入留言反馈组件
import Feedback from '@/components/feed/Feedback'
// 引入视频专区组件
import Videoarea from '@/components/video/Videoarea'
// 引入联系我们组件
import Contactus from '@/components/contact/Contactus'


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
      path: '/home/newslist/:id',
      component: Newsinfo
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
      path: '/home/photoinfo/:id',
      component: Photoinfo
    },
    {
      path: '/home/shopbuy',
      component: Shopbuy
    },
    {
      path: '/home/shopinfo/:id',
      component: Shopinfo
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
