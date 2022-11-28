import React from 'react'
import styled from 'styled-components'

function RadioButton({name,value,onChange,text}) {
  return (
    <RadioButtonContainer>
        <input type='radio' name={name} value={value} onChange={onChange}/>
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