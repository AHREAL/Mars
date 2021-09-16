import React, {FunctionComponent, ReactChildren} from 'react';
import Header from '../Header';

const Cpn:FunctionComponent = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <div>
        <div>
          {props.children as ReactChildren}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cpn;
