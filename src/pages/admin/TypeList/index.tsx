import React, {useState, useEffect} from 'react';
import {AdminLayout} from '@/components';
import {typeCreate, typeDelete, typeList, typeUpdate} from '@/api';
import Table from './table';
import {IType} from '@/types';
import {Divider, Button, Modal, Form, Input, message} from 'antd';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<IType[]>([]);
  const [editRecord, setEditRecord] = useState<IType|null>(null);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const fetchData = () => {
    setLoading(true);
    typeList({pageIndex: pageIndex, pageSize: 10}).then((res)=>{
      setLoading(false);
      setData(res.data.data);
      setTotal(res.data.count);
    });
  };
  const handleDelete = (record:IType) => {
    typeDelete({id: record._id}).then((res)=>{
      message.success('操作成功');
      fetchData();
    });
  };
  const onPageChange = (pageIndex:number) => {
    setPageIndex(pageIndex);
  };
  const handleUpdate = (record:IType) => {
    setVisible(true);
    setEditRecord(record);
    form.setFieldsValue(record);
  };
  const submit = () => {
    form.validateFields().then(async (data)=>{
      setConfirmLoading(true);
      if (editRecord?._id) {
        await typeUpdate({
          id: editRecord._id,
          ...editRecord,
          ...data,
        });
      } else {
        await typeCreate(data);
      }
      setConfirmLoading(false);
      message.success('操作成功');
      setVisible(false);
      fetchData();
    });
  };

  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  useEffect(() => {
    if (!visible) {
      form.resetFields();
      setEditRecord(null);
    }
  }, [visible]);
  return (
    <AdminLayout>
      <Button onClick={()=>setVisible(true)}>创建分类</Button>
      <Divider/>
      <Table dataSource={data} loading={loading} onEdit={(record)=>handleUpdate(record)} onDelete={(record)=>handleDelete(record)} pagination={{pageSize: 10, current: pageIndex, total: total, onChange: onPageChange}}/>
      <Modal title={editRecord?._id ? '编辑分类' :'新建分类'} onCancel={()=>setVisible(false)} onOk={submit} visible={visible} confirmLoading={confirmLoading}>
        <Form form={form}>
          <Form.Item name="name" label="名称" rules={[{required: true}]}>
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
    </AdminLayout>
  );
};

export default Page;
