import React from 'react';
import {Box, Paper, Table, TableContainer, TableHead, TableRow, TableCell} from '@material-ui/core';

const Page = () => {
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
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default Page;
