import React, {FunctionComponent} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {Container, Icon, SemanticICONS} from 'semantic-ui-react';
import {useFadeIn, useNav} from '@/hooks';


const Link:FunctionComponent<{to:string, icon?:SemanticICONS}> = (props) => {
  const {to, children, icon} = props;
  return (
    <span>
      <NavLink to={to} exact className="flex flex-col items-center transition-all duration-300 text-gray-700">
        {
          icon ? <Icon name={icon} className="m-0"/> : null
        }
        <div className="mt-2 text-sm">
          {children}
        </div>
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
  const [titleFadeIn] = useFadeIn(500);
  const [navFadeIn] = useFadeIn(1000);
  return (
    <Container className="pt-24 pb-16">
      <div className="flex flex-col items-center justify-center">
        <div onClick={toMainPage} className="text-white text-xl bg-black px-14 inline-block py-2">
          <div className={titleFadeIn}>
           Allen | 前端开发 | 深圳
          </div>
        </div>
        <div className={`mt-8 ${navFadeIn}`}>
          {
            navs.filter((i)=>!i.hideNav).map((i)=>(
              <Link to={i.path} key={i.path} icon={i.icon}>{i.name}</Link>
            ))
          }
        </div>
      </div>
    </Container>
  );
};

export default Cpn;
