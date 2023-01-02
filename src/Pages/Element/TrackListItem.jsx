import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillPlayFill, BsPause } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';
import { Link } from 'react-router-dom';

function TrackListItem(props) {
    const { serialNumber, id, cover, title, singers, album_playlist, dateAdded, duration, handlePlay, liked } = props
    const [isLiked, setLiked] = useState(false);
    const addedDate = dateAdded ? true : false;
    const [{ isPlaying, currentSong }] = useStateProvider();

    console.log(props);
    const handleLike = (e) => {
        setLiked(!isLiked);
    }

    const getMinSec = (ms) => {
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? "0" : "") + sec;
    }

    const getDays = (added) => {
        const now = new Date();
        const add = new Date(added);
        const diffTime = Math.abs(now - add);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

        let seconds = Math.floor(diffTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        let res;
        if(seconds < 60){
            res = seconds + " seconds ago";
        }else if(seconds > 60 && minutes < 60){
            res = minutes + " minutes ago";
        }else if(minutes > 60 && hours < 24){
            res = hours +  (hours === 1  ? " hour ago" : " hours ago");
        }else if(hours > 24){
            res =  diffDays + (diffDays === 1 ? " day ago" :  " days ago");
        }
        return res;
    }


    const redirectToActorPage = (id) =>{
        
        alert(id);
    }

    return (
        <Container addedDate={addedDate} >
            <SerialNumber onClick={() => handlePlay(id)}>

                {(currentSong?.id === id && isPlaying) ? <BsPause className='playBtn' /> : <BsFillPlayFill className='playBtn' />}
                <span>{serialNumber}</span>

            </SerialNumber>
            <Cover>
                <img src={cover} alt="" />
            </Cover>
            <Info>
                <a href='/'>{title}</a>
                <div className='singers'>
                    {
                        singers.map(item => {
                            return (
                                <span onClick={()=>redirectToActorPage(item?.id)}>
                                    {item?.name}
                                </span>
                            )
                        })
                    }
                </div>
            </Info>
            <AlbumPlaylist>
                <a href='.'>{album_playlist?.title}</a>
            </AlbumPlaylist>
            {
                props.dateAdded && (
                    <DateAdded>
                        <span>{getDays(dateAdded)}</span>
                    </DateAdded>
                )
            }

            <Heart>
                {liked ? <FaHeart className='filled' onClick={handleLike} /> : <FaRegHeart onClick={handleLike} />}
            </Heart>

            <Duration>
                <span>{getMinSec(duration)}</span>
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
        span{
            font-size: 0.875rem;
            &:hover{
                text-decoration: underline;
            }
        }
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
    opacity: 0;
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
    grid-template-columns: ${({ addedDate }) => addedDate ? '0.5fr 0.8fr 5fr 3fr 2.5fr 1fr 0.8fr' : '0.6fr 0.9fr 7.7fr 4.8fr 1fr 1.1fr'};

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
    &:hover ${Heart}{
        opacity: 1;
    }
`
export default TrackListItem