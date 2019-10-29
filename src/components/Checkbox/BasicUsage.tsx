import React, { useState } from 'react'
import styled from 'styled-components'

import Checkbox from '../../styles/Checkbox'

const BasicUsageCheckbox: React.FC = () => {
  const [state, setState] = useState({
    options: [{
      id: 'CheckboxBasicUsageA',
      value: 'Javascript',
      label: 'Javascript',
      checked: false
    }, {
      id: 'CheckboxBasicUsageB',
      value: 'PHP',
      label: 'PHP',
      checked: false
    }, {
      id: 'CheckboxBasicUsageC',
      value: 'Python',
      label: 'Python',
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
      {options.map(({id, label, checked}) => <Checkbox id={id} label={label} checked={checked} onChange={() => onChange(id)} />)}
    </Wrap>
  )
}

export default BasicUsageCheckbox


const Wrap = styled.div`
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #E2E2E2;
  width: 100%;
  border-radius: 5px / 5px;  
`