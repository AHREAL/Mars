import React, {FunctionComponent} from 'react';
import {Box, Divider, makeStyles, Paper, Typography} from '@material-ui/core';

const useStyle = makeStyles({
  item: {
    'cursor': 'pointer',
    '&:hover': {
      color: 'primary.main',
    },
  },
});

const Item:FunctionComponent = (props) => {
  const classes = useStyle();
  return (
    <Box pt={1} className={classes.item}>
      <Typography>{props.children}</Typography>
    </Box>
  );
};

const Cpn = () => {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="subtitle1" color="textSecondary">分类</Typography>
        <Box py={1}>
          <Divider/>
        </Box>
        <Item>HTML5（20）</Item>
        <Item>CSS3（15）</Item>
        <Item>JavaScript（30）</Item>
        <Item>React（39）</Item>
        <Item>Vue（5）</Item>
        <Item>IM（11）</Item>
        <Item>ShareOT（2）</Item>
      </Box>
    </Paper>
  );
};

export default Cpn;
