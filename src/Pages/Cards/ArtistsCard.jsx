import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlayerButton from '../Element/PlayerButton';
import cover from '../../assets/artist.jpeg';

function ArtistCard({artist,playBtn}) {
    return (
        <Container className="card_item">
            <Link to={`/body/${artist.id}`}>
                <div className="card_image">
                    <img src={cover} alt="Spotify" />
                </div>
                <div className='card_info'>
                    <h4 className='title'>{artist.title}</h4>
                    <p>Artist</p>
                </div>
            </Link>
            {
                playBtn && (
                    <ButtonContainer>
                        <PlayerButton/>
                    </ButtonContainer>
                )
            }
        </Container>
    )
}


const ButtonContainer =  styled.div`
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
    background: linear-gradient(transparent,#0a0909);
    border-radius: 4px;
    position: relative;
    transition: 0.8s ease-in-out;
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
                border-radius: 50%;
            }
        }
        .card_info{
            width: 9rem;
            display: flex;
            flex-direction: column;
            padding-top: 1rem;
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
        background: linear-gradient(transparent,#141414);
        ${ButtonContainer}{
            opacity: 1;
            transform:translateY(0px);   
        }
    }
`


export default ArtistCard