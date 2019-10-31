import React, { useState } from 'react'
import styled from 'styled-components'

import Select, { IOption } from '../../styles/Select'

interface IState {
  options: IOption[]
  currentValue: string[] 
}

const BasicMultipleSelect: React.FC = () => {
  const [state, setState] = useState<IState>({
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
    currentValue: []
    }
  )

  const { options, currentValue } = state

  const onRemove = (value: string) => {
    const newValue = currentValue.filter(v => v !== value)
    setState({...state, currentValue: newValue})
  }

  const onSelect = (value: string) => {
    const newValue = currentValue.filter(v => v !== value)
    newValue.push(value)
    setState({...state, currentValue: newValue})
  }

  return (
    <Wrap>
      <Select options={options} currentValue={currentValue} onSelect={onSelect} onRemove={onRemove} multiple={true} />
    </Wrap>
  )
}

export default BasicMultipleSelect

const Wrap = styled.div`
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #E2E2E2;
  width: 100%;
  border-radius: 5px / 5px;  
`