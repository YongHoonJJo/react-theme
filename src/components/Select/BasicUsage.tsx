import React, { useState } from 'react'
import styled from 'styled-components'

import Select from '../../styles/Select'

const BasicUsageSelect: React.FC = () => {
  const [state, setState] = useState({
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
    currentValue: 'Select'
    }
  )

  const onClick = (value: string) => {
    setState({...state, currentValue: value}) 
  }
  
  const { options, currentValue } = state

  return (
    <Wrap>
      <Select options={options} currentValue={currentValue} onClick={onClick}/>
    </Wrap>
  )
}

export default BasicUsageSelect

const Wrap = styled.div`
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #E2E2E2;
  width: 100%;
  border-radius: 5px / 5px;  
`