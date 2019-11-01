import React from 'react'
import styled from 'styled-components'

interface IOptionProps {
  id: string
  name: string
  label: string
  checked: boolean
  buttonStyle?: boolean
  firstChild?: boolean
  lastChild?: boolean
  onChange(): void
}

const RadioComponent: React.FC<IOptionProps> = (props) => {
  const {id, name, checked, onChange, label, buttonStyle=false, firstChild=false, lastChild=false} = props
  return (
    <Wrap buttonStyle={buttonStyle}>
      <RadioStyle type='radio' id={id} name={name} checked={checked} onChange={onChange} buttonStyle={buttonStyle} firstChild={firstChild} lastChild={lastChild}/> 
      <label htmlFor={id}>{label}</label>
    </Wrap> 
  )
}

export default RadioComponent

const normalStyled = `
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

const RadioStyle = styled.input<{buttonStyle: boolean, firstChild: boolean, lastChild: boolean}>`
  position: absolute;
  left: -9999px;

  & + label {
    position: relative;
    padding: 1px 0 0 22px;
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

const Wrap = styled.div<{buttonStyle: boolean}>`
  margin: ${({buttonStyle}) => buttonStyle ? '10px 0' : '0 20px 0 0'};
  display: inline-block;
`