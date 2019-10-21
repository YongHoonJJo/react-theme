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
  const data2 = data.map(d => ({...d, id: `${d.id}2`, label: `${d.label}2`}))

  return (
    <Wrap>
      <RadioGroup name='FrontEnd1' items={data} rows />
      <RadioGroup name='FrontEnd2' items={data2} />
    </Wrap>
  )
}

export default App

const Wrap = styled.div`

`