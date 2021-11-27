import React, {useState, useEffect, useMemo, SyntheticEvent, useRef} from 'react';
import {Blog, Layout} from '@cpn';
import {Container, Pagination} from 'semantic-ui-react';
import {IBlog} from '@/types';
import {clientBlogList} from '@/api';
import {useFadeIn} from '@/hooks';


const Page = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const contentRef = useRef(null);
  const [count, setCount] = useState(0);
  const totalPages = useMemo(() => Math.ceil(count/15), [count]);
  const [blogListFadeIn, replay] = useFadeIn(2000);
  const fetchData = () => {
    clientBlogList({pageIndex, pageSize: 15}).then((res)=>{
      setBlogs(res.data.data);
      setCount(res.data.count);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      replay();
    });
  };

  const onPageChange = (e:SyntheticEvent, data:any) => {
    setPageIndex(data.activePage);
  };

  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  useEffect(() => {
    document.title = `Allen's notebook`;
  }, []);

  return (
    <Layout>
      <Container>
        <div className={`flex flex-col items-center ${blogListFadeIn}`} ref={contentRef}>
          {
            blogs.map((i)=><Blog key={i._id} card blog={i}/>)
          }
          {
            totalPages > 1 ? (
              <Pagination
                pointing
                secondary
                firstItem={null}
                lastItem={null}
                defaultActivePage={1}
                onPageChange={onPageChange}
                totalPages={totalPages}/>
            ) : null
          }

        </div>
      </Container>
    </Layout>
  );
};

export default Page;
