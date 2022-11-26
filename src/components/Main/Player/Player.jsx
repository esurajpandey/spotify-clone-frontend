import React,{useState} from 'react'
import styled from 'styled-components'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev, } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import Slider from '../../Element/Slider';

const getMinSec = (ms) => {
  const min = Math.floor(ms / 60000);
  const sec = ((ms % 60000) / 1000).toFixed(0);
  return min + ":" + (sec < 10 ? "0" : "") + sec;
}

function Player() {

  const [playing, setPlaying] = useState(false);
  const [timing, setTiming] = useState(0);
  const [intervalId,setIntervalId] =  useState(0);
  const duration = 10000;

  const [percentage,setPercentage] = useState(0);

  const onChange =  (e) =>{
    setPercentage(e.target.value);
  }


  const handlePlaying = (e) => {
    setPlaying(!playing);
  }

  const handleDuration = (e) => {
    setTiming(prev => +e.target.value);
  }

  return (
    <Container>
      <div className="icons">
                    <BsShuffle />
                    <CgPlayTrackPrev className='size2rem' />
                    {playing ? <BsFillPauseCircleFill className='play_pause' onClick={handlePlaying} /> : <BsFillPlayCircleFill className='play_pause' onClick={handlePlaying} />}
                    <CgPlayTrackNext className='size2rem' />
                    <FiRepeat />
                </div>
                <div className="track_input">
                    <span>{getMinSec(timing)}</span>
                    <Slider
                        onChange={onChange}
                        percentage={percentage}
                        min={0}
                        max={duration}
                        step={1000}
                    />
                    <span>-{getMinSec(duration-timing)}</span>
                </div>
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

  .track_input{
      display: flex;
      gap:0.5rem;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: relative;
      padding: 0 3rem;
      color:white;
      span{
          
      }
  }
`

export default Player