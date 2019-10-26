import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../layout/DefaultLayout'
import Select, { Option } from '../styles/Select'

const SelectView = () => {
  const [state] = useState({
    options: [{
      value: 'Option1',
      label: 'Option1'
    }, {
      value: 'Option2',
      label: 'Option2'
    }, {
      value: 'Option3',
      label: 'Option3'
    }, {
      value: 'Option4',
      label: 'Option4'
    }, {
      value: 'Option5',
      label: 'Option5'
    }],
    value: ''
    }
  )
  

  const { options } = state

  return (
    <Layout>
      <Wrap>
        <h1>Select</h1>
        <p>When there are plenty of options, use a drop-down menu to display and select desired ones.</p>
      </Wrap>
      <Wrap>
        <h2>Basic Usage</h2>
        <Select>
          {options.map(opt => {
            return <Option key={opt.value} label={opt.label} value={opt.value} />
          })}
        </Select>
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