import React from 'react';
import {useHistory} from 'react-router-dom';


const Cpn = () => {
  const history = useHistory();
  const toBlogPage = () => {
    history.push('/blog/1');
  };
  return (
    <div onClick={toBlogPage}>
        我是帖子卡片
    </div>
  );
};

export default Cpn;
