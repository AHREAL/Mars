import React from 'react';
import {Box, makeStyles, Paper, Typography} from '@material-ui/core';
import {FiberManualRecord} from '@material-ui/icons';

const useStyle = makeStyles({
  blogItem: {
    cursor: 'pointer',
  },
});

const BlogItem = () => {
  const classes = useStyle();
  return (
    <Box pt={1} pl={1} className={classes.blogItem}>
      <FiberManualRecord style={{fontSize: 8}}/>
      <Box component="span" ml={1}>2021/06/22</Box>
      <Box component="span" ml={1}>类型的逆变与协变</Box>
    </Box>
  );
};

const Group = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h6">2020</Typography>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
      </Box>
    </Box>
  );
};

const Page = () => {
  return (
    <Paper>
      <Box p={3}>
        <Group/>
      </Box>
    </Paper>
  );
};

export default Page;
