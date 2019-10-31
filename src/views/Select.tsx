import React from 'react'
import styled from 'styled-components'

import Layout from '../layout/DefaultLayout'
import BasicUsageSelect from '../components/Select/BasicUsage'
import BasicMultipleSelect from '../components/Select/BasicMultipleSelect'

const SelectView: React.FC = () => {
  return (
    <Layout>
      <Wrap>
        <h1>Select</h1>
        <p>When there are plenty of options, use a drop-down menu to display and select desired ones.</p>
      </Wrap>
      <Wrap>
        <h2>Basic Usage</h2>
        <BasicUsageSelect />
      </Wrap>
      <Wrap>
        <h2>Basic multiple select</h2>
        <p>Multiple select uses tags to display selected options.</p>
        <BasicMultipleSelect /> 
      </Wrap>
    </Layout>
  )
}

export default SelectView

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