import React, {useState} from 'react'
import styled from 'styled-components'
import Home from './components/Home'
import Food from './components/Food'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const App = () => {

 

  return (
    <Router>
      <Container>

        {/* Left */}
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/food'>
            <Food />
          </Route>
        </Switch>
        {/* Right */}
        
      </Container>
    </Router>
  )
}

export default App

const Container = styled.div`
display: flex;
`

const Right = styled.div`
display: flex;
flex-direction: column;
margin-left: 48px;
`