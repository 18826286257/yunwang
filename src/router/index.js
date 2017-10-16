import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import fenlei from '@/components/fenlei'
import faxian from '@/components/faxian'
import gouwuche from '@/components/gouwuche'
import wode from '@/components/wode'

import diany from '@/components/diany'
import dians from '@/components/dians'
import zongy from '@/components/zongy'
import dongm from '@/components/dongm'
import xinw from '@/components/xinw'

import dingd from '@/components/dingd'
import chaxun from '@/components/chaxun'
import sousuo from '@/components/sousuo'
import zhifu from '@/components/zhifu'
import pigai from '@/components/pigai'
import caip from '@/components/caip'
import dianzishu from '@/components/dianzishu'

import didian from '@/components/didian'
import shoucang from '@/components/shoucang'
import shijuan from '@/components/shijuan'
import lianxi from '@/components/lianxi'
import shezhi from '@/components/shezhi'

import ziliao from '@/components/ziliao'
import zhentijuan from '@/components/zhentijuan'
import dianzi from '@/components/dianzi'
import kaoyou from '@/components/kaoyou'
import meiri from '@/components/meiri'

import Tell from '@/components/tell'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Tell',
      component: Tell,
      children: [
      {
        path: '',
        component: shouye
      },
      {
      path: '',
      component: wode, 
      },
      {
        path: '/didian',
        component: didian
      }, 
      {
          path: '/sousuo',
          component: sousuo,
        },
        {
          path: '/ziliao',
          component: ziliao, 
        },
        {
          path: '/zhentijuan',
          component: zhentijuan,
        },
        {
          path: '/dianzi',
          component:dianzi,
        },
        {
          path: '/kaoyou',
          component: kaoyou,
        },
        {
          path: '/meiri',
          component: meiri,
        },
        {
          path: '/dingd',
          component:dingd,
        },
        {
          path: '/chaxun',
          component: chaxun,
        },
        {
          path: '/dianzishu',
          component: dianzishu,
        },
        {
          path: '/zhifu',
          component: zhifu,
        },
        {
          path: '/pigai',
          component: pigai,
        },
        {
          path: '/caip',
          component: caip,
        },
        {
          path: '/shoucang',
          component: shoucang,
        },
        {
          path: '/shijuan',
          component: shijuan,
        },
        {
          path: '/lianxi',
          component: lianxi,
        },
        {
          path: '/shezhi',
          component: shezhi,
        },
     ]
    },

    {
      path: '/',
      name: 'shouye',
      redirect: shouye,
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye,
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei,
    },
    {
      path: '/faxian',
      name: 'faxian',
      component: faxian
    },
    {
      path: '/gouwuche',
      name: 'gouwuche',
      component: gouwuche,
      children: [
        {
          path: '/',
          name:'diany',
          component:diany
        },
        {
          path: '/diany',
          name:'diany',
          component:diany
        },
        {
          path: '/dians',
          component: dians
        },
        {
          path: '/zongy',
          component: zongy
        },
        {
          path: '/dongm',
          component: dongm
        },
        {
          path: '/xinw',
          component: xinw
        },
      ]
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
  ]
})
