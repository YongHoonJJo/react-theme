import React from 'react'
import styled from 'styled-components'

import Layout from '../layout/DefaultLayout'
import BasicUsageRadio from '../components/Radio/BasicUsage'

const RadioView: React.FC = () => {
  return (
    <Layout>
      <Wrap>
        <h1>Radio</h1>
        <p>Single selection among multiple options.</p>
      </Wrap>
      <Wrap>
        <h2>Basic Usage</h2>
        <p>Radio should not have too many options. Otherwise, use the Select component instead.</p> 
        <BasicUsageRadio />
      </Wrap>
    </Layout>
  )
}

export default RadioView

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