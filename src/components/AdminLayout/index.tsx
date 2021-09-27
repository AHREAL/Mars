import React, {useState, useEffect} from 'react';
import {Layout, Menu} from 'antd';
import {Admin} from '@router/map';
import {useHistory, matchPath} from 'react-router';

const {Header, Content, Footer} = Layout;


const Cpn: React.FC = ({children}) => {
  const [selectedKeys, setSelectedKeys] = useState(['']);
  const history = useHistory();

  const navTo = (path:string) => {
    history.push(path);
  };

  useEffect(() => {
    Admin.find((i)=>{
      const math = matchPath(history.location.pathname, {
        path: i.path,
        exact: true,
      });
      if (!!math) {
        setSelectedKeys([math.path]);
      }
    });
  }, [history]);

  return (
    <Layout className="bg-white">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
          {
            Admin.filter((i)=>!i.hideNav).map((i)=>(
              <Menu.Item key={i.path} onClick={()=>navTo(i.path)}>{i.name}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Content className="p-14">
        <div>{children}</div>
      </Content>
      <Footer className="text-center bg-white">Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Cpn;
