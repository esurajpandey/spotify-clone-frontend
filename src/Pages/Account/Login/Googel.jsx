import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FcGoogle}  from 'react-icons/fc';
function Google() {
  return (
    <Container>
        <Link to=''>
            <FcGoogle/>
            <span>CONTINUE WITH GOOGLE</span>
        </Link>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    border: 3px solid transparent;
    padding: 0.18rem 0.2rem;
    border-radius: 500px;
    a{
        width: 100%;
        text-decoration: none;
        color:grey;
        font-weight: 500;
        border: 1px solid grey;
        padding: 0.9rem 7rem;
        font-size: 14px;
        line-height: 20px;
        border-radius: 500px;
        letter-spacing: 0.04rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:0.5rem;
        svg{
            font-size: 1.3rem;
        }
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

export default Google