import React from 'react'
import Home from './Compo/Home.jsx'

import {Switch , Route} from 'react-router-dom'
import Detail from './Compo/Detail.jsx'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path='/detail/:name' children={<Detail />}></Route>
    </Switch>
    </>
  )
}

export default App
