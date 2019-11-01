import React, { useState } from 'react'
import styled from 'styled-components'

import Radio from '../../styles/Radio'

const BasicUsageRadio: React.FC = () => {
  const [state, setState] = useState({
    options: [{
      id: 'BasicUsageA',
      value: 'Option A',
      label: 'Option A'
    }, {
      id: 'BasicUsageB',
      value: 'Option B',
      label: 'Option B'
    }, {
      id: 'BasicUsageC',
      value: 'Option C',
      label: 'Option C'
    }],
    name: 'BasicUsage',
    currentValue: 'Option A'
  })

  const onChange = (selected: string) => {
    setState({...state, currentValue: selected}) 
  }

  const { options, name, currentValue } = state
  
  return (
    <Wrap>
      {options.map(({value, label, id}) => <Radio key={id} id={id} name={name} checked={value === currentValue} label={label} onChange={() => onChange(value)}  />)}
    </Wrap>
  )
}

export default BasicUsageRadio

const Wrap = styled.div`
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #E2E2E2;
  width: 100%;
  border-radius: 5px / 5px; 
`