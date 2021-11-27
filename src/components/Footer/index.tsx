import {useFadeIn} from '@/hooks';
import React from 'react';
import {Container} from 'semantic-ui-react';


const Cpn = () => {
  const [fadeIn] = useFadeIn(3000);
  return (
    <Container className="py-24">
      <div className={`flex justify-center text-gray-500 text-xs ${fadeIn}`}>
       © 2020 Create by Allen
      </div>
    </Container>
  );
};

export default Cpn;
