import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
function NavBar() {
  return (
    <Container>
        Acccount
        <Link to="/edit">Edit account</Link>
        <Link to="/changePassword">Change Password</Link>
        <Link to="/Setting">Setting</Link>
        <Link to="/privacy">Privacy</Link>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;

`

export default NavBar