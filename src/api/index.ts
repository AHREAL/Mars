import {get, post, put, del} from './http';

// 登录
interface ILogin {
  password:string
}
export const login = (arg:ILogin) => post('/api/admin/login', arg);

// 博客列表
interface IBlogList {
  pageSize:number
  pageIndex:number
}
export const blogList = (arg:IBlogList) => post('/api/admin/blog', arg);

// 博客详情
interface IBlogDetail {
  id:string
}
export const blogDetail = (arg:IBlogDetail) => get(`/api/admin/blog/${arg.id}`);


// 创建博客
interface IBlogCreate {
  title:string
  desc:string
  content:string
  type:string[]
}
export const blogCreate = (arg: IBlogCreate) => post('/api/admin/blog', arg);

// 删除博客
interface IBlogDelete {
  id:string
}
export const blogDelete = (arg: IBlogDelete) => del('/api/admin/blog', arg);

// 更新博客
interface IBlogUpdate{
  id:string
  title:string
  desc:string
  content:string
  type:string[]
}
export const blogUpdate = (arg: IBlogUpdate) => put('/api/admin/blog', arg);


// 类别列表
interface ITypeList {
  pageSize:number
  pageIndex:number
}
export const typeList = (arg:ITypeList) => post('/api/admin/type', arg);

// 类别详情
interface ITypeDetail {
  id:string
}
export const typeDetail = (arg:ITypeDetail) => get(`/api/admin/type/${arg.id}`);


// 创建类别
interface ITypeCreate {
  title:string
}
export const typeCreate = (arg: ITypeCreate) => post('/api/admin/type', arg);

// 删除类别
interface ITypeDelete {
  id:string
}
export const typeDelete = (arg: ITypeDelete) => del('/api/admin/type', arg);

// 更新类别
interface ITypeUpdate{
  id:string
  title:string
}
export const typeUpdate = (arg: ITypeUpdate) => put('/api/admin/type', arg);


