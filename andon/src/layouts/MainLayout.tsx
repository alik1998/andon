// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import './MainLayout.css'; // Stil dosyasını import ediyoruz

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout className="main-layout">
      <Header className="main-header">Mini Andon</Header>
      <Content className="main-content">
        <Outlet />
      </Content>
      <Footer className="main-footer">Mini Andon</Footer>
    </Layout>
  );
};

export default MainLayout;