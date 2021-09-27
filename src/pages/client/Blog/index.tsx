import React, {useState, useCallback, useLayoutEffect} from 'react';
import {Container, Sidebar, Segment, Icon, Menu} from 'semantic-ui-react';
import {Blog, Layout} from '@/components';
import {useMarkdown2Html} from '@/hooks';
import data from './data';
import {IBlogHeader} from '@/types';

interface IHeaderScroll {
  offsetTop?: number,
  dom?: HTMLElement | null,
  id: string,
}

const Page = () => {
  const {html, headers} = useMarkdown2Html({content: data});
  const [headerScroll, setHeaderScroll] = useState<IHeaderScroll[]>([]);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState('');

  const handleScroll = useCallback(
      () => {
        if (!visible) return;
        const curScrollTop = document.documentElement.scrollTop;
        const header = headerScroll.find((i)=>((i.offsetTop || 0) + 50) >= curScrollTop) || headerScroll[headerScroll.length-1];
        setActiveIndex(header.id);
      },
      [visible, headerScroll],
  );
  const onItemClick = (item:IBlogHeader) => {
    setActiveIndex(item.id);
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
  return (
    <React.Fragment>
      <Sidebar.Pushable as={Segment} className="transform-none">
        <div id="fuck">
          <Sidebar as={Menu} vertical fixed="right" visible={visible} direction="right" className="z-3" animation="overlay">
            {
              headers.map((i)=>(
                <Menu.Item href={'#' + i.id} active={activeIndex == i.id} key={i.id} onClick={()=>onItemClick(i)}>{i.id}</Menu.Item>
              ))
            }
          </Sidebar>
          <Sidebar.Pusher>
            <Layout>
              <Container text>
                <Blog blog={{content: html}}/>
              </Container>
            </Layout>
          </Sidebar.Pusher>
        </div>
      </Sidebar.Pushable>
      <div className="fixed bottom-10 right-10 z-3" onClick={()=>setVisible(!visible)}><Icon color="blue" name={visible ? 'close' :'list'}/></div>
    </React.Fragment>
  );
};

export default Page;
