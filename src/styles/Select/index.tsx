import React, { useState } from 'react'
import styled from 'styled-components'

export interface IOption {
  label: string
  value: string
  checked: boolean
}

interface IOptionsProps {
  options: IOption[]
  currentValue: string | string[]
  onSelect(value: string, e: React.MouseEvent<HTMLElement>): void
  multiple?: boolean
  onRemove?(value: string, e: React.MouseEvent<HTMLElement>): void
}

interface IOptionProps extends IOption {
  onSelect(value: string, e: React.MouseEvent<HTMLElement>): void 
}

const Option: React.FC<IOptionProps> = ({label, value, checked, onSelect}) => {
  return (
    <OptionStyle checked={checked} onClick={(e) => onSelect(value, e)}>
      {label}
    </OptionStyle>
  )
}

const SelectComponent: React.FC<IOptionsProps> = ({options, currentValue, onSelect, onRemove, multiple}) => {
  const [clicked, setClicked] = useState(false)
  const onClickSelect = () => {
    setClicked(!clicked)
  }

  const onBlur = () => {
    clicked && onClickSelect()
  }
  
  return (
    <CustomSelect tabIndex={0} onClick={onClickSelect} onBlur={onBlur}>
      {multiple ? 
        <MultipleSelected>
          {currentValue.length === 0 ? 
            <Selected selected={'Select' as string}>{'Select'}</Selected>
            :
            options.map(({label, value, checked}) => checked && <OptionTag key={value}><TagLabelSpan>{label}</TagLabelSpan><TagRemoveSpan onClick={(e) => onRemove && onRemove(value, e)}>{'X'}</TagRemoveSpan></OptionTag>)
          }
        </MultipleSelected>
        :
        <Selected selected={currentValue as string}>{currentValue}</Selected>
      }
      {clicked && 
        <Options>
          {options.map(({label, value, checked}) => (
            <Option key={value} label={label} value={value} checked={checked} onSelect={onSelect} />
          ))}
        </Options>
      }
    </CustomSelect>
  )
}

export default SelectComponent


const TagRemoveSpan = styled.span`
  margin-right: 5px;
  padding-left: 3.5px;
  padding-top: 2px;
  font-size: 13px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  
  &: hover {
    color: #FFFFFF;
    background: #2CA2FC;
  }
`

const TagLabelSpan = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`

const OptionTag = styled.div`
  font-size: 14px;
  height: 25px;
  color: #2FA2FB;
  background: #E9F6FF;
  border-radius: 5px / 5px;
  border: 1px solid #C2E4FD;
  display: flex;
  align-items: center;
  margin-left: 5px;
`

const MultipleSelected = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: #A2B1C3;
`

const Options = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  border: 1px solid #D1DBE5;
  padding: 5px 0;
  background: #FFFFFF;
  z-index: 100;
`

const OptionStyle = styled.div<{checked: boolean}>`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 35px;
  color: ${({checked}) => checked ? '#FFFFFF' : '#5C6979'};
  font-size: 14px;
  ${({checked}) => checked && 'background: #2CA2FC'}

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
  margin: 12px;

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