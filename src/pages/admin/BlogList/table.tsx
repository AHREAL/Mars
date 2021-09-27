import React, {useState, useContext, useEffect, useCallback, useMemo} from 'react';
import {Table, Tag, Space, Button} from 'antd';
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
    title: 'Action',
    key: 'action',
    render: (text, record:IBlog) => (
      <Space size="middle">
        <Button danger>删除</Button>
      </Space>
    ),
  },
];

const data = [
  {
    id: '1',
    title: 'react',
    desc: 'react指南',
    content: 'react指南',
    type: [],
    createTime: 123,
    updateTime: 123,
  },
  {
    id: '2',
    title: 'vue',
    desc: 'vue指南',
    content: 'vue指南',
    type: [],
    createTime: 123,
    updateTime: 123,
  },
];

export default <Table columns={columns} dataSource={data} />;
