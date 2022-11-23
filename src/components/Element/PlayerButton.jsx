import React, { useState } from 'react'
import styled from 'styled-components';
import { AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai';
function PlayerButton() {
    const [play,setPlay]= useState(false);
  return (
    <Container>
        {play ? <AiFillPauseCircle onClick={() => setPlay(!play)} className="btn"/> : <AiFillPlayCircle onClick={() => setPlay(!play)}  className="btn"/>}
    </Container>
  )
}

const Container  = styled.div`
    display: flex;
    border-radius: 50%;
    .btn{
        transition: 0.5s ease-in-out;
        font-size: 3.5rem;
        /* background-color: red; */
        fill: #60d660;
        border-radius: 50%;
        transition: transform .2s;
    }
    &:hover{                                
        .btn{
            transform: scale(1.05);
        }
    }
`
export default PlayerButton