import React from 'react'
import styled from 'styled-components'

function TextButton({ text, bg, fg, onClick, type }) {
    return (
        <Container bg={bg} fg={fg} >
            <button onClick={onClick} type={type} >
                <span>{text}</span>
            </button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border: 3px solid transparent;
    button{
        border-radius: 500px;
        color: inherit;
        font-weight: 700;
        box-sizing: border-box;
        font-family: spotify-circular, Helvetica, Arial, sans-serif;
        -webkit-tap-highlight-color: transparent;
        font-size: 0.875rem;
        display: inline-block;
        text-align: center;
        align-self: center;
        padding: 0.8rem 1.5rem;
        border: 0;
        background-color: ${({bg}) => (bg ? bg : 'transparent')};
        span{
            letter-spacing: 2px;
            text-transform: uppercase;
            line-height: 1.25rem;
        }
    }
    &:focus-within{
        pointer-events: none;
        transition: border-color 300ms ease-in 0.1s;
        border-radius: 500px;
        border: 3px solid black;
    }  
`

export default TextButton