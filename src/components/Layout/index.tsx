import React, {FunctionComponent, ReactChildren} from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Cpn:FunctionComponent = (props) => {
  return (
    <React.Fragment>
      <Header/>
      {props.children as ReactChildren}
      <Footer/>
    </React.Fragment>
  );
};

export default Cpn;
