import React from 'react'
import styled from 'styled-components'



const Meal = () => {
    return (
        <Container>
            <Title>
                <h1>1,200-Calorie Meal Plan<span>in 7-11</span></h1>
            </Title>
            <Content>
                <ul>
                    <li>
                        <h3>Breakfast：</h3>
                        <p>tuna rice ball + Americano</p>
                    </li>
                    <li>
                        <h3>Lunch：</h3>
                        <p>roast chicken bento + milk</p>
                    </li>
                    <li>
                        <h3>Dinner：</h3>
                        <p>roast chicken bento + water </p>
                    </li>
                    <li>
                        <h3>After work out：</h3>
                        <p>egg white + soymilk </p>
                    </li>
                </ul>
            </Content>
            
        </Container>
    )
}

export default Meal

const Container = styled.div`
background-color: #FFE3E3;
width: 538px;
height: 300px;
border-radius: 42px;
text-align:center;
padding: 44px 70px;
`

const Title = styled.div`
    margin-bottom: 40px;
    & h1{
        font-size: 40px;
        font-weight: 700;
        color: #F47A7A;
    }

    & span{
        font-size: 24px;
        margin-left: 10px;
    }
`
const Content = styled.div`
    & ul{
        list-style: none;

        & li{
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            & h3{
            font-size: 28px;
            font-weight: 700;
            color: #F47A7A;
            }

            & p{
            font-size: 28px;
            font-weight: 700;
            color: #9C2937;
            }

            
            
        }
    }

`