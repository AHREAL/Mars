import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
import {Admin} from '@router/map';
import {Loading} from '@cpn';
import 'antd/dist/antd.css';

const Router = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Route path="/admin">
        {
          Admin.map((i)=>(
            <Route key={i.path} path={i.path} exact component={i.component}/>
          ))
        }
      </Route>
    </Suspense>
  );
};

export default Router;
