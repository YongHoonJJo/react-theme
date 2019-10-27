import React, { useState, useRef } from 'react'
import styled from 'styled-components'

export const Option = ({label, value, setSelected}) => {
  // return <option value={value}>{label}</option>
  const onClick = () => {
    setSelected(value)
  }

  return <OptionStyle onClick={onClick}>{label}</OptionStyle>
}

const SelectComponent = ({children}) => {
  const [selected, setSelected] = useState('Select')  
  const [clicked, setClicked] = useState(false)

  const onClickSelect = () => {
    setClicked(!clicked)
  }

  const onBlur = () => {
    clicked && onClickSelect()
  }

  return (
    <CustomSelect tabIndex={0} onClick={onClickSelect} onBlur={onBlur}>
      <Selected>{selected}</Selected>
      {clicked && <Options>{children.map(c => ({...c, props: {...c.props, setSelected, onClickSelect}}))}</Options>}
      {/* <select>
        {children}
      </select> */}
    </CustomSelect>
  )
}

export default SelectComponent

const Options = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  border: 1px solid #D1DBE5;
  padding: 5px 0;
`

const OptionStyle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 35px;
  color: #5C6979;
  font-size: 14px;

  &:hover {
    background: #E4E8F1;
  }
`

const Selected = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #A2B1C3;
  
`

const CustomSelect = styled.div`
  position: relative;
  border: 1px solid #2CA2FC;
  border-radius: 5px / 5px;
  width: 250px;
  height: 35px;
  cursor: pointer;
  outline: none;

  & select {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    display: none;
  }

  & select:focus {
    outline: none;
  }

  &:before {
    content: "";
    background: #2CA2FC;
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