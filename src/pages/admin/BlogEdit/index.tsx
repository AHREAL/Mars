import {AdminLayout} from '@/components';
import React, {useState, useEffect} from 'react';
import {Form, Input, Button, message, Spin, Modal} from 'antd';
import {MdEditor, TypeSelect} from '@cpn';
import {useHistory, useParams} from 'react-router';
import {blogCreate, blogDetail, blogUpdate} from '@/api';

const Page = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const {id} = useParams<{id:string}>();
  const [loading, setLoading] = useState(false);
  const submit = () => {
    form.validateFields().then(async (data)=>{
      if (id) {
        Modal.confirm({
          title: '提示信息',
          content: '操作立即生效，是否继续？',
          onOk: async ()=>{
            await blogUpdate({id, ...data});
            message.success('更新成功');
          },
        });
      } else {
        const res = await blogCreate(data);
        history.push(`/admin/blog-edit/${res.data._id}`);
        message.success('操作成功');
      }
    });
  };
  useEffect(() => {
    if (id) {
      setLoading(true);
      blogDetail({id}).then((res)=>{
        form.setFieldsValue(res.data);
        setLoading(false);
      });
    }
  }, [id]);
  return (
    <AdminLayout>
      <Spin spinning={loading}>
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
            <TypeSelect />
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
      </Spin>
    </AdminLayout>
  );
};

export default Page;
