import React from 'react'
import styled from 'styled-components'

export const Option = ({label, value}) => {
  return <option value={value}>{label}</option>
}

const SelectComponent = ({children}) => {
  return (
    <CustomSelect>
      <select>
        {children}
      </select>
    </CustomSelect>
  )
}

export default SelectComponent

const CustomSelect = styled.div`
  position: relative;
  border: 1px solid #1cbe9d;
  border-radius: 5px / 5px;
  width: 250px;
  height: 35px;
  cursor: pointer;

  & select {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
  }

  & select:focus {
    outline: none;
  }

  &:before {
    content: "";
    background: #1cbe9d;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 40px;
    pointer-events: none;
    border-radius: 0 3px 3px 0 / 0 3px 3px 0;
  }

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 7px 0;
    border-color: #fff transparent transparent transparent;
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
  }  
`