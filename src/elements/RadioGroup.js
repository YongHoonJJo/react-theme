import React from 'react'
import styled from 'styled-components'

const RadioItem = ({name, ...rest}) => {
  const { id, value, label, rows } = rest
  return (
    <RadioItemWrap rows={rows}>
      <RadioStyle type='radio' name={name} id={id} value={value}/> 
      <label for={id}>{label}</label>{rows && <br />}
    </RadioItemWrap>
  )
}

const RadioGroup = ({name, items, rows}) => {
  
  return (
    <Wrap>
      {items.map(item => <RadioItem name={name} rows={rows} {...item}/>)}
    </Wrap>
  )
}

export default RadioGroup

const Wrap = styled.div`
  margin: 15px;
  border: 1px solid #E2E2E2;
  width: 400px;
`

const RadioItemWrap = styled.div`
  margin: 8px; 
  ${props => props.rows && 'display: inline-block;'}
`

const RadioStyle = styled.input`
  position: absolute;
  left: -9999px;

  & + label {
    position: relative;
    padding: 3px 0 0 30px;
    cursor: pointer;
  }

  & + label:before {
    content: '';
    background: #fff;
    border: 2px solid #E2E2E2;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  & + label:after {
    content: '';
    background: #2CA2FC;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 5px;
    opacity: 0; 
  }

  &:checked + label:before {
    border: 2px solid #2CA2FC;
  }

  &:hover + label:before {
    border: 2px solid #2CA2FC;
  }

  &:checked + label:after {
    opacity: 1;
  }
`