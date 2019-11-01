import React, { useState } from 'react'
import styled from 'styled-components'

import Radio from '../../styles/Radio'

const ButtonStyle: React.FC = () => {
  const [state, setState] = useState({
    options: [{
      id: 'ButtonStyleA',
      value: 'New York',
      label: 'New York'
    }, {
      id: 'ButtonStyleB',
      value: 'Washington',
      label: 'Washington'
    }, {
      id: 'ButtonStyleC',
      value: 'Los Angeles',
      label: 'Los Angeles'
    }, {
      id: 'ButtonStyleD',
      value: 'Chicago',
      label: 'Chicago'
    }],
    name: 'ButtonStyle',
    currentValue: 'New York'
  })

  const onChange = (selected: string) => {
    setState({...state, currentValue: selected}) 
  }

  const { options, name, currentValue } = state
  
  return (
    <Wrap>
      {options.map(({value, label, id}, idx) => <Radio key={id} id={id} name={name} checked={value === currentValue} label={label} onChange={() => onChange(value)} buttonStyle firstChild={idx === 0} lastChild={idx === options.length-1} />)}
    </Wrap>
  )
}

export default ButtonStyle

const Wrap = styled.div`
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #E2E2E2;
  width: 100%;
  border-radius: 5px / 5px;
`