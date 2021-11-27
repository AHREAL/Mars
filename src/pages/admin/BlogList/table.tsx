import React, {useState, useEffect} from 'react';
import {Table, Space, Button, TablePaginationConfig} from 'antd';
import {IBlog, ITypeInfoItem} from '@/types';
import moment from 'moment';
import {typeList} from '@/api';


interface IProps {
  dataSource:IBlog[]
  loading:boolean
  pagination:TablePaginationConfig
  onDetail:(record:IBlog)=>void
  onDelete:(record:IBlog)=>void
  onChange:any
}

const Cpn: React.FC<IProps> = ({dataSource, loading, pagination, onDetail, onDelete, onChange}) => {
  const [type, setType] = useState([]);
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '分类',
      dataIndex: 'typeInfo',
      key: 'type',
      filters: type.map((i)=>({text: i.name, value: i._id})),
      render: (text:ITypeInfoItem[])=>{
        return text.map((i)=>i.name).join(',');
      },
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
      render: (_, record:IBlog) => (
        <Space size="middle">
          <Button onClick={()=>onDetail(record)}>查看</Button>
          <Button onClick={()=>onDelete(record)} danger>删除</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    typeList().then((res)=>{
      setType(res.data.data);
    });
  }, []);

  return <Table rowKey="_id" columns={columns} dataSource={dataSource} loading={loading} pagination={pagination} onChange={onChange}/>;
};

export default Cpn;
