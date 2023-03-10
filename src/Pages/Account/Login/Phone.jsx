import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function Phone() {
  return (
    <Container>
        <Link to=''>
            <span>CONTINUE WITH PHONE NUMBER</span>
        </Link>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    border: 3px solid transparent;
    padding: 1.1rem 0.2rem;
    border-radius: 500px;
    a{
        width: 100%;
        text-decoration: none;
        color:grey;
        font-weight: 500;
        border: 1px solid grey;
        padding: 0.98rem 7rem;
        font-size: 14px;
        line-height: 20px;
        border-radius: 500px;
        letter-spacing: 0.04rem;
        &:hover{
            border: 1px solid black;
        }
    }

    &:focus-within{
        pointer-events: none;
        transition: border-color 300ms ease-in 0.1s;
        border-radius: 500px;
        border: 3px solid black;
    }  
`

export default Phone