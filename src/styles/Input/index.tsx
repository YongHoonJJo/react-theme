import React from 'react'
import styled from 'styled-components'

interface IInputProps {
  value: string
  placeholder?: string
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const InputComponent: React.FC<IInputProps> = ({value, onChange, placeholder='Please input'}) => {
  return (
    <InputStyle value={value} onChange={onChange} placeholder={placeholder}/>
  )
}

export default InputComponent

const InputStyle = styled.input`
  outline: none;
  width: 180px;
  height: 35px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px / 5px;
  border: 1px solid #C0CAD8;

  &::placeholder {
    color: #98A8BC;
    font-size: 14px;
  }

  &:focus {
    border: 1px solid #2CA2FC;
  }
`