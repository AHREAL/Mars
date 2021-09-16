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
    component: React.lazy(()=>import('@page/client/Main')),
  },
  // {
  //   name: '归档',
  //   path: '/archive',
  //   component: React.lazy(()=>import('@page/client/Archive')),
  // },
  // {
  //   name: '博客',
  //   path: '/blog/:id',
  //   component: React.lazy(()=>import('@page/client/Blog')),
  //   hideNav: true,
  // },
];

const Admin:Routes = [
  // {
  //   name: '登录',
  //   path: '/admin',
  //   component: React.lazy(()=>import('@page/admin/Login')),
  //   hideNav: true,
  // },
  // {
  //   name: '博客',
  //   path: '/admin/blog-list',
  //   component: React.lazy(()=>import('@page/admin/BlogList')),
  // },
  // {
  //   name: '博客编辑',
  //   path: '/admin/blog-edit',
  //   component: React.lazy(()=>import('@page/admin/BlogEdit')),
  // },
];

export {
  Admin,
  Front,
};
