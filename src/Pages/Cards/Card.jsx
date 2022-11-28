import React from 'react'
import styled from 'styled-components';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Card({ item, play,playBtn }) {
    return (
        <Container className="card_item">
            <Link to={`/body/${item.id}`}>
                <div className="card_image">
                    <img src={require('../../assets/femalVersion.jpg')} alt="Spotify" />
                </div>
                <div className='card_info'>
                    <h4 className='title'>{item?.title}</h4>
                    <span className='info_details'>
                        {item?.description}
                    </span>
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
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    width: 11rem;
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
            span{
                display: flex;
                flex-direction: column;
                width: 100%;
                color:grey;
                font-family:Arial, Helvetica, sans-serif;
                font-size: 0.95rem;
                justify-content: center;
                align-items: center;
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