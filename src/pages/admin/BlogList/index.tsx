import React, {useState, useEffect} from 'react';
import {AdminLayout} from '@/components';
import {blogDelete, blogList} from '@/api';
import {IBlog} from '@/types';
import {Divider, Button, message} from 'antd';
import {useHistory} from 'react-router';
import Table from './table';

const pageSize = 15;

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [filterType, setFilterType] = useState<string[]>([]);
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<IBlog[]>([]);
  const fetchData = () => {
    setLoading(true);
    blogList({pageIndex: pageIndex, pageSize, type: filterType}).then((res)=>{
      setLoading(false);
      setData(res.data.data);
      setTotal(res.data.count);
    });
  };
  const handleDelete = (record:IBlog) => {
    blogDelete({id: record._id}).then((res)=>{
      message.success('操作成功');
      fetchData();
    });
  };
  const handleCreate = () => {
    history.push('/admin/blog-create');
  };
  const handleDetail = (record:IBlog) => {
    history.push(`/admin/blog-edit/${record._id}`);
  };
  const onTableChange = (pagination:any, filter:any) => {
    if (!filter.type) filter.type = [];
    setPageIndex(pagination.current);
    filter.type && setFilterType(filter.type);
    if (JSON.stringify(filterType) != JSON.stringify(filter.type)) {
      setPageIndex(1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageIndex, filterType]);

  return (
    <AdminLayout>
      <Button onClick={handleCreate}>新建博客</Button>
      <Divider/>
      <Table dataSource={data} onChange={onTableChange} loading={loading} pagination={{pageSize, current: pageIndex, total: total}} onDelete={(record)=>handleDelete(record)} onDetail={(record)=>handleDetail(record)}/>
    </AdminLayout>
  );
};

export default Page;
