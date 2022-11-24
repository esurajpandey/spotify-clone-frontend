import React, { useState } from 'react'
import styled from 'styled-components'
import {BsFillPlayFill,BsPause} from 'react-icons/bs';
import {FaHeart,FaRegHeart} from 'react-icons/fa';

function TrackListItem(props) {
    const {serialNumber,cover,title,singers,album_playlist,dateAdded,duration,handler,liked} = props
    const [isLiked,setLiked] = useState(false);
    const [play,setPlay] = useState(false);

    const playHandle = (e) =>{
        setPlay(!play);
    }

    const handleLike = (e) =>{
        setLiked(!isLiked);
    }
    return (
    <Container>
        <SerialNumber>
            {play ? <BsPause className='playBtn' onClick={playHandle}/> : <BsFillPlayFill className='playBtn' onClick={playHandle}/>}
            <span>{serialNumber}</span>
        </SerialNumber>
        <Cover>
            <img src={cover} alt="" />
        </Cover>
        <Info>
            <a href='/'>{title}</a>
            <a href='.'>{singers.join(',')}</a>
        </Info>
        <AlbumPlaylist>
            <a href='.'>{album_playlist}</a>
        </AlbumPlaylist>
        <DateAdded>
            <span>{dateAdded}</span>
        </DateAdded>

        <Heart>
            {isLiked ? <FaHeart className='filled' onClick={handleLike}/> :<FaRegHeart onClick={handleLike}/>}
        </Heart>

        <Duration>
            {`3:40`}
        </Duration>
    </Container>
  )
}


const SerialNumber = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    .playBtn{
        opacity: 0;
        position: absolute;
        color : white;
        font-size: 1.5rem;
    }
`
const Cover = styled.div`
    img{
        width: 2.8rem;
        height: 2.8rem;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap:0.5rem;
`
const AlbumPlaylist = styled.div`
    
`
const DateAdded = styled.div`
    
`
const Heart = styled.div`
    svg{
        color: inherit;
        font-size: 1.2rem;
    }
    .filled{
        fill: #6edf41;
    }
`
const Duration = styled.div`
    
`
const Container = styled.div`
    color:#e0d7d7;
    a{
        text-decoration: none;
        color:inherit;
        &:hover{
            text-decoration: underline;
        }
    }
    display: grid;
    grid-template-columns: 0.5fr 0.8fr 5fr 3fr 2.5fr 1fr 0.8fr;
    align-items: center;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    &:hover{
        background : linear-gradient(grey,#161616);
    }

    &:hover ${SerialNumber}{
        span{
            opacity: 0;
        }
        .playBtn {
            opacity: 1;
        }
    }
`
export default TrackListItem