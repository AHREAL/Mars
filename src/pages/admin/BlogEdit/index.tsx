import React from 'react';
import {Paper, Box, TextField, MenuItem} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';
import {MdEditor} from '@cpn';


const Page = () => {
  const {handleSubmit, control, reset} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Paper>
      <Box p={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Controller
              name="title"
              control={control}
              defaultValue={''}
              rules={{required: true}}
              render={({field}) =>{
                return <TextField label="标题" fullWidth {...field}/>;
              }}
            />
          </Box>
          <Box mt={2}>
            <Controller
              name="type"
              control={control}
              rules={{required: true}}
              defaultValue=""
              render={({field}) =>{
                return (<TextField select label="类型" fullWidth {...field}>
                  <MenuItem value='1'>
                  React
                  </MenuItem>
                  <MenuItem value='2'>
                  Vue
                  </MenuItem>
                  <MenuItem value='3'>
                  Typescript
                  </MenuItem>
                </TextField>);
              }}
            />
          </Box>
          <Box mt={4}>
            <Controller
              name="type"
              control={control}
              rules={{required: true}}
              defaultValue=""
              render={({field}) =>{
                return <MdEditor {...field}/>;
              }}
            />
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default Page;
