import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Admin, Front} from '@router/map';

const Router = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        {
          Front.map((i)=>(
            <Route key={i.path} path={i.path} exact component={i.component}/>
          ))
        }
        <Route path="/admin" exact>
          {
            Admin.map((i)=>(
              <Route key={i.path} path={i.path} exact component={i.component}/>
            ))
          }
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Router;
