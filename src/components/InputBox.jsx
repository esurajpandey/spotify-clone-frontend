import React from 'react'
import styled from 'styled-components'
import {MdError}  from 'react-icons/md';
function InputBox({ type, placeholder, name, value, text, onChange,error,onBlur,width,padding }) {
    
    return (
        <Container error={error} width={width} padding={padding}>
            <label htmlFor="">
                {text}
            </label>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}  onBlur={onBlur}/>
            {
                error && <p><MdError/>{error}</p>
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({width})=>(width?width:'28rem')};
    gap:0.5rem;
    label{
        font-weight: 700;
        color: black;
        font-size: 0.875rem;
    }
    input{
        appearance: none;
        background-image: none;
        border: 0px;
        display: block;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        width: 100%;
        box-sizing: border-box;
        font-family: spotify-circular, Helvetica, Arial, sans-serif;
        -webkit-tap-highlight-color: transparent;
        margin-top: 0px;
        margin-bottom: 0px;
        border-radius: 4px;
        padding: ${({padding})=>(padding ?padding:'14px')};
        background-color: #ffffff;
        color: #000000;
        outline: ${({error})=> error ? '2px solid red' : '1px solid grey'};
    }
    p{
        color:red;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        svg{
            fill:red;
        }
    }
`

export default InputBox