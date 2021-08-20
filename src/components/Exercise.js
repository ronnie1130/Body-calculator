import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Exercise = () => {

    const [bmr, setBmr] = useState('')
    const [training, setTraining] = useState('')
    const [result, setResult] = useState(0)

    useEffect(() => {
        setTraining('')

        let tdee
        if(training === 'never') {
            tdee = bmr * 1.2
        }
        if(training === 'seldom') {
            tdee =  bmr * 1.375
        }
        if(training === 'usually') {
            tdee =  bmr * 1.55
        }
        if(training === 'always') {
            tdee =  bmr * 1.725
        }
        return () => {
            setResult(tdee)
        }
    }, [training])

    return (
        <Container>
            <Title>Do you exercise？</Title>
            <BMR>
                <input type="text" name="bmr" id="bmr" onChange={(e)=>setBmr(e.target.value)} value={bmr} />
                <label htmlFor="bmr">Enter Your BMR</label>
            </BMR>
            <Input>
            <div className="radio-group">
                <input className="radio-input" type="radio" name="exercise" id="never" value="never" onChange={e => setTraining(e.currentTarget.value)}/>
                <label htmlFor="never" className="radio-label">
                <span className="radio-button"></span>
                No, I’m busy
                </label>
            </div>
            <div className="radio-group">
                <input className="radio-input" type="radio" name="exercise" id="seldom" value="seldom"   onChange={e => setTraining(e.currentTarget.value)}/>
                <label htmlFor="seldom" className="radio-label">
                <span className="radio-button"></span>
                Exercise 1-2 times in a week
                </label>
            </div>
            <div className="radio-group">
                <input className="radio-input" type="radio" name="exercise" id="usually" value="usually"  onChange={e => setTraining(e.currentTarget.value)}/>
                <label htmlFor="usually" className="radio-label">
                <span className="radio-button"></span>
                Exercise 3-5 times in a week
                </label>
            </div>
            <div className="radio-group">
                <input className="radio-input" type="radio" name="exercise" id="always" value="always"  onChange={e => setTraining(e.currentTarget.value)}/>
                <label htmlFor="always" className="radio-label">
                <span className="radio-button"></span>
                I exercise everyday.
                </label>
            </div>
            </Input>
            <TDEE>
                <span>TDEE</span>
                <p>{Math.round(result)}</p>
            </TDEE>
        </Container>
    )
}

export default Exercise

const Container = styled.div`
background-color: #C2DBEA;
width: 560px;
height: 452px;
border-radius: 42px;
text-align:left;
padding: 44px 57px;
margin-bottom: 48px;
`

const Title = styled.h1`
font-size: 38px;
font-weight: 700;
color: #268ec9;
margin-bottom: 30px;
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
    display: block;
    margin-bottom: 35px;
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


`

const TDEE = styled.div`
transform: translateX(25%);
display: flex;
align-items: center;

& span{
    font-weight: 700;
    font-size: 20px;
    color: #8d8dc0;
    margin-right: 20px;
}

& p{
    font-weight: 700;
    font-size: 48px;
    color: #8d8dc0;
}
`

const BMR = styled.div`
text-align:center;
margin-bottom: 30px;
& > input{
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #001857;
    width: 160px;
    padding: 6px 0;
    font-size: 20px;
    font-weight: 700;
    color: #57b;
    text-align:center;
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
`