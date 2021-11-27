import {cosCredential} from '@/api';
import COS from 'cos-js-sdk-v5';
import {CDN_DOMAIN} from '@/config';

const cos = new COS({
  getAuthorization: function(options, callback) {
    cosCredential().then((res)=>{
      callback({
        TmpSecretId: res.data.credentials.tmpSecretId,
        TmpSecretKey: res.data.credentials.tmpSecretKey,
        SecurityToken: res.data.credentials.sessionToken,
        StartTime: res.data.startTime,
        ExpiredTime: res.data.expiredTime,
      });
    });
  },
});

const upload = (file:File) => {
  return new Promise<{data:any, key:string, path:string}>((resolve, reject)=>{
    const key = '/upload/' + new Date().getTime() + '' + (Math.random() * 1000).toFixed(0) + file.name;
    cos.putObject({
      Bucket: 'sls-cloudfunction-ap-guangzhou-code-1300044145',
      Region: 'ap-guangzhou',
      Key: key,
      Body: file,
    }, function(err, data) {
      if (err) reject(err);
      resolve({data, key, path: CDN_DOMAIN+key});
    });
  });
};

export default upload;
