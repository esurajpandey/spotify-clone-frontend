import React, { useState } from 'react'
import styled from 'styled-components';
import { AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai';
import {BiPlay,BiPause} from 'react-icons/bi';

function PlayerButton() {
    const [play,setPlay]= useState(false);
  return (
    <Container>
        {play ? 
        <div className="btns">
            <BiPause onClick={() => setPlay(!play)} className="btn"/>
        </div>
        : 
        <div className="btns">
            <BiPlay onClick={() => setPlay(!play)}  className="btn"/>
        </div> }
    </Container>
  )
}

const Container  = styled.div`
    display: flex;
    border-radius: 50%;

    .btns{
        padding: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #4ee970;
        border-radius: 50%;
        transition: transform .2s;
    }
    .btn{
        transition: 0.5s ease-in-out;
        font-size: 2.5rem;
        fill: #070707;
        border-radius: 50%;
        transition: transform .2s;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover{                                
        .btns{
            transform: scale(1.05);
        }
    }
`
export default PlayerButton