import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';
import {Layout} from '@cpn';
import Router from './Router';

const App = () => (
  <BrowserRouter>
    <CssBaseline/>
    <Layout>
      <Router/>
    </Layout>
  </BrowserRouter>
);

export default App;
