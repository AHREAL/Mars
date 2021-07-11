import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main, Blog} from '@page';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main/>
      </Route>
      <Route path="/blog/:id" exact>
        <Blog/>
      </Route>
    </Switch>
  );
};

export default Router;
