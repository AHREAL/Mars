export interface IBlog {
  title:string
  desc:string
  _id:string
  content:string
  type:string[]
  typeInfo:ITypeInfoItem[]
  created:number
  updated:number
}

export interface ITypeInfoItem {
  id:string
  name:string
};

export interface IType {
  name:string
  _id:string
}

export interface IBlogHeader {
  id:string
  level:number
}

