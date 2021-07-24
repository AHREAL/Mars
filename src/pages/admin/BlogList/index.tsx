import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  action: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Page = () => {
  const classe = useStyles();
  return (
    <Paper>
      <Box p={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>标题</TableCell>
                <TableCell>分类</TableCell>
                <TableCell>创建时间</TableCell>
                <TableCell>更新时间</TableCell>
                <TableCell>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>3834123</TableCell>
                <TableCell>React性能优化</TableCell>
                <TableCell>React</TableCell>
                <TableCell>2020/12/08 23:30:20</TableCell>
                <TableCell>2020/12/08 23:30:20</TableCell>
                <TableCell className={classe.action}>
                  <Button size="small" variant="outlined" color="primary">查看</Button>
                  <Button size="small" variant="outlined" color="secondary">删除</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default Page;
