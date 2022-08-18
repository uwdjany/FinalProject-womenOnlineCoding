import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const  DashAdmin = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
 
  return (
   <>
   <h1>Admin DashBoard</h1>
    <Layout>
   
      <Sider trigger={null} collapsible collapsed={collapsed}>
      
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
             
              key: '1',
              icon: <UserOutlined onClick={()=>navigate('/list')}/>,
              label:<h6 onClick={()=>navigate('/list')} style={{color:"white"}}>Dashboard</h6>
            },
            {
             
              key: '2',
              icon: <UserOutlined onClick={()=>navigate('/list')}/>,
              label:<h6 onClick={()=>navigate('/applicant')} style={{color:"white"}}>Applicants</h6>


            },
            {
              key: '3',
              icon: <UserOutlined onClick={()=>navigate('/list')}/>,
              label:<h6 onClick={()=>navigate('/tranee')} style={{color:"white"}}>Tranee</h6>

            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
        {children}
        </Content>
      </Layout>
    </Layout>
    </>
  );
};

export default  DashAdmin;