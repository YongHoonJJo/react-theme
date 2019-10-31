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
    currentValue: []
    }
  )

  const { options, currentValue } = state

  const onRemove = (value: string) => {
    const newValue = currentValue.filter(v => v !== value)
    setState({...state, currentValue: newValue})
  }

  const onSelect = (selected: string) => {
    const options = state.options.map(({value, label, checked}) => ({value, label, checked: value === selected ? !checked : checked}))
    const newValue = options.filter(({checked}) => checked === true).map(opt => opt.value)
    setState({options, currentValue: newValue})
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