import React from 'react'
import styled from 'styled-components'

interface IOptionProps {
  id: string
  name: string
  label: string
  checked: boolean
  onChange(): void
}

const RadioComponent: React.FC<IOptionProps> = ({id, name, checked, onChange, label}) => {
  return (
    <Wrap>
      <RadioStyle type='radio' id={id} name={name} checked={checked} onChange={onChange}/> 
      <label htmlFor={id}>{label}</label>
    </Wrap> 
  )
}

export default RadioComponent

const RadioStyle = styled.input`
  position: absolute;
  left: -9999px;

  & + label {
    position: relative;
    padding: 1px 0 0 22px;
    cursor: pointer;
  }

  & + label:before {
    content: '';
    background: #FFFFFF;
    border: 1px solid #BDC9D6;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  & + label:after {
    content: "";
    background: #FFFFFF;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 6px;
    opacity: 0; 
    transition: all 0.2s ease-in;
  }

  &:hover + label:before {
    border: 1px solid #2CA2FC;
  }

  &:checked + label:before {
    border: 1px solid #2CA2FC;
    background: #2CA2FC;
  }

  &:checked + label:after {
    opacity: 1;
  }
`

const Wrap = styled.div`
  margin: 10px 8px;
  display: inline-block;
`