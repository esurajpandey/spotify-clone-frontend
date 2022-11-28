import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev, } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import music from "../../../assets/Music/Jaihind Ki Senaa - Shershaah 320 Kbps.mp3";
import useAudio from './useAudio';

function Player() {
  const progressBar = useRef();
  const audioPlayer = useRef();
  const [state, setState] = useState(false)
  const [playing, currentTime, play, pause, jump,duration] = useAudio(music);

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
  };

  const handleState = (e) => {
    setState(!state);
  }

  useEffect(() => {
    if (state) {
      play();
    } else {
      pause();
    }
  }, [state])

  const getMinSec = (value) => {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds; // Return is HH : MM : SS
  }


  return (
    <Container>
      <audio
        ref={audioPlayer}
        src={music}
        preload="auto"
        volume
      ></audio>

      <div className="icons">
        <BsShuffle />
        <CgPlayTrackPrev className='size2rem' />
        {playing ? <BsFillPauseCircleFill className='play_pause' onClick={handleState} /> : <BsFillPlayCircleFill className='play_pause' onClick={handleState} />}
        <CgPlayTrackNext className='size2rem' />
        <FiRepeat />
      </div>

      <ProgressBar>
        <span>{getMinSec(currentTime)}</span>
        <input
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
        <span>-{getMinSec(duration - currentTime)}</span>
      </ProgressBar>
    </Container>
  )
}

const Container = styled.div`
  min-width: 300px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:0.3rem;
  .icons{
      display: flex;
      align-items: center;
      justify-content: center;
      gap:1rem;
      .size2rem{
          font-size: 2rem;
      }
      .play_pause{
          font-size: 2.3rem;
      }
      svg{
          color: #b3b3b3;
          transition: 0.2s ease-in-out;
      }
  }

`

const ProgressBar = styled.div`
    display: flex;
    gap:0.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 0 3rem;
    color:white;
    input{
      width: 100%;
      height: 2px;
      background-color: #ad4848;
    }
`
export default Player