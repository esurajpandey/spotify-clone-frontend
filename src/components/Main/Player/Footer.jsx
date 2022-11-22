import React from 'react'
import styled from 'styled-components';
import CurrentTrack from './CurrentTrack';
import Player from './Player';
import Volume from './Volume';

export default function Footer() {
  return (
    <Container>
        <CurrentTrack/>
        <Player/>
        <Volume/>
    </Container>
  )
}

const Container = styled.div`
    /* border : 1px solid red; */
    background-color: #181818;
    position: relative;
    height: 100%;
    width: 100%;
    border-top: 1px solid #282828;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
`;