import React, {FunctionComponent} from 'react';

const Item:FunctionComponent = (props) => {
  return (
    <div pt={1} className={classes.item}>
      <Typography>{props.children}</Typography>
    </div>
  );
};

const Cpn = () => {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="subtitle1" color="textSecondary">最近更新</Typography>
        <Box py={1}>
          <Divider/>
        </Box>
        <Item>类型的逆变与协变</Item>
        <Item>Webpack高级配置</Item>
        <Item>NodeJs事件循环</Item>
        <Item>ReactHooks深度学习</Item>
        <Item>基础遍历—运行相关</Item>
        <Item>基础遍历—数据结构算法</Item>
        <Item>Webpack原理深入</Item>
        <Item>弱类型语言优劣</Item>
        <Item>异步编程与事件循环</Item>
      </Box>
    </Paper>
  );
};

export default Cpn;
