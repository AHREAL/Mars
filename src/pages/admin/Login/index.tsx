import React from 'react';
import {Card, Input, Button} from 'antd';

const Page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card title="请输入密码" className="w-96" actions={[
        <Button key="ok" type="primary">确认</Button>,
      ]}>
        <Input/>
      </Card>
    </div>
  );
};

export default Page;
