import React, { useState } from 'react'
import styled from 'styled-components'

import Checkbox from '../../styles/Checkbox'

const ButtonStyle: React.FC = () => {
  const [state, setState] = useState({
    options: [{
      id: 'ButtonStyleA',
      value: 'New York',
      label: 'New York',
      checked: false
    }, {
      id: 'ButtonStyleB',
      value: 'Washington',
      label: 'Washington',
      checked: false
    }, {
      id: 'ButtonStyleC',
      value: 'Los Angeles',
      label: 'Los Angeles',
      checked: false
    }, {
      id: 'ButtonStyleD',
      value: 'Chicago',
      label: 'Chicago',
      checked: false
    }]
  })

  const onChange = (id: string) => {
    setState({ options: state.options.map(opt => {
      return opt.id === id ? {...opt, checked: !opt.checked} : {...opt}
    })})
  }

  const { options } = state
  
  return (
    <Wrap>
      {options.map(({id, label, checked}, idx) => <Checkbox id={id} label={label} checked={checked} onChange={() => onChange(id)} buttonStyle firstChild={idx === 0} lastChild={idx === options.length-1} />)} 
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