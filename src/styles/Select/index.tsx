import React, { useState } from 'react'
import styled from 'styled-components'

interface IOption {
  label: string
  value: string
}

interface IOptionsProps {
  options: IOption[]
}

interface IOptionProps extends IOption {
  isSelected: boolean
  onClick(value: string): void 
}

const Option: React.FC<IOptionProps> = ({label, value, isSelected, onClick}) => {
  return (
    <OptionStyle isSelected={isSelected} onClick={() => onClick(value)}>
      {label}
    </OptionStyle>
  )
}

const SelectComponent: React.FC<IOptionsProps> = ({options}) => {
  const [selected, setSelected] = useState('Select')  
  const [clicked, setClicked] = useState(false)

  const onClickSelect = () => {
    setClicked(!clicked)
  }

  const onClickOption = (value: string) => {
    setSelected(value) 
  }

  const onBlur = () => {
    clicked && onClickSelect()
  }

  return (
    <CustomSelect tabIndex={0} onClick={onClickSelect} onBlur={onBlur}>
      <Selected selected={selected}>{selected}</Selected>
      {clicked && 
        <Options>
          {options.map(({label, value}) => (
            <Option label={label} value={value} isSelected={selected === value} onClick={onClickOption} />
          ))}
        </Options>
      }
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

const OptionStyle = styled.div<{isSelected: boolean}>`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 35px;
  color: ${({isSelected}) => isSelected ? '#FFFFFF' : '#5C6979'};
  font-size: 14px;
  ${({isSelected}) => isSelected && 'background: #2CA2FC'}

  &:hover {
    background: #E4E8F1;  
    color: #5C6979; 
  }
`

const Selected = styled.div<{selected: string}>`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${({selected}) => selected === 'Select' ? '#A2B1C3' : '#1F2D3C'};
  
`

const CustomSelect = styled.div`
  position: relative;
  border: 1px solid #2CA2FC;
  border-radius: 5px / 5px;
  width: 250px;
  height: 35px;
  cursor: pointer;
  outline: none;

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