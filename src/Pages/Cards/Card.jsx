import React from 'react'
import styled from 'styled-components';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import {RiMusic2Line} from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Card({ playlist, play, playBtn }) {
    return (
        <Container className="card_item">
            <Link to={`/spotify/body/${playlist?.id}`}>
                <div className="card_image">
                    {
                        playlist?.cover  ?
                        <img src={playlist?.cover} alt="Spotify" />
                        :
                        <div className='music_icon'>
                                        <RiMusic2Line />
                        </div>

                    }
                </div>
                <div className='card_info'>
                    <h4 className='title'>{playlist?.title}</h4>
                    {
                        playlist?.description ?
                            <span className='descript'>
                                {playlist?.description}
                            </span>
                            :
                            <span className='info_details'>
                            {`By ${playlist?.user}`}
                            </span>
                    }
                </div>
            </Link>
            {
                playBtn && (
                    <div className='play_pause'>
                        {play ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
                    </div>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 11rem;
    height: 16rem;
    padding:1rem;
    background-color: #181717;
    border-radius: 4px;
    position: relative;

    &:hover{
        background-color: #1f1d1d;
        .play_pause{
            opacity: 1;
            transform:translateY(0px);                                
        }
    }
    a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card_image{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 9rem;
                height: 9rem;
                border-radius: 4px;
            }
            .music_icon{
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                width: 9rem;
                height: 9rem;
                background-color: #2e2c2c;
                svg{
                    color: #a09e9e;
                    font-size : 4.2rem ;
                    font-weight: 100;
                }
            }
        }
        .card_info{
            width: 9rem;
            display: flex;
            flex-direction: column;
            padding-top: 1rem;
            gap:0.7rem;
            h4{
                color:white;
            }
            span{
                display: flex;
                flex-direction: column;
                width: 100%;
                color:#cec5c5;
                font-family:Arial, Helvetica, sans-serif;
                font-size: 0.85rem;
                justify-content: center;
                align-items: flex-start;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .descript{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 0.8rem;
            }
        }
    }
    .play_pause{
        opacity: 0;
        transform: translateY(20px);
        transition: transform 0.3s ease-in-out,opacity 0.5s ease-in-out;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        left:6.6rem;
        top:6.6rem;
        
        svg{
            font-size: 3rem;
            color:black;
            fill: #349e34;
            transition: 0.1s ease-in-out;
            justify-content: flex-end;
            background-color: black;
            border-radius: 50%;
            border: 0;
        }
        &:hover{                                
            svg{
                font-size: 3.08rem;
            }
        }
    }
`
export default Card