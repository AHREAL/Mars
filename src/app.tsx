import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ClientRouter from '@router/client';
import AdminRouter from '@router/admin';
import 'semantic-ui-css/semantic.min.css';
import 'tailwindcss/tailwind.css';

const App = () => (
  <BrowserRouter>
    <ClientRouter/>
    <AdminRouter/>
  </BrowserRouter>
);

export default App;
