import React, {useState, useCallback, useLayoutEffect, useEffect} from 'react';
import {Container, Sidebar, Segment, Icon, Menu} from 'semantic-ui-react';
import {Blog, Layout} from '@/components';
import {useFadeIn, useMarkdown2Html} from '@/hooks';
import {IBlog, IBlogHeader} from '@/types';
import {clientBlogDetail} from '@/api';
import {useParams} from 'react-router';

interface IHeaderScroll {
  offsetTop?: number,
  dom?: HTMLElement | null,
  id: string,
}

const Page = () => {
  const {id} = useParams<{id:string}>();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const {html, headers} = useMarkdown2Html({content: blog?.content || ''});
  const [headerScroll, setHeaderScroll] = useState<IHeaderScroll[]>([]);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState('');
  const [fadeIn] = useFadeIn(2000);

  const handleScroll = useCallback(
      () => {
        if (!visible) return;
        const curScrollTop = document.documentElement.scrollTop;
        const header = headerScroll.find((i)=>((i.offsetTop || 0) + 50) >= curScrollTop) || headerScroll[headerScroll.length-1];
        setActiveIndex(header?.id);
      },
      [visible, headerScroll],
  );
  const onItemClick = (item:IBlogHeader) => {
    setActiveIndex(item.id);
  };
  const fetchData = () => {
    clientBlogDetail({id}).then((res)=>{
      setBlog(res.data);
      document.title = `${res.data.title} | Allen's notebook`;
    });
  };

  useLayoutEffect(() => {
    handleScroll();
    document.body.onscroll = handleScroll;
    return () => {
      document.body.onscroll = null;
    };
  }, [visible, headerScroll]);

  useLayoutEffect(() => {
    const _headerScrollTop = headers.map((i)=>{
      const headerDom = document.getElementById(i.id);
      return {
        offsetTop: headerDom?.offsetTop,
        dom: headerDom,
        id: i.id,
      };
    });
    setHeaderScroll(_headerScrollTop);
  }, [headers]);

  useEffect(() => {
    fetchData();
    setTimeout(()=>{
      setVisible(true);
    }, 3000);
  }, []);
  return (
    <React.Fragment>
      <Sidebar.Pushable as={Segment} className="transform-none min-h-screen">
        <div>
          <Sidebar as={Menu} vertical fixed="right" visible={visible} direction="right" className="z-3" animation="overlay">
            {
              headers.map((i)=>(
                <Menu.Item href={'#' + i.id} active={activeIndex == i.id} key={i.id} className="text-base" onClick={()=>onItemClick(i)}>{i.id}</Menu.Item>
              ))
            }
          </Sidebar>
          <Sidebar.Pusher>
            <Layout>
              <Container className={fadeIn} text>
                <Blog blog={{...blog, content: html}}/>
              </Container>
            </Layout>
          </Sidebar.Pusher>
        </div>
      </Sidebar.Pushable>
      {
        headers.length ? <div className="fixed bottom-10 right-10 z-3" onClick={()=>setVisible(!visible)}><Icon color="blue" name={visible ? 'close' :'list'}/></div> : null
      }

    </React.Fragment>
  );
};

export default Page;
