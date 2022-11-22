import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillPauseCircle, AiFillPlayCircle, AiFillClockCircle } from 'react-icons/ai';
import { itemContent } from './HomeContent';

import DropdownMenu from '../../Element/DropdownMenu';

function TrackList() {
    const [play, setPlay] = useState(false);
    const trackList = itemContent[0].songs;
    console.log(trackList);

    const getMinSec = (ms) => {
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? "0" : "") + sec;
    }
    const playTrack = (id, name, artists, image, context_uri, track_number) => {

    }
    const getDay = (date) => {
        const added = new Date(date);
        console.log(date);
        const now = new Date();
        console.log(now);
        const diff = Math.round(Math.abs((now - added) / (1000 * 3600 * 24)));
        return diff;
    }

    const [open, setOpen] = useState(false);

    return (
        <Container>

            <div className='top_header'>
                <div className='play_pause'>
                    {play ? <AiFillPauseCircle onClick={() => setPlay(!play)} /> : <AiFillPlayCircle onClick={() => setPlay(!play)} />}
                </div>
                <div className="menu">
                    <DropdownMenu />
                </div>
            </div>

            {/* <div className="lists">
                <div className="header_row">
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
                        <span>DATE ADDED</span>
                    </div>
                    <div className="col">
                        <span><AiFillClockCircle /></span>
                    </div>
                </div>
                <div className="tracks">
                    {
                        trackList.map(({ id, name, artists, duration, album,added }, index) => {
                            return (
                                <div className='row' key={id} onClick={() => playTrack(id, name, artists)}>
                                    <div className="col index">
                                        <span>{index + 1}</span>
                                        <BsFillPlayFill />
                                    </div>
                                    <div className="col detail">
                                        <div className="image">
                                            <img src={require('../../../assets//femalVersion.jpg')} alt="track" />
                                        </div>
                                        <div className="info">
                                            <span className='name'>{name}</span>
                                            <span>{artists}</span>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <span>{album}</span>
                                    </div>
                                    <div className="col">
                                        <span>{getDay(added)} days ago</span>
                                    </div>
                                    <div className="col">
                                        <span>{getMinSec(duration)} </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
        </Container>

    )
}

const Container = styled.div`
    padding-left: 2rem;
    padding-top: 1.6rem;
    padding-right: 0.4rem;
    padding-bottom: 50rem;
    margin-top: 2rem;
    background-color: #494b4d;
    display: flex;
    flex-direction: column;
    gap:1rem;
    .top_header{
        display: flex;
        position: relative;
        /* border: 1px solid red; */
        align-items: center;
        width: 100%;
        gap:1.7rem;
        .play_pause{
            display: flex;
            border-radius: 50%;
            svg{
                transition: 0.5s ease-in-out;
                font-size: 3.8rem;
                fill: #60d660;
                border-radius: 50%;
                transition: transform .2s;
            }
            &:hover{                                
                svg{
                    transform: scale(1.05);
                }
            }
        }
    }

    .lists{
        display: flex;
        flex-direction: column;
        position: relative;
        .header_row{
            display: grid;
            grid-template-columns : 0.2fr 2fr 2fr 1.4fr 0.18fr;
            color: #dddcdc;
            margin: 1rem 0 0 0;
            position: sticky;
            top: 15vh;
            padding: 1rem 1.8rem;
            transition: 0.3s ease-in-out;
            background-color: ${({ headerBg }) => headerBg ? "#000000dc" : "none"};
        }
        .tracks{
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        margin-bottom:10rem;
        .row{
            width: 100%;
            padding: 1rem 1rem;
            display: grid;
            /* grid-template-columns : 0.3fr 3fr 2fr 0.1fr; */
            grid-template-columns : 0.2fr 2fr 2fr 1.4fr 0.18fr;
            /* grid-template-columns : 0.3fr 2.9fr 2fr 0.1fr; */
            .index{
            svg{
                font-size: 1.2rem;
                display: none;
            }
            }
            &:hover{
            background: rgba(143, 139, 139, 0.5);
            border-radius: 5px;
            /* opacity: 0.5; */
            .index{
                span{
                display: none;
                }
            }
            svg{
                display: block;
            }
            }

            .col{
                display: flex;
                align-items: center;
                color: #dddcdc;
                img{
                    height: 40px;
                }
            }
            .detail{
                display: flex;
                gap:1rem;
                .info{
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
  }
`

export default TrackList