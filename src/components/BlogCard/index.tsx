import React from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Typography, Paper, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
  wrap: {
    cursor: 'pointer',
  },
});

const Cpn = () => {
  const classes = useStyle();
  const history = useHistory();
  const toBlogPage = () => {
    history.push('/blog/1');
  };
  return (
    <Box mb={2} className={classes.wrap} onClick={toBlogPage}>
      <Paper>
        <Box p={3}>
          <Typography variant="h6">类型的逆变与协变</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            2021年6月1日 | TypeScript
          </Typography>
          <Box pt={1}>
            <Typography variant="body1">
              子类型 在编程理论上是一个复杂的话题，而他的复杂之处来自于一对经常会被混淆的现象，我们称之为协变与逆变。这篇文章将会解释上述两个概念。开始文章之前我们先约定如下的标记：- A ≼ B 意味着 A 是 B 的子类型。- A → B 指的是以 A 为参数类型，以 B 为返回值类型的函数类型。- x : A 意味着 x 的类型为 A。……
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Cpn;
