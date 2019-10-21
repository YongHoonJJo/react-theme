import React, { useState } from 'react'
import styled from 'styled-components'
import RadioGroup from './elements/RadioGroup'

function App() {

  const initData = [{
    'id': 'react',
    'value': 'react',
    'label': 'React'
  }, {
    'id': 'vue',
    'value': 'vue',
    'label': 'Vue' 
  },{
    'id': 'vanilla',
    'value': 'vanilla',
    'label': 'Vanilla'
  }]

  const [data, setData] = useState(initData)
  const data2 = data.map(d => ({value: `${d.value}2`, id: `${d.id}2`, label: `${d.label}2`}))
  const data3 = data.map(d => ({value: `${d.value}3`, id: `${d.id}3`, label: `${d.label}3`})) 

  return (
    <Wrap>
      <div>
        <h2>Radio</h2>
        <RadioGroup name='FrontEnd1' items={data} rows />
        <RadioGroup name='FrontEnd2' items={data2} />
        <RadioGroup name='FrontEnd2' items={data3} buttons rows />
      </div>
    </Wrap>
  )
}

export default App

const Wrap = styled.div`

`