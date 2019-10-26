import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <Container>{children}</Container>
    </Layout>
  );
};

export default LayoutComponent

const Layout = styled.div`
  position: relative;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
  padding: 55px 10px 10px 280px;
`

const Container = styled.div`
  height: 100%;
  padding: 0 10px;
  overflow-y: scroll;
`