import React from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
    </>
  );
};
