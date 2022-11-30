import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev, } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { useStateProvider } from '../../../utils/StateProvider';
import { reducerCases } from '../../../utils/Constants';

function Player({track}) {
  const progressBar = useRef();
  const audioPlayer = useRef();
  const animationRef = useRef();
  const [duration,setDuration] = useState(0);
  const [currentTime,setCurrentTime] = useState(0);
  const [progressWidth,setProgressWidth] = useState(0);
  const [{isPlaying,currentSong,previousSong},dispatch] = useStateProvider();


  useEffect(() => {
    const seconds = audioPlayer?.current.duration;
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata,audioPlayer?.current?.readyState,track]);

  const getMinSec = (sec) => {
    const mins = Math.floor(sec/60);
    const retMin = mins < 10  ? `0${mins}` : `${mins}`;
    
    const seconds = Math.floor(sec%60);
    const retSec = seconds < 10  ? `0${seconds}` : `${seconds}`;

    return `${retMin} : ${retSec}`;
  }

  const handleState = (e) => {
    const prev =  isPlaying;
    console.log(previousSong?.id, isPlaying ,currentSong?.id);
    dispatch({type:reducerCases.SET_PLAYING,isPlaying: !prev});
  }


  useEffect(()=>{
    console.log(`${currentSong?.id} - ${previousSong?.id} is playing ${isPlaying}` ) ;
    if(isPlaying){
      audioPlayer?.current.play();
      animationRef.current =  requestAnimationFrame(whilePlaying);
    }else{
      audioPlayer?.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  },[currentSong, previousSong, isPlaying])


  useEffect(()=>{
    
  },[isPlaying]);

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer?.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () =>{
    setProgressWidth((progressBar.current.value / duration) * 100);
    setCurrentTime(progressBar?.current.value);
  }





  return (
    <Container>
      <audio
        ref={audioPlayer}
        src={currentSong?.track}
        preload="metadata"
        volume
      ></audio>

      <div className="icons">
        <BsShuffle />
        <CgPlayTrackPrev className='size2rem' />
        {isPlaying ? <BsFillPauseCircleFill className='play_pause' onClick={handleState} /> : <BsFillPlayCircleFill className='play_pause' onClick={handleState} />}
        <CgPlayTrackNext className='size2rem' />
        <FiRepeat />
      </div>

      <ProgressBar>
        <span className='currentTime'>{getMinSec(currentTime)}</span>
        <Progress
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeProgress}
          progressWidth={progressWidth}
        />
        <span className='left_time'>-{
          duration && !isNaN(duration) && getMinSec(duration) ?
          getMinSec(audioPlayer?.current.duration - currentTime)
          :"00:00"
        }</span>
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

    span{
      width: 20%;
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
    }
`
const Progress =  styled.input`
  width: 100%;
  position: relative;
  height: 5px;
  outline: none;
  border: none;
  appearance: none;
  border-radius: 10px;
  background-color:rgba(255,255,255,0.1);
  cursor: pointer;
  ::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background:#848484;
    width: ${({progressWidth})=>(progressWidth ? `${progressWidth}%` : `0%`)};
    border-radius: 10px;
    height: 100%;
    z-index: 2;
    transition: all 0.3s ease;
  }

  ::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 15px;
    height: 15;
    border-radius: 50%;
    border: none;
    outline: none;
  }
`

export default Player