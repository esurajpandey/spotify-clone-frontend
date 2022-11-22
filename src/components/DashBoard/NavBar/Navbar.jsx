import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
function Navbar() {
  return (
    <Container>
        <Link to="/premium">Premium</Link>
        <Link to="/support">Support</Link>
        <Link to="/download">Download</Link>
        <Link to="/profile">Profile</Link>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    a{
        text-decoration: none;
        font-size:2rem;
    }
`
export default Navbar