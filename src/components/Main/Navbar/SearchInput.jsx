import React from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
function Search() {
    return (
        <Container>
            <FaSearch />
            <input type="text" placeholder='Artists, songs, or podcasts' />
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    width: 100%;
    padding: 0.2rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap:0.5rem;
    z-index: 2;
    input{
      border: none;
      height: 2rem;
      width: 100%;
      &:focus{
        outline: none;
      }
    }
`
export default Search