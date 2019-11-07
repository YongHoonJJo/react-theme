import React, { useState } from 'react'
import styled from 'styled-components'

import Input from '../../styles/Input'

const BasicUsageInput: React.FC = () => {
  const [text, setText] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <Wrap>
      <Input value={text} onChange={onChange} placeholder='Please Input' />
    </Wrap>
  ) 
}

export default BasicUsageInput

const Wrap = styled.div`
  margin-bottom: 15px;
  padding: 25px;
  border: 1px solid #E2E2E2;
  width: 100%;
  border-radius: 5px / 5px; 
`