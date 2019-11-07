import React from 'react'
import styled from 'styled-components'

import Layout from '../layout/DefaultLayout'
import BasicUsageInput from '../components/Input/BasicUsage'

const HomeView: React.FC = () => {
  return (
    <Layout>
      <Wrap>
        <h1>Input</h1>
        <p>Input data using mouse or keyboard.</p>
      </Wrap>
      <Wrap>
        <h2>Basic Usage</h2>
        <BasicUsageInput />
      </Wrap>
    </Layout>
  )
}

export default HomeView

const Wrap = styled.div`
  padding-bottom: 20px;

  & h1 {
    font-size: 30px;
    font-weight: 400;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  & h2 {
    font-size: 24px;
    font-weight: 350;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  & p {
    color: #7F8A9A;
  }
`