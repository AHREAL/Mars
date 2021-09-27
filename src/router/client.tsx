import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
import {Front} from '@router/map';

const Router = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      {
        Front.map((i)=>(
          <Route key={i.path} path={i.path} exact component={i.component}/>
        ))
      }
    </Suspense>
  );
};


export default Router;
