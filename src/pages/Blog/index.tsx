import React from 'react';
import {Paper, Typography, Box, Grid} from '@material-ui/core';
import {TreeView, TreeItem} from '@material-ui/lab';
import {FiberManualRecord} from '@material-ui/icons';

const Content = () => {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6">类型的逆变与协变</Typography>
        <Typography color="textSecondary">2021年5月31日 | TypeScript</Typography>
        <Box mt={2}>
          <Typography variant="h6">
            标题A
          </Typography>
          <Typography>
            内容A内容A内容A内容A内容A内容A内容A内容A内容A内容A内容A内容A
          </Typography>
          <Typography variant="h6">
            标题B
          </Typography>
          <Typography>
            内容B内容B内容B内容B内容B内容B内容B内容B内容B内容B内容B内容B内容B内容B
          </Typography>
          <Typography variant="h6">
            标题C
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const Catalogue = () => {
  return (
    <Paper>
      <Box p={2}>
        <TreeView
          expanded={['a', 'e', 'i', 'l']}
          defaultCollapseIcon={<FiberManualRecord style={{fontSize: 8}}/>}
          defaultEndIcon={<FiberManualRecord style={{fontSize: 8}}/>}>
          <TreeItem nodeId='a' label="前言">
            <TreeItem nodeId='b' label="前言"/>
            <TreeItem nodeId='c' label="工程化"/>
          </TreeItem>
          <TreeItem nodeId='e' label="CLI工具分析">
            <TreeItem nodeId='f' label="构建"/>
            <TreeItem nodeId='g' label="质量"/>
            <TreeItem nodeId='h' label="模板"/>
            <TreeItem nodeId='i' label="ESLINT">
              <TreeItem nodeId='j' label="创建工具类"/>
              <TreeItem nodeId='k' label="工测试CLI"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId='l' label="构建模块">
            <TreeItem nodeId='m' label="配置通用Webpack"/>
            <TreeItem nodeId='n' label="解决依赖"/>
          </TreeItem>
        </TreeView>
      </Box>
    </Paper>
  );
};

const Page = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Content/>
        </Grid>
        <Grid item md={3}>
          <Catalogue/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
