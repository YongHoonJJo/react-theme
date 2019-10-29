import React from 'react'
import styled from 'styled-components'

import Layout from '../layout/DefaultLayout'

const CheckboxView: React.FC = () => {
  return (
    <Layout>
      <Wrap>
        <h1>Checkbox</h1>
        <p>A group of options for multiple choices.</p>
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