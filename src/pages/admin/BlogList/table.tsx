import React, {FC} from 'react';
import {Table, Space, Button} from 'antd';
import {IBlog} from '@/types';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record:IBlog) => (
      <Space size="middle">
        <Button danger>删除</Button>
      </Space>
    ),
  },
];

interface IProps {
  dataSource:IBlog[]
}

const Cpn: FC<IProps> = ({dataSource}) => {
  return <Table columns={columns} dataSource={dataSource} />;
};

export default Cpn;
