import React from 'react';
import {Blog, Layout} from '@cpn';
import {Container, Pagination} from 'semantic-ui-react';


const Page = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col items-center">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i)=><Blog key={i} card/>)
          }
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={3}/>
        </div>
      </Container>
    </Layout>
  );
};

export default Page;
