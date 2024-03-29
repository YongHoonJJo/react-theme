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
  multiple: boolean
  onSelect(value: string, e: React.MouseEvent<HTMLElement>): void 
}

const Option: React.FC<IOptionProps> = ({label, value, checked, onSelect, multiple}) => {
  return (
    <OptionStyle multiple={multiple} checked={checked} onClick={(e) => onSelect(value, e)}>
      {label}
    </OptionStyle>
  )
}

const SelectComponent: React.FC<IOptionsProps> = ({options, currentValue, onSelect, onRemove, multiple=false}) => {
  const [clicked, setClicked] = useState(false)
  const onClickSelect = () => {
    setClicked(!clicked)
  }

  const onBlur = () => {
    clicked && onClickSelect()
  }

  let halfCount = 1
  const optionTags: JSX.Element[] = []
  if(multiple) {
    const tempOptionTags = options.filter(({checked}) => checked).map(({label, value}) => (
      <OptionTag key={value}>
        <TagLabelSpan>{label}</TagLabelSpan>
        <TagRemoveSpan onClick={(e) => onRemove && onRemove(value, e)}>{'X'}</TagRemoveSpan>
      </OptionTag>
    ))
    
    const optionTagCount = tempOptionTags.length 
    tempOptionTags.forEach((tag, idx) => {
      if((idx&1) === 1) return ;
      if((optionTagCount&1) === 1 && idx === optionTagCount-1) {
        optionTags.push((
          <OptionTagsDiv>
            {tag}
          </OptionTagsDiv>
        ))
        return ;
      }
      optionTags.push((
        <OptionTagsDiv>
          {tempOptionTags[idx]}
          {tempOptionTags[idx+1]}
        </OptionTagsDiv>
      ))
    })

    halfCount = Math.ceil(optionTagCount/2)
    if(halfCount === 0) halfCount = 1
  }
  
  return (
    <CustomSelect tabIndex={0} onClick={onClickSelect} onBlur={onBlur} halfCount={halfCount}>
      {multiple ? 
        <MultipleSelected>
          {currentValue.length === 0 ? 
            <Selected selected={'Select' as string}>{'Select'}</Selected>
            :
            <React.Fragment>
              {optionTags}
            </React.Fragment>
          }
        </MultipleSelected>
        :
        <Selected selected={currentValue as string}>{currentValue}</Selected>
      }
      {clicked && 
        <Options halfCount={halfCount}>
          {options.map(({label, value, checked}) => (
            <Option key={value} label={label} value={value} checked={checked} onSelect={onSelect} multiple={multiple} />
          ))}
        </Options>
      }
    </CustomSelect>
  )
}

export default SelectComponent

const OptionTagsDiv = styled.div`
  display: flex;  
  align-items: center;  
  height: 35px;   
`


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

// align-items: center;
const MultipleSelected = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  height: 100%;
  color: #A2B1C3;
`

const Options = styled.div<{halfCount: number}>`
  position: absolute;
  top: ${({halfCount}) => `${40+35*(halfCount-1)}px`};
  width: 100%;
  border: 1px solid #D1DBE5;
  padding: 5px 0;
  background: #FFFFFF;
  z-index: 100;
`

const OptionStyle = styled.div<{multiple: boolean, checked: boolean}>`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 35px;
  color: ${({checked, multiple}) => checked ? (!multiple ? '#FFFFFF' : '#2CA2FC') : '#5C6979'};
  
  font-size: 14px;
  ${({checked, multiple}) => checked && !multiple && 'background: #2CA2FC'}

  &:hover {
    background: #E4E8F1;  
    color: ${({checked, multiple}) => (multiple && checked) ? '#2CA2FC' : '#5C6979'}; 
  }
`

const Selected = styled.div<{selected: string}>`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${({selected}) => selected === 'Select' ? '#A2B1C3' : '#1F2D3C'};
`

const CustomSelect = styled.div<{halfCount: number}>`
  position: relative;
  border: 1px solid #2CA2FC;
  border-radius: 5px / 5px;
  width: 250px;
  height: ${({halfCount}) => `${35*halfCount}px`};
  cursor: pointer;
  outline: none;
  margin: 12px;
  display: flex;

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