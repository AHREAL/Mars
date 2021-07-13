import React, {useState} from 'react';
import {Card, CardActions, CardContent, Button, makeStyles, Box, Typography, TextField} from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
  },
});

const Page = () => {
  const classes = useStyle();
  const [password, setPassword] = useState('');
  const login = () => {
    console.log(password);
  };
  return (
    <Box className={classes.root} pt={4}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" align="center">ADMIN</Typography>
          <Box mt={2}>
            <TextField type="password" value={password} onChange={(e)=>setPassword(e.target.value)} fullWidth label="密码" variant="outlined" size="small"/>
          </Box>
        </CardContent>
        <CardActions className={classes.root}>
          <Button variant="contained" color="primary" onClick={login}>登录</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Page;
