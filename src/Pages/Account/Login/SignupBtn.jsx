import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function SignupBtn({path}) {
  return (
    <Container>
        <Link to={path}>
            <span>SIGN UP FOR SPOTIFY</span>
        </Link>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    border: 3px solid transparent;
    padding: 0.98rem 0.2rem;
    border-radius: 500px;
    cursor: pointer;
    a{
        width: 100%;
        text-decoration: none;
        color:grey;
        font-weight: 500;
        border: 1px solid grey;
        padding: 0.87rem 7rem;
        font-size: 14px;
        line-height: 20px;
        border-radius: 500px;
        letter-spacing: 0.27rem;
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

export default SignupBtn
