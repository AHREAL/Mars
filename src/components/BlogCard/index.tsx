import {Box, Typography, Paper} from '@material-ui/core';
import React from 'react';

const Cpn = () => {
  return (
    <Box mb={2}>
      <Paper>
        <Box p={3}>
          <Typography variant="h6">类型的逆变与协变</Typography>
          <Typography variant="subtitle1">
            <Box component="span" color="text.secondary">2021年6月1日 | TypeScript</Box>
          </Typography>
          <Typography variant="body1">
            <Box pt={1} component="span">
              子类型 在编程理论上是一个复杂的话题，而他的复杂之处来自于一对经常会被混淆的现象，我们称之为协变与逆变。这篇文章将会解释上述两个概念。开始文章之前我们先约定如下的标记：- A ≼ B 意味着 A 是 B 的子类型。- A → B 指的是以 A 为参数类型，以 B 为返回值类型的函数类型。- x : A 意味着 x 的类型为 A。……
            </Box>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Cpn;
