import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
import {Front} from '@router/map';
import {Loading} from '@cpn';

const Router = () => {
  return (
    <Suspense fallback={<Loading/>}>
      {
        Front.map((i)=>(
          <Route key={i.path} path={i.path} exact component={i.component}/>
        ))
      }
    </Suspense>
  );
};


export default Router;
