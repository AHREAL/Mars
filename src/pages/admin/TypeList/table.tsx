import React, {FC} from 'react';
import {Table, Space, Button, TablePaginationConfig} from 'antd';
import {IType} from '@/types';
import moment from 'moment';


interface IProps {
  dataSource:IType[]
  loading:boolean
  onEdit:(record:IType)=>void
  onDelete:(record:IType)=>void
  pagination:TablePaginationConfig
}

const Cpn: FC<IProps> = ({dataSource, loading, onEdit, onDelete, pagination}) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: '标题',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '创建时间',
      dataIndex: 'created',
      key: 'created',
      render: (text:string)=>moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '更新时间',
      dataIndex: 'updated',
      key: 'updated',
      render: (text:string)=>moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record:IType) => (
        <Space size="middle">
          <Button onClick={()=>onEdit(record)}>编辑</Button>
          <Button danger onClick={()=>onDelete(record)}>删除</Button>
        </Space>
      ),
    },
  ];

  return <Table rowKey="_id" columns={columns} dataSource={dataSource} loading={loading} pagination={pagination}/>;
};

export default Cpn;
