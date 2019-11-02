import React from 'react'
import styled from 'styled-components'

interface ICheckboxProps {
  id: string
  label: string
  checked: boolean
  buttonStyle?: boolean
  firstChild?: boolean
  lastChild?: boolean
  onChange(): void
}

const CheckboxComponent: React.FC<ICheckboxProps> = ({id, label, checked, onChange, buttonStyle=false, firstChild=false, lastChild=false}) => {
  return (
    <Wrap buttonStyle={buttonStyle}>
      <CheckboxStyle id={id} type='checkbox' checked={checked} onChange={onChange} buttonStyle={buttonStyle} firstChild={firstChild} lastChild={lastChild} />
      <label htmlFor={id}>{label}</label>
    </Wrap>
  )
}

export default CheckboxComponent

const Wrap = styled.div<{buttonStyle: boolean}>`
  margin: ${({buttonStyle}) => buttonStyle ? '10px 0' : '0 20px 0 0'};
  display: inline-block;
`

const normalStyled = `
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

const buttonStyled = `
  & + label {
    padding: 10px 12px;
    border-top: 1px solid #C0CBD9;
    border-bottom: 1px solid #C0CBD9;
    border-left: 1px solid #C0CBD9;
  }

  &:hover + label {
    color: #2CA2FC;
  }

  &:checked + label {
    color: #FFFFFF;
    background: #2CA2FC; 
  }
`

const CheckboxStyle = styled.input<{buttonStyle: boolean, firstChild: boolean, lastChild: boolean}>`
  position: absolute;
  left: -9999px;

  & + label {
    position: relative;
    padding: 2px 0 0 23px;
    cursor: pointer;
  }

  ${({buttonStyle}) => buttonStyle ? buttonStyled : normalStyled}

  ${({buttonStyle, firstChild}) => buttonStyle && firstChild && `
    & + label {
      border-radius: 5px 0 0 5px / 5px 0 0 5px; 
    }
  `} 

  ${({buttonStyle, lastChild}) => buttonStyle && lastChild && (`
    & + label {
      border-right: 1px solid #C0CBD9;
      border-radius: 0 5px 5px 0 / 0 5px 5px 0; 
    }
  `)} 
`