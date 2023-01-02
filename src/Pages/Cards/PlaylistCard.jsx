import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlayerButton from '../Element/PlayerButton';
import {RiMusic2Line} from 'react-icons/ri';

function PlaylistCard({ playlist, playBtn }) {
    return (
        <Container className="card_item shadow">
            <Link to={`/spotify/body/${playlist?.id}`}>
                <div className="card_image shadow">
                    {
                        playlist?.cover ? 
                        <img src={playlist?.cover} alt="Spotify" className='image' />: 
                        <RiMusic2Line className='no_image'/>
                    }
                </div>
                <div className='card_info'>
                    <h4 className='title'>{playlist?.title}</h4>
                    <p>{playlist?.description}</p>
                </div>
            </Link>
            {
                playBtn && (
                    <ButtonContainer>
                        <PlayerButton />
                    </ButtonContainer>
                )
            }
        </Container>
    )
}


const ButtonContainer = styled.div`
    opacity: 0;
    position: absolute;
    top:6rem;
    left:6.5rem;
    transform: translateY(20px);
    transition: transform 0.4s ease-in-out,opacity 0.5s ease-in-out;
`
const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 11rem;
    height: 16rem;
    padding:1rem;
    background: linear-gradient(transparent,#181818);
    border-radius: 4px;
    position: relative;
    transition: all 0.5s ease;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease-in-out;
        .card_image{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 9.2rem;
            height: 9.2rem;
            background-color: #333333;
            border-radius:0.2rem;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

            .image{
                width: 9.2rem;
                height: 9.2rem;
            }
            .no_image{
                font-size: 4.2rem;
                fill: #a19898;
            }

        }
        .card_info{
            width: 9rem;
            display: flex;
            flex-direction: column;
            padding-top: 1rem;
            transition: 0.3s ease-in;
            h4{
                padding-bottom: 0.6rem;
                color:white;
            }
            p{
                color:#ddd6d6;
                font-size: 0.875rem;
            }
        }

    }
    
    &:hover{
        transition: all 0.3s ease;
        background: #2c2b2b;
        ${ButtonContainer}{
            opacity: 1;
            transform:translateY(0px);   
        }
    }
`


export default PlaylistCard