import {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {Admin, Front} from '@router/map';

const hook = () => {
  const RouteMatch = useRouteMatch('/admin');
  const [navs, setNavs] = useState(Front);
  useEffect(()=>{
    if (RouteMatch) {
      setNavs(Admin);
    } else {
      setNavs(Front);
    }
  }, [RouteMatch]);
  return {
    navs,
  };
};

export default hook;
