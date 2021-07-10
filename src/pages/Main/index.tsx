import React from 'react';
import {BlogCard, TypeModule, LatelyModule} from '@cpn';
import {Box, Grid} from '@material-ui/core';


const Page = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i)=><BlogCard key={i}/>)
          }
        </Grid>
        <Grid item md={3}>
          <TypeModule/>
          <Box mt={2}/>
          <LatelyModule/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
