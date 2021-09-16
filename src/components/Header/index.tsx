import React, {FunctionComponent} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {useNav} from '@/hooks';

const Link:FunctionComponent<{to:string}> = (props) => {
  const {to, children} = props;
  return (
    <span>
      <NavLink to={to} exact>
        {children}
      </NavLink>
    </span>
  );
};

const Cpn = () => {
  const history = useHistory();
  const {navs} = useNav();
  const toMainPage = () =>{
    history.push('/');
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <div onClick={toMainPage}>
              <h4> Allen 🚬 | 深圳 </h4>
              <h5>即时通讯、音视频、Web前端开发</h5>
            </div>
            <div>
              {
                navs.filter((i)=>!i.hideNav).map((i)=>(
                  <Link to={i.path} key={i.path}>{i.name}</Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cpn;
