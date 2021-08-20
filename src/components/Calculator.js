import React, {useState} from 'react'
import styled from 'styled-components'

const Calculator = () => {

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [result, setResult] = useState(0)

    const handleClick = (e) =>{
        if (gender === '') return
        if (age === '') return
        if (height === '') return
        if (weight === '') return
        else{
            let bmr
            if(gender === 'male'){
                bmr = 10 * weight + 6.25 * height - 5 * age + 5
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161
            }
            setResult(bmr)
        }
    }

    return (
        <Container>
            <Title>Nice to meet u</Title>
            <Input>
            <div className="radio-group">
                <input className="radio-input" type="radio" name="gender" id="male" onChange={e => setGender(e.currentTarget.value)} value='male' checked={gender === 'male'}/>
                <label htmlFor='male' className="radio-label">
                <span className="radio-button"></span>
                    male
                </label>
            </div>
            <div className="radio-group">
                <input className="radio-input" type="radio" name="gender" id="female" onChange={e => setGender(e.currentTarget.value)}value='female' checked={gender === 'female'}/>
                <label htmlFor="female" className="radio-label">
                    <span className="radio-button"></span>
                    female
                </label>
            </div>
                
                <br />
                <Age>
                    <input type="text" name="age" id="age" className="text-input" onChange={(e)=>setAge(e.target.value)} value={age}/>
                    <label htmlFor="age" className="text-label">age</label>
                    {age.trim() === ''?<p>How old r u?</p>:null}
                </Age>
                <Height>
                    <input type="text" name="height" id="height" className="text-input" onChange={(e)=>setHeight(e.target.value)} value={height}/>
                    <label htmlFor="height" className="text-label">height</label>
                    {height.trim() === ''?<p>How tall r u?</p>:null}
                </Height>
                <Weight>
                    <input type="text" name="weight" id="weight" className="text-input" onChange={(e)=>setWeight(e.target.value)} value={weight}/>
                    <label htmlFor="weight" className="text-label">weight</label>
                    {weight.trim() === ''?<p>Don't worry, I won't say a word.</p>:null}
                </Weight>
                <input type="submit" value="Result" className="btn input-submit" onClick={handleClick}/>
            </Input>
            <BMR>
                <span>BMR</span>
                <p>{Math.round(result)}</p>
            </BMR>
        </Container>
    )
}

export default Calculator

const Container = styled.div`
background-color: #C2DBEA;
width: 350px;
height: 733px;
border-radius: 42px;
text-align:center;
padding: 44px 57px;
`

const Title = styled.h1`
font-size: 38px;
font-weight: 700;
color: #268EC9;
text-transform: uppercase;
margin-bottom: 45px;
`

const Input = styled.div`
margin-bottom: 35px;

& > *{
    text-transform: uppercase;
}

& .radio-input{
    visibility:hidden;
}

& .radio-group{
    text-align:left;
    display: inline-block;
}

& .radio-group:first-child{
margin-right: 30px;
}

& .radio-group:first-child{
margin-bottom: 30px;
}

& .radio-label {
  font-size: 24px;
  font-weight: 700;
  color: #001857;
  cursor: pointer;
  position: relative;
  padding-left: 2.5rem;
}

& .radio-button {
  /* 自定義樣式的span */
  height: 1.5rem;
  width: 1.5rem;
  background-color: #F2EFEF;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
}

& .radio-button::after { /* 中間點點 */
  content: "";
  display: block;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #57B1E3;
  opacity: 0;
  transition: opacity 0.2s;
}

& .radio-input:checked ~ .radio-label .radio-button::after {
  /* 選中radio時 才顯示中間點點 */
  opacity: 1;
}

& .input-submit{
    border:0;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #C2DBEA;
    border: 3px solid #57b;
    color: #57b;
    font-weight: 700;
    font-size: 24px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 250ms ease-in;

    &:hover{
    transform: scale(1.05);
    background-color: #57b;
    color:#fff;
    }

    &:active{
    transform: translateY(0px);
    transform: scale(1.03);
    }

    &:focus{
        outline: none;
    }
}

`

const BMR = styled.div`
display: flex;
justify-content: center;
align-items: center;

& span{
    font-weight: 700;
    font-size: 20px;
    color: #8d8dc0;
    margin-right: 20px;
}

& p{
    font-weight: 700;
    color: #8d8dc0;
    font-size: 48px;
}
`

const Age = styled.div`
margin-bottom: 60px;

& > input{
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #001857;
    width: 300px;
    padding: 6px 0;
    font-size: 20px;
    color: #57b;
    text-align:center;
    font-weight:700;
}

& > label{
    font-size: 22px;
    font-weight: 700;
    color: #001857;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 30px;
}

& p{
    transform: translateX(-30%);
    text-transform: none;
    margin-top: 5px;
    color: IndianRed;
}
`
const Weight = styled.div`
margin-bottom: 50px;

& > input{
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #001857;
    width: 300px;
    padding: 6px 0;
    font-size: 20px;
    color: #57b;
    text-align:center;
    font-weight:700;
}

& > label{
    font-size: 22px;
    font-weight: 700;
    color: #001857;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 30px;
}

& p{
    transform: translateX(-12%);
    text-transform: none;
    margin-top: 5px;
    color: IndianRed;
}
`
const Height = styled.div`
margin-bottom: 60px;

& > input{
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #001857;
    width: 300px;
    padding: 6px 0;
    font-size: 20px;
    color: #57b;
    text-align:center;
    font-weight:700;
}

& > label{
    font-size: 22px;
    font-weight: 700;
    color: #001857;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 30px;
}

& p{
    transform: translateX(-30%);
    text-transform: none;
    margin-top: 5px;
    color: IndianRed;
}
`