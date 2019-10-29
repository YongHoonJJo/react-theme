import React from 'react'
import styled from 'styled-components'

interface ICheckboxProps {
  id: string
  label: string
  checked: boolean
  onChange(): void
}

const CheckboxComponent: React.FC<ICheckboxProps> = ({id, label, checked, onChange}) => {
  return (
    <Wrap>
      <CheckboxStyle id={id} type='checkbox' checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </Wrap>
  )
}

export default CheckboxComponent

const Wrap = styled.div`
  margin: 10px 8px;
  display: inline-block;
`

const CheckboxStyle = styled.input`
  position: absolute;
  left: -9999px;

  & + label {
    position: relative;
    padding: 2px 0 0 23px;
    cursor: pointer;
  }

  & + label:before {
    content: "";
    background: #fff;
    border: 1px solid #BDC9D6;
    border-radius: 3px;
    height: 14px;
    width: 14px;
    position: absolute;
    top: 2px;
    left: 0;
  }

  & + label:after {
    content: "";
    border-style: solid;
    border-width: 0 0 2px 2px;
    border-color: transparent transparent #FFFFFF #FFFFFF;
    width: 10px;
    height: 5px;
    position: absolute;
    top: 5px;
    left: 3px;
    opacity: 0;
    transform: rotate(-45deg);
    transition: all 0.1s ease-in;
  }

  &:hover + label:before {
    border: 2px solid #2CA2FC; 
  }

  &:checked + label:before {
    border: 2px solid #2CA2FC; 
    background: #2CA2FC;
  } 

  &:checked + label:after {
    opacity: 1; 
  }  
`