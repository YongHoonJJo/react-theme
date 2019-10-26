import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import HomeView from './views/Home'
import RadioView from './views/Radio'
import SelectView from './views/Select'

const InitialStyle = createGlobalStyle`
  ${reset};

  html, body, #root {
    height: 100%
  }

  a {
    color: inherit;
    text-decoration: none; 
  }

  * {
    box-sizing: border-box;
    line-height: 1.2;
  }
`

function App() {

  return (
    <React.Fragment>
      <InitialStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route path='/radio' component={RadioView} />
          <Route path='/select' component={SelectView} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App