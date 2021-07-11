import React, {LazyExoticComponent} from 'react';

interface Route {
  name:string,
  path:string,
  component:LazyExoticComponent<any>,
  hideNav?:Boolean
}

type Routes = Route[]

const Front:Routes = [
  {
    name: '首页',
    path: '/',
    component: React.lazy(()=>import('@page/front/Main')),
  },
  {
    name: '归档',
    path: '/archive',
    component: React.lazy(()=>import('@page/front/Archive')),
  },
  {
    name: '帖子',
    path: '/blog/:id',
    component: React.lazy(()=>import('@page/front/Blog')),
    hideNav: true,
  },
];

const Admin:Routes = [
  {
    name: '登录',
    path: '/admin/login',
    component: React.lazy(()=>import('@page/admin/Login')),
    hideNav: true,
  },
];

export {
  Admin,
  Front,
};
