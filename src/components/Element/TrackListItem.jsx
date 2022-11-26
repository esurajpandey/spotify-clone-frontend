import React, { useState } from 'react'
import styled from 'styled-components'
import {BsFillPlayFill,BsPause} from 'react-icons/bs';
import {FaHeart,FaRegHeart} from 'react-icons/fa';

function TrackListItem(props) {
    const {serialNumber,cover,title,singers,album_playlist,dateAdded,duration,handler,liked} = props
    const [isLiked,setLiked] = useState(false);
    const [play,setPlay] = useState(false);
    const addedDate =  dateAdded ? true : false;
    const playHandle = (e) =>{
        setPlay(!play);
    }

    const handleLike = (e) =>{
        setLiked(!isLiked);
    }

    return (
    <Container addedDate={addedDate}>
        <SerialNumber onClick={playHandle}>
            {play ? <BsPause className='playBtn' onClick={playHandle}/> : <BsFillPlayFill className='playBtn' onClick={playHandle}/>}
            <span>{serialNumber}</span>
        </SerialNumber>
        <Cover>
            <img src={cover} alt="" />
        </Cover>
        <Info>
            <a href='/'>{title}</a>
            <a href='.' className='singers'>{singers.join(',')}</a>
        </Info>
        <AlbumPlaylist>
            <a href='.'>{album_playlist}</a>
        </AlbumPlaylist>
        {
            props.dateAdded && (
                <DateAdded>
                    <span>{dateAdded}</span>
                </DateAdded>
            )
        }

        <Heart>
            {liked ? <FaHeart className='filled' onClick={handleLike}/> :<FaRegHeart onClick={handleLike}/>}
        </Heart>

        <Duration>
            <span>{duration}</span>
        </Duration>
    </Container>
  )
}


const SerialNumber = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    span{
        padding-left: 5px;
    }
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
    width: 100%;
    .singers{
        color: #afa8a8;
    }
    overflow: hidden;
    a{
        width: fit-content;
    }
`



const AlbumPlaylist = styled.div`
    a{
        font-size: 0.9rem;
    }
`
const DateAdded = styled.div`
    span{
        font-size: 0.9rem;
    }
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
    span{
        font-size: 0.9rem;
    }
`
const Container = styled.div`
    color:#e0d7d7;
    a{
        text-decoration: none;
        font-size: 0.875rem;
        color:inherit;
        &:hover{
            text-decoration: underline;
        }
    }
    cursor: default;
    transition: 0.3s ease-in-out;
    display: grid;
    /* grid-template-columns: 0.5fr 0.8fr 5fr 3fr 2.5fr 1fr 0.8fr; *///for nomal
    grid-template-columns: ${({addedDate})=> addedDate ? '0.5fr 0.8fr 5fr 3fr 2.5fr 1fr 0.8fr' : '0.6fr 0.9fr 7.7fr 4.8fr 1fr 1.1fr'};

    // grid-template-columns: 0.6fr 0.9fr 7.7fr 4.8fr 1fr 1.3fr;
    align-items: center;
    padding: 0.3rem 0.8rem;
    border-radius: 0.3rem;
    &:hover{
        background :#242323;
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