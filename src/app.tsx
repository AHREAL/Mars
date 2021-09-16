import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Layout} from '@cpn';
import Router from '@router';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Router/>
    </Layout>
  </BrowserRouter>
);

export default App;
