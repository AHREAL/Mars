import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main} from '@page';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main/>
      </Route>
    </Switch>
  );
};

export default Router;
