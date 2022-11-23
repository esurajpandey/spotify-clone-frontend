import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Button(props) {
  return (
    <Container>
        <Link to={props?.path}>
            <span>{props.text}</span>
        </Link>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border:0;
    border-radius: 5rem;
    background-color: white;
    a{
        /* padding-top: 0.98rem;
        padding-bottom:0.98rem;
        padding-left: 2rem;
        padding-right: 2rem; */
        padding: 0.8rem 2rem;
        text-decoration: none;
        span{
            font-size: 1rem;
            color : #080808;
            font-weight: 700;
        }
    }
    transition: 0.1s ease-in-out;
    &:hover{
            scale: 1.03;
    }
`

export default Button