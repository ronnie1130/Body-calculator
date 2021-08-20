import React from 'react'
import Calculator from './Calculator'
import Exercise from './Exercise'
import Eat from './Eat'
import styled from 'styled-components'

const Home = () => {
    return (
        <Container>
            
            <Calculator/>
            <Right>
              <Exercise/>
              <Eat/>
            </Right>
            
        </Container>
    )
}

export default Home

const Container = styled.div`
display: flex;
`

const Right = styled.div`
display: flex;
flex-direction: column;
margin-left: 48px;
`