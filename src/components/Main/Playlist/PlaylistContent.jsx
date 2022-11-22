import React from 'react'
import styled from 'styled-components';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { recentContent } from '../Body/HomeContent';
import Card from '../../Cards/Card';

function PlaylistContent() {
    const play = false;
    const songCount = 0;
    return (
        <Container>
            <div className='heading'>
                <h3>Playlists</h3>
            </div>
            <div className='cards'>
                <ul className='card_items'>
                    <li className='liked_songs'>
                        <Link to="/likedSong">
                            <div className="text">
                                <h1>Liked Song</h1>
                                <h4>{`${songCount} liked songs`}</h4>
                            </div>
                        </Link>
                        <div className='play_pause'>
                            {play ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
                        </div>
                    </li>
                    {
                        recentContent.map(item=> {
                            return (
                                <li>
                                    <Card item={item} play={play} playBtn={true}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 2rem;
    padding-top: 1.6rem;
    padding-right: 0.4rem;
    padding-bottom: 8rem;
    .heading{
        h3{
            color:white;
            font-size: 1.5rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
    }
    .card_items{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        gap: 2rem;
        .liked_songs{
            padding: 1rem;
            display: flex;
            width: 25rem;
            height: 16rem;
            justify-content: flex-start;
            align-items: flex-end;
            gap:40%;
            background-image: linear-gradient(to bottom right,blue , #5a5959);
            border-radius: 8px;
            a{
                text-decoration: none;
                color :white;
                display: flex;
                .text{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
            }
            .play_pause{
                opacity: 0;
                transform: translateY(12px);
                transition: transform 0.3s ease-in-out,opacity 0.5s ease-in-out;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                border-radius: 50%;
                background-color: #000000;
                svg{
                    font-size: 3rem;
                    color:black;
                    fill: #349e34;
                    transition: 0.1s ease-in-out;
                    justify-content: flex-end;
                    border: 0;
                    border-radius: 80%;
                }
                &:hover{                                
                    svg{
                        font-size: 3.08rem;  
                    }
                }
            }
            &:hover{
                .play_pause{
                    opacity: 1;
                    transform:translateY(0px);   
                }
            }
        }
    }
`

export default PlaylistContent