import React from 'react'
import styled from 'styled-components'

function RadioButton({name,value,setGender,gender,text}) {
  return (
    <RadioButtonContainer>
        <input type='radio' name={name} checked={gender===value} value={value} onChange={()=>setGender(value)}/>
        <label htmlFor="">{text}</label>
    </RadioButtonContainer>
  )
}

const RadioButtonContainer = styled.div`
    display: flex;
    gap:0.8rem;
    
    input{
        width: 1rem;
        height: 1rem;
    }
`

export default RadioButton