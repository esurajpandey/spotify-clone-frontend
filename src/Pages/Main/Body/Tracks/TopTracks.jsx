import React,{useRef,useState} from 'react'
import styled from 'styled-components'
import {songs} from '../HomeContent';
import { AiFillClockCircle } from 'react-icons/ai';
import TrackListItem from '../../../Element/TrackListItem';
import mypic from '../../../../assets/mypic.jpg';
import { useStateProvider } from '../../../../utils/StateProvider';
function TopTracks() {
    
    const[{isScroll}] =   useStateProvider();
    console.log('Hello',isScroll);
    const listChangeHandler =  () =>{

    }
  return (
    <Container isScroll={isScroll}>
        <Top>
            <h2>Top tracks this month</h2>
            <p>Only visible to you</p>
        </Top>
        <Header>
            <div className="col">
                <span>#</span>
            </div>
            <div className="col">
                <span>TITLE</span>
            </div>
            <div className="col">
                <span>ALBUM</span>
            </div>
            <div className="col">
                <span><AiFillClockCircle /></span>
            </div> 
        </Header>
        <hr/>
        <Lists>
            <ul>
                {
                    songs.map(item => {
                        return (
                            <li key={item.id} >
                                <TrackListItem
                                    serialNumber={item.id}
                                    cover={mypic}
                                    title={item?.name}
                                    singers={item?.artists}
                                    album_playlist={item?.album}
                                    duration={item.duration}
                                    handler= {listChangeHandler}
                                    liked= {false}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </Lists>
    </Container>
  )
}

const Header =  styled.div`
    display: grid;
    grid-template-columns: 0.5fr 7.8fr 5.4fr 1fr;
    padding-left: 3.8rem;
    padding-right: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;

    position: sticky;
    top:4rem;
    z-index: 10;
    color:white;
    &:hover{
        background-color: #353232;
    }
    .col{
        position: sticky;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    ${Header}{
        background: ${({ isScroll }) => (isScroll ? "#151616" : 'none')};
        border-bottom: ${({ isScroll }) => (isScroll ? "1px solid grey" : 'none')};
    }
    hr{
        padding: 0;
        margin: 0;
        margin-left: 3rem;
        margin-right: 1rem;
        position: sticky;
        border: 0;
        border-bottom: 1px solid grey;
        color:grey;
        top: 0rem;
    }
`



const Lists = styled.div`
    position: sticky;
    padding-left: 3rem;
    padding-right: 1rem;
    ul{
        list-style-type:none;
    }
    padding-bottom:20rem ;
`

const Top =  styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    gap:0.4rem;
    padding-left: 3rem;
    padding-right: 1rem;
    margin-bottom: 1rem;
    p{
        color:#c5c2c2;
        font-size: 0.9rem;
        font-family: inherit;
        font-weight: 500;
        word-spacing: 2px;
    }
`

export default TopTracks