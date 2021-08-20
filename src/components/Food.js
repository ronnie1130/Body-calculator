import React from 'react'
import styled from 'styled-components'
import Nutrients from './Nutrients' 
import Meal from './Meal' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Food = () => {
    return (
        <Container>
            <Top>
            <Nutrients/>
            </Top>
            <Bottom>
                <Meal/>
                <img src="https://i.imgur.com/KcrErYv.png" />
            </Bottom>
            <Link style={{textDecoration:'none'}} to="/">
                <Linked>
                    Go Back To Calculator
                    <FontAwesomeIcon icon={faChevronRight} className="icon" size="1x" color="#F47A7A" />
                </Linked>
            </Link>
        </Container>
    )
}

export default Food

const Container = styled.div``
const Top = styled.div`
margin-bottom: 48px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;

& img{
    width: 35%;
    height: 35%;
}
`

const Linked = styled.div`
    text-align: right;
    font-size: 28px;
    font-weight: 700;
    color: #F47A7A;
    margin-top: 20px;
    margin-left: 40px;
           
                    
    & .icon{
        margin-left: 8px;
        transition: all 300ms ease-in-out;
    }

    &:hover > .icon{
        transform: translateX(15px);
    }            
                
`