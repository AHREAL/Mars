import React, {LazyExoticComponent} from 'react';
import {SemanticICONS} from 'semantic-ui-react';

interface Route {
  name:string,
  path:string,
  component:LazyExoticComponent<any>,
  hideNav?:Boolean,
  icon?:SemanticICONS
}

type Routes = Route[]

const Front:Routes = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
    component: React.lazy(()=>import('@page/client/Main')),
  },
  // {
  //   name: '归档',
  //   path: '/archive',
  //   component: React.lazy(()=>import('@page/client/Archive')),
  // },
  {
    name: '博客',
    path: '/blog/:id',
    component: React.lazy(()=>import('@page/client/Blog')),
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
  {
    name: '首页',
    path: '/admin',
    component: React.lazy(()=>import('@page/admin/Home')),
  },
  {
    name: '博客',
    path: '/admin/blog-list',
    component: React.lazy(()=>import('@page/admin/BlogList')),
  },
  {
    name: '分类',
    path: '/admin/type-list',
    component: React.lazy(()=>import('@/pages/admin/TypeList')),
  },
  {
    name: '博客编辑',
    path: '/admin/blog-edit/:id',
    component: React.lazy(()=>import('@page/admin/BlogEdit')),
    hideNav: true,
  },
  {
    name: '博客创建',
    path: '/admin/blog-create',
    component: React.lazy(()=>import('@page/admin/BlogEdit')),
    hideNav: true,
  },
];

export {
  Admin,
  Front,
};
