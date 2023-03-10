import React, { useEffect } from 'react'
import styled from 'styled-components'
import heart from '../../../assets/svg/heart.svg';
import { BsDot } from 'react-icons/bs';
import {songs} from './HomeContent';
import Body from '../Playlist/Body';

function LikedSong() {
  const playlistData = {};
  playlistData.img = heart;
  const count = 1;
  const user = {};
  const tracks = {};
  const songData = songs.filter(song => song?.loved === true);
  useEffect(()=>{
    
  },[])

  return (
    <Container>
      <TopContainer>
        <div className='heart_image'>
          <img src={heart} alt="" />
        </div>
        <DetailsContainer>
          <h4>PLAYLIST</h4>
          <h1>Liked Songs</h1>
          <div className="title_songCount">
            <span>{user?.name ?? 'Suraj Pandey'}</span>
            <span><BsDot />{`${count} songs`}</span>
          </div>
        </DetailsContainer>
      </TopContainer>
      <Body songs={songData}/> 
    </Container>
  )
}
const Container = styled.div`
  min-width: 75vw;
  width: 100%;
  height: 100%;
  overflow: hidden                      ;
  /* background: linear-gradient(transparent, #004d80); */
  padding-bottom: 10rem;
`


const TopContainer = styled.div`
    height: 18rem;
    display: flex;
    gap:1.4rem;
    padding-left: 0rem;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 1rem;
    .heart_image{
      border: 1px solid green;
      width: 14rem;
      height: 14rem;
      padding: 4rem;
      border: 0;
      background: linear-gradient(#a7a4a4, #004d80);
      img{
        width: 100%;
      }
    }
`

const DetailsContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:white;
  h1{
    color:inherit;
    margin: 0;
    padding: 0;
    font-size: 6rem;
    font-weight: bold;
  }
  .title_songCount{
    position: relative;
    top: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 700;
    span{
      display: flex;
      align-items: center;
    }
  }
`

const FindSongContainer = styled.div`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:2.5rem;
  color:#f5e7e7;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(#004d80, #004d80);
  padding-left: 2rem;
  padding-right: 1rem;
  h2{
    font-size: 1.95rem;
  }
  .line{
    width: 100%;
    height: 12rem;
    border-top:1px solid grey;
    position: relative;
    top:1rem;
  }
`

const TrackList = styled.div`
  padding-left:2rem;
  padding-right: 1rem;
`
export default LikedSong