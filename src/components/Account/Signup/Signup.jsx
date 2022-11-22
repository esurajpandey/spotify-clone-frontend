import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function Signup() {

  return (
    <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia, in doloremque laudantium facere voluptatum dolor perferendis qui dignissimos, quae velit quod maiores dolorem aspernatur quia delectus! Temporibus, officia illum!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, odit molestias illum officia nulla minus dicta repudiandae reprehenderit magni numquam, debitis, unde labore assumenda eum officiis odio quis libero repellendus?
        <Link to="/login">Login</Link>
    </Container>
  )
}

const Container = styled.div`
    
`

export default Signup