import React, {FunctionComponent} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {Box, AppBar, Toolbar, Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useNav} from '@/hooks';

const useStyles = makeStyles({
  navActive: {
    color: '#000 !important',
    fontWeight: 'bold',
  },
  nav: {
    'textDecoration': 'none',
    'fontSize': 15,
    'color': '#202020',
  },
  main: {
    'cursor': 'pointer',
  },
});

const Link:FunctionComponent<{to:string}> = (props) => {
  const {to, children} = props;
  const classes = useStyles();
  return (
    <Box m={1} component="span">
      <NavLink to={to} className={classes.nav} activeClassName={classes.navActive} exact>
        {children}
      </NavLink>
    </Box>
  );
};

const Cpn = () => {
  const history = useHistory();
  const classes = useStyles();
  const {navs} = useNav();
  const toMainPage = () =>{
    history.push('/');
  };

  return (
    <AppBar color="inherit" position="static">
      <Container>
        <Box py={2}>
          <Toolbar disableGutters>
            <Box sx={{flexGrow: 1}} onClick={toMainPage} className={classes.main}>
              <Typography variant="h4"> Allen 🚬 | 深圳 </Typography>
              <Typography variant="subtitle1">即时通讯、音视频、Web前端开发</Typography>
            </Box>
            <Box>
              {
                navs.filter((i)=>!i.hideNav).map((i)=>(
                  <Link to={i.path} key={i.path}>{i.name}</Link>
                ))
              }
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Cpn;
