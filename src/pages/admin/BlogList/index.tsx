import React, {useState, useContext, useEffect, useCallback, useMemo} from 'react';
import {blogList} from '@/api';
import {AdminLayout} from '@/components';
import {IBlog} from '@/types';
import Table from './table';

const Page = () => {
  const [dataSource, setDataSource] = useState<IBlog[]>([]);
  const [pageIndex, setPageIndex] = useState(1);

  const fetchData = () => {
    blogList({pageIndex, pageSize: 10}).then((res)=>{
      console.log(res);
    });
  };

  return (
    <AdminLayout>
      <Table dataSource={dataSource}/>
    </AdminLayout>
  );
};

export default Page;
