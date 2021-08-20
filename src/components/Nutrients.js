import React,{ useState } from 'react'
import styled from 'styled-components'

const Nutrients = () => {

    const [protein, setProtein] = useState(0)
    const [weight, setWeight] = useState(0)

    const handleClick = ()=>{
        let g
        g = weight * 2.2
        setProtein(g)
    }

    return (
        <Container>
            <Rule>
                <ul>
                    <li><div>PROTEIN<span>about weight * 2.2</span></div></li>
                    <li><div>FAT<span>25% of total</span></div></li>
                    <li><div>CARB<span>rest of total</span></div></li>
                </ul>
            </Rule>
            <Calc>
                <div className="input-group">
                    <div>
                        <input type="text" name="weight" id='weight' onChange={(e)=>setWeight(e.target.value)} value={weight}/>
                        <label htmlFor="weight" className="text-label">weight</label>
                    </div>
                    <input type="submit" value="Tell me the number" className="input-submit" onClick={handleClick}/>
                </div>
                <p>Then, you need to eat</p>
                <ul>
                    <li><span>{Math.round(protein)}</span> g protein</li>
                    <li><span>{Math.round((protein / 40) * 25)}</span> g fat</li>
                    <li><span>{Math.round((protein / 40) * 35)}</span> g carbohydrate a day</li>
                </ul>
            </Calc>
            <p>Depends on your TDEE-100~300, please feel free to decrease the amount of fat or carbohydrate on your own</p>
        </Container>
    )
}

export default Nutrients

const Container = styled.div`
background-color: #C2DBEA;
width: 88%;
height: 300px;
border-radius: 42px;
text-align:center;
padding: 44px 57px;

& p{
    text-align: right;
    color: #9c2937;
    font-weight: 500;
    font-size: 12px;
    /* margin-top: 20px; */
}
`
const Rule = styled.div`

& ul{
    display:flex;
    list-style: none;
    justify-content: space-around;

    & div{
        margin-right: 30px;
        font-size: 36px;
        font-weight: 700;
        color: #268ec9;

        display: flex;
        align-items: center;
    }

    & span{
        margin-left: 10px;
        color: #4F9CD3;
        font-size: 20px;
    }

}
`
const Calc = styled.div`
display: flex;
justify-content: space-between;
margin-top: 80px;
align-items: center;
margin-bottom: 20px;

& input{
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #268EC9;
    width: 260px;
    padding: 6px 0;
    font-size: 20px;
    color: #57b;
    text-align:center;
    font-weight:700;
}

& label{
    font-size: 22px;
    font-weight: 700;
    color: #268EC9;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 0px;
}

& .input-group{
    text-align: left;

    & .input-submit{
    margin-top: 40px;
    border:0;
    width: 260px;
    height: 60px;
    border-radius: 15px;
    background-color: #268EC9;
    border: 3px solid #268EC9;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 250ms ease-in;

    &:hover{
    transform: scale(1.05);
    }

    &:active{
    transform: translateY(0px);
    transform: scale(1.03);
    }

    &:focus{
        outline: none;
    }
    }
}

& p{
    color: #001857;
    font-size: 28px;
    font-weight: 700;
}

& ul {
    list-style: none;
    & li{
    text-align: left;
    color: #001857;
    font-size: 28px;
    font-weight: 700;

    & span{
        color: #9C2937;
        margin-right: 8px;
    }
    }
}
`


