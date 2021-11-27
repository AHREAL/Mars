import axios, {AxiosRequestConfig} from 'axios';
import {message} from 'antd';
import {API_HOST} from '../config';

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const request = (url:string, method:TMethod, arg = {}, opt?: AxiosRequestConfig) => {
  const token = window.localStorage.getItem('_');
  return new Promise<{data:any, code:0|-1, msg:string}>((resolve, reject)=>{
    axios({
      baseURL: API_HOST,
      method,
      url,
      headers: {
        Authorization: token,
      },
      data: method !== 'GET' ? {...arg} : {},
      params: method == 'GET' ? {...arg} : {},
      ...opt,
    }).then((res)=>{
      resolve(res.data);
    }).catch((err)=>{
      const code = err.response.status;
      switch (code) {
        case 403:
          message.error('登录过期');
          setTimeout(()=>{
            window.location.href = '/admin/login';
          }, 1000);
          break;
        default:
          message.error('请求发生错误');
          break;
      }
      console.error(err);
      reject(err);
    });
  });
};

const get = (url:string, params?:any, opt?:AxiosRequestConfig) => {
  return request(url, 'GET', params, opt);
};

const post = (url:string, data?:any, opt?:AxiosRequestConfig) => {
  return request(url, 'POST', data, opt);
};

const put = (url:string, data?:any, opt?:AxiosRequestConfig) => {
  return request(url, 'PUT', data, opt);
};

const del = (url:string, data?:any, opt?:AxiosRequestConfig) => {
  return request(url, 'DELETE', data, opt);
};

export {
  get,
  post,
  put,
  del,
};
