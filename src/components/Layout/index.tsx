import React, {FunctionComponent, ReactChildren} from 'react';
import {Box, Container} from '@material-ui/core';
import Header from '../Header';

const Cpn:FunctionComponent = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <Container>
        <Box py={2}>
          {props.children as ReactChildren}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Cpn;
