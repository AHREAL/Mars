import {AdminLayout} from '@/components';
import React, {useState, useContext, useEffect, useCallback, useMemo} from 'react';
import Table from './table';

const Page = () => {
  return (
    <AdminLayout>
      {Table}
    </AdminLayout>
  );
};

export default Page;
