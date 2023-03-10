import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillClockCircle } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { listenForOutsideClicks } from './helper/TrackBody';


function TrackList({ headerBg, trackList,type }) {
    const [open, setOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const [listening, setListening] = useState(false);
    const menuRef = useRef(null);
    

    const getMinSec = (ms) => {
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? "0" : "") + sec;
    }
    const playTrack = (id, name, artists, image, context_uri, track_number) => {

    }

    const getDay = (date) => {
        const added = new Date(date);
        const now = new Date();
        const diff = Math.round(Math.abs((now - added) / (1000 * 3600 * 24)));
        return diff;
    }

    useEffect(() => {
        listenForOutsideClicks(listening, setListening, menuRef, setOpen);
    }, []);

    return (
        <Container>
            {trackList &&
                <div className="lists">
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
                            trackList.map(({ id, name, artists, duration, album, added }, index) => {
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
                </div>
            }
        </Container>
    )
}

const Container = styled.div`
    padding-left: 2rem;
    padding-top: 1.6rem;
    padding-right: 0.4rem;
    padding-bottom: 10rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    height: 100%;
    .lists{
        display: flex;
        flex-direction: column;
        position: relative;
        .header_row{
            display: grid;
            grid-template-columns : 0.2fr 2fr 2fr 1.4fr 0.18fr;
            color: #dddcdc;
            margin: 1rem 0 0 0;
            width: 100%;
            position: sticky;
            top: 11vh;
            padding: 0.8rem 1.8rem;
            transition: 0.3s ease-in-out;
            background-color: ${({ headerBg }) => headerBg ? "#000000dc" : "#050505dc"};
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
            grid-template-columns : 0.2fr 2fr 2fr 1.4fr 0.18fr;
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