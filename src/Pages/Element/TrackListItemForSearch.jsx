import React, { useState } from 'react';
import styled from 'styled-components';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';

import { BsFillPlayFill, BsPause } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';

function TrackListItemForSearch(props) {
    const { serialNumber, id, cover, title, singers, album_playlist, dateAdded, duration, handlePlay, liked } = props

    const [isLiked, setLiked] = useState(false);
    const addedDate = dateAdded ? true : false;
    const [{ isPlaying, currentSong }] = useStateProvider();

    const handleLike = (e) => {
        setLiked(!isLiked);
    }

    const getMinSec = (ms) => {
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? "0" : "") + sec;
    }

    return (
        <Container addedDate={addedDate} >
            <Cover onClick={() => handlePlay(id)}>
                {(currentSong?.id === id && isPlaying) ? <BsPause className='playBtn' /> : <BsFillPlayFill className='playBtn' />}
                <img src={cover} alt="" />
            </Cover>
            <Info>
                <a href='/'>{title}</a>
                <a href='.' className='singers'>{singers.join(',')}</a>
            </Info>
            <AlbumPlaylist>
                <a href='.'>{album_playlist?.title}</a>
            </AlbumPlaylist>
            <Heart>
                {liked ? <FaHeart className='filled' onClick={handleLike} /> : <FaRegHeart onClick={handleLike} />}
            </Heart>

            <Duration>
                <span>{getMinSec(duration)}</span>
            </Duration>
            <MenuOption>
                <HiOutlineDotsHorizontal/>
            </MenuOption>
        </Container>
    )
}


const MenuOption = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    svg{
        font-size: 1.5rem;;
    }
`
const Cover = styled.div`
    display: flex;
    position: relative;
    img{
        width: 2.5rem;
        height: 2.5rem;
    }
    .playBtn{
        opacity: 0;
        position: absolute;
        top:0.5rem;
        left:0.5rem;
        color : white;
        font-size: 1.4rem;
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
const Heart = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    svg{
        color: inherit;
        font-size: 1rem;
    }
    .filled{
        fill: #6edf41;
    }
`
const Duration = styled.div`
    display: flex;
    align-items: center;
    span{
        font-size: 0.9rem;
    }
`
const Container = styled.div`
    width: 100%;
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
    grid-template-columns: 1fr 5fr 2fr 1fr 0.8fr 0.5fr;
    align-items: center;
    padding: 0.6rem 0.6rem;
    border-radius: 0.3rem;
    &:hover{
        background :#383737;
    }

    &:hover ${Cover}{
        span{
            opacity: 0;
        }
        .playBtn {
            opacity: 1;
        }
    }
    &:hover ${Heart}{
        opacity: 1;
    }
`

export default TrackListItemForSearch