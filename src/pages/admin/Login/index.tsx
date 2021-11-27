import React, {useState} from 'react';
import {Card, Input, Button, message} from 'antd';
import {login} from '@/api';

const Page = () => {
  const [pas, setPas] = useState('');
  const submit = () => {
    if (!pas.trim()) {
      message.error('请输入密码');
    } else {
      login({password: pas}).then((res)=>{
        if (res.code == 0) {
          window.localStorage.setItem('_', res.data.token);
          message.success('登录成功');
          setTimeout(()=>{
            window.location.href = '/admin';
          }, 1000);
        } else {
          message.error(res.msg);
        }
      });
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card title="请输入密码" className="w-96" actions={[
        <Button key="ok" type="primary" onClick={submit}>确认</Button>,
      ]}>
        <Input type="password" value={pas} onChange={(e)=>setPas(e.target.value)}/>
      </Card>
    </div>
  );
};

export default Page;
