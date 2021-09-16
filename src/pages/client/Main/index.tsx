import React from 'react';
import {BlogCard} from '@cpn';


const Page = () => {
  return (
    <div>
      <div>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i)=><BlogCard key={i}/>)
        }
      </div>
    </div>
  );
};

export default Page;
