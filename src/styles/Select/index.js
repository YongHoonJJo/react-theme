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
`