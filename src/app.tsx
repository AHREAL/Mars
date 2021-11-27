import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Loading} from '@cpn';
import './style/common.css';

const ClientRouter = React.lazy(()=>import('@router/client'));
const AdminRouter = React.lazy(()=>import('@router/admin'));

const App = () => {
  const isAdmin = window.location.href.indexOf('admin') !== -1;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        {
          isAdmin ? <AdminRouter/> : <ClientRouter/>
        }
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
