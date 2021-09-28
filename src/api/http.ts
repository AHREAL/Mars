import axios, {AxiosRequestConfig} from 'axios';
import {message} from 'antd';
import {API_HOST} from '../config';

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const request = (url:string, method:TMethod, arg = {}, opt: AxiosRequestConfig) => {
  return new Promise((resolve, reject)=>{
    axios({
      baseURL: API_HOST,
      method,
      url,
      data: method !== 'GET' ? {...arg} : {},
      params: method == 'GET' ? {...arg} : {},
      ...opt,
    }).then((res)=>{
      const {respDesc, respCode} = res.data;
      switch (respCode) {
        case '0000':
          resolve(res.data);
          break;
        default:
          message.info(respDesc);
          break;
      }
    }).catch((err)=>{
      message.error('请求发生错误，请联系客服');
      reject(err);
    });
  });
};

const get = (url:string, params:any, opt:AxiosRequestConfig) => {
  return request(url, 'GET', params, opt);
};

const post = (url:string, data:any, opt:AxiosRequestConfig) => {
  return request(url, 'POST', data, opt);
};

const put = (url:string, data:any, opt:AxiosRequestConfig) => {
  return request(url, 'PUT', data, opt);
};

const del = (url:string, data:any, opt:AxiosRequestConfig) => {
  return request(url, 'DELETE', data, opt);
};

export {
  get,
  post,
  put,
  del,
};
