import React from 'react';

import 'antd/dist/antd.css';
import TableofApplication from './table'

import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const DashAdmin = () => (
    <>
    <h1 style={{}}>Admin Dashboard</h1>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(2).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `User `,
            label: `Applicant`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      <TableofApplication />
      
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      PROVENCIAL WOMEN ©2022 Created by LadiesInCode
    </Footer>
  </Layout>
  </>
);

export default DashAdmin;