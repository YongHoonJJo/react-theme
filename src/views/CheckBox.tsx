import React from 'react'
import styled from 'styled-components'

import Layout from '../layout/DefaultLayout'
import BasicUsageCheckbox from '../components/Checkbox/BasicUsage'
import ButtonStyle from '../components/Checkbox/ButtonStyle'

const CheckboxView: React.FC = () => {
  return (
    <Layout>
      <Wrap>
        <h1>Checkbox</h1>
        <p>A group of options for multiple choices.</p>
      </Wrap>
      <Wrap>
        <h2>Basic Usage</h2>
        <p>Checkbox can be used alone to switch between two states.</p> 
        <BasicUsageCheckbox />
      </Wrap>
      <Wrap>
        <h2>Button style</h2>
        <p>Checkbox with button styles.</p> 
        <ButtonStyle />
      </Wrap>
    </Layout>
  )
}

export default CheckboxView

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