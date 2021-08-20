import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Eat = () => {
    return (
        <Container>
            <Link to="/food"  style={{ textDecoration: 'none' }}>
                <Linked>
                    <Title>What should I eat？</Title>
                    <FontAwesomeIcon icon={faChevronRight} className="icon" size="2x" color="#F47A7A" />
                </Linked>
            </Link>
        </Container>
    )
}

export default Eat

const Container = styled.div`
background-color: #FFE3E3;
width: 560px;
height: 146px;
border-radius: 42px;
text-align:left;
padding: 44px 57px;
display: flex;
align-items: center;
`

const Title = styled.h1`
font-weight: 700;
font-size: 44px;
color: #f47a7a;
margin-right: 80px;
`

const Linked = styled.div`
display: flex;
align-items: center;
transition: all 300ms ease-in;

&:focus{
    outline: none;
}

& .icon{
    transition: all 300ms ease-in-out;
}

&:hover > .icon{
    transform: translateX(20px);
}
`