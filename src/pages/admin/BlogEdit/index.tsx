import {AdminLayout} from '@/components';
import React, {useState, useContext, useEffect, useCallback, useMemo} from 'react';
import {Form, Input, Select, Button} from 'antd';
import {MdEditor} from '@cpn';

const Page = () => {
  const [form] = Form.useForm();
  const submit = () => {
    form.validateFields().then((data)=>{
      console.log(data);
    });
  };
  return (
    <AdminLayout>
      <Form layout="vertical" form={form}>
        <Form.Item
          label="标题"
          name="title"
          rules={[{required: true, message: '请输入博客标题'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="描述"
          name="desc"
          rules={[{required: true, message: '请输入博客描述'}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="所属分类"
          name="type"
        >
          <Select />
        </Form.Item>
        <Form.Item
          label="正文"
          name="content"
        >
          <MdEditor/>
        </Form.Item>
        <Form.Item
          label=""
        >
          <Button type="primary" onClick={submit}>提交</Button>
        </Form.Item>
      </Form>
    </AdminLayout>
  );
};

export default Page;
