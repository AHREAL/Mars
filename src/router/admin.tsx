import React, {Suspense} from 'react';
import {ConfigProvider} from 'antd';
import {Route} from 'react-router-dom';
import {Admin} from '@router/map';
import {Loading} from '@cpn';
import zhCN from 'antd/lib/locale/zh_CN';
import '../style/admin.css';

const Router = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <ConfigProvider locale={zhCN}>
        <Route path="/admin">
          {
            Admin.map((i)=>(
              <Route key={i.path} path={i.path} exact component={i.component}/>
            ))
          }
        </Route>
      </ConfigProvider>
    </Suspense>
  );
};

export default Router;
