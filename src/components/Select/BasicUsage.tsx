import React, { useState } from 'react'
import styled from 'styled-components'

import Select from '../../styles/Select'

const BasicUsageSelect: React.FC = () => {
  const [state, setState] = useState({
    options: [{
      value: 'Option1',
      label: 'Option1',
      checked: false
    }, {
      value: 'Option2',
      label: 'Option2',
      checked: false
    }, {
      value: 'Option3',
      label: 'Option3',
      checked: false
    }, {
      value: 'Option4',
      label: 'Option4',
      checked: false
    }, {
      value: 'Option5',
      label: 'Option5',
      checked: false
    }],
    currentValue: 'Select'
    }
  )

  const onSelect = (selected: string) => {
    const options = state.options.map(({value, label, checked}) => ({value, label, checked: value === selected}))
    setState({options, currentValue: selected}) 
  }
  
  const { options, currentValue } = state
  
  return (
    <Wrap>
      <Select options={options} currentValue={currentValue} onSelect={onSelect}/>
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