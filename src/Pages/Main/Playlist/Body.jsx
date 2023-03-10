import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { AiFillClockCircle } from 'react-icons/ai';
import TrackListItem from "../../Element/TrackListItem";
import { useStateProvider } from '../../../utils/StateProvider';
import { reducerCases } from '../../../utils/Constants';

function Body({songs}) {

  const [{currentSong,previousSong,isPlaying,isScroll},dispatch] = useStateProvider();

  const handlePlay = (id) =>{

    const song =  songs.find(item => item?.id === +id)
    let newPlaying;
    const newCur = song;
    const newPrev = currentSong;

    if(newPrev?.id === undefined){
      newPlaying = !isPlaying
    }

    else {
     newPlaying = (newCur?.id !== newPrev?.id) ? true : !isPlaying
    }

    dispatch({type:reducerCases.SET_PREVIOUS_SONG,previousSong: newPrev})
    dispatch({type:reducerCases.SET_CURRENT_SONG,currentSong:newCur})
    dispatch({type:reducerCases.SET_PLAYING,isPlaying: newPlaying})
  }

   
  return (
    <ContainerBody>
    {
      songs && (
        <>
          <div className="lists">
            {
              songs[0]?.id && 
              <Header isScroll={isScroll} isDate={songs[0]?.addedOn}>
                <div className="col">
                    <span>#</span>
                </div>
                <div className="col">
                    <span>TITLE</span>
                </div>
                <div className="col">
                    <span>ALBUM</span>
                </div>
                { songs[0]?.addedOn && <div className="col">
                    <span>DATE ADDED</span>
                </div>}
                <div className="col">
                    <span></span>
                </div>
                <div className="col">
                    <span><AiFillClockCircle /></span>
                </div> 
              </Header>
            }
            <hr className='hrtag'/>
            <div className="tracks">
              {
                songs.map(({ id, title, artists, duration,album,cover,addedOn}, index) => {
                  return (
                    <TrackList>
                      <TrackListItem serialNumber={index + 1}
                        id={id}
                        cover={cover}
                        title={title}
                        singers={artists}
                        album_playlist={album}
                        handlePlay={handlePlay}
                        dateAdded={addedOn}
                        duration={duration}
                        liked={true}
                          />
                    </TrackList>
                  )
                })
              }
            </div>
          </div>
        </>
      )
    }
  </ContainerBody>
  )
}


const TrackList = styled.div`

`
const Header =  styled.div`
    display: grid;
    /* grid-template-columns: 0.3fr 4.5fr 2.3fr 1.8fr 1fr 0.7fr;  */
    grid-template-columns: ${({isDate})=>(!isDate ? '0.3fr 4.5fr 1.25fr 1.8fr 0.7fr' : '0.3fr 4.5fr 2.3fr 1.8fr 1fr 0.7fr')};
    padding-left: 3.1rem;
    padding-right: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
    position: sticky;
    top:4rem;
    color:white;
    background-color: ${({isScroll})=>(isScroll ? '#202020' : 'transparent')};
    .col{
        position: sticky;
        font-size: 0.875rem;
        font-weight: 400;
        color: #b8b5b5;
    }
`
const ContainerBody = styled.div`
  width: 100%;
  height: 100%;
  transition: 4s ease-in-out;
  .tracks{
    height: 100%;
    /* background: linear-gradient(transparent,#1f1d1d); */
    padding-left:2rem;
    padding-right: 1rem;
    padding-bottom: 5rem;
  }
  .hrtag{
    border: 0;
    border-bottom: 1px solid grey;
    margin-bottom: 1rem;
    margin-left: 2rem;
    width: 95%;
  }
`

export default Body