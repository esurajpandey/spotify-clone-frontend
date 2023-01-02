import React from 'react'
import styled from 'styled-components'
import imgSrc from '../../assets/femalVersion.jpg';
import PlayerButton from './PlayerButton';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function BigSongContainer() {
    const artists = ['Lata Mangeshkar','Heartlock'];
    return (
        <BigContainer>
            <div className='image'>
                <img src={imgSrc} alt="" />
            </div>
            <div className="title">
                {`Mera Dil Ye Pukare - Tu...`}
            </div>
            <div className="artists">
                <ul>
                    {
                        artists.map((item,index) => {
                            return (
                                <li key={index}>
                                    <Link to={``}>
                                        <span>{item}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li className='song-text'>
                        <span>SONG</span>
                    </li>
                </ul>
            </div>

            <div className="playerBtn">
                <PlayerButton/>
            </div>
        </BigContainer>
    )
}

const BigContainer = styled.div`
    width: 25rem;
    height: 14rem;
    padding: 1.2rem;
    font-family: 'product-sans-regular',Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    gap:1.2rem;
    border-radius: 4px;
    transition: 0.5s all ease;
    background-color: #222222;
    .image{
        img{
            width: 5.5rem;
            height: 5.5rem;
            border-radius: 4px;
        }
    }

    .title{
        color:white;
        width: 100%;
        font-size: 1.8rem;
        font-family: 'product-sans',Arial, Helvetica, sans-serif;
    }
    .artists {
        ul{
            display: flex;
            list-style-type: none;
            align-items: center;
            gap:0.4rem;
            a{
                text-decoration: none;
                span{
                    color:#c9c9c9;
                    line-height: 0.5rem;;
                    font-size: 0.875rem;
                    letter-spacing: 0.04rem;
                }
            }
        }
        .song-text{
            padding: 0.3rem 0.8rem;
            background-color: #4e4848;
            border-radius: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                font-family: 'product-sans',Arial, Helvetica, sans-serif;
                font-family: 600;
                font-size: 0.75rem;
                color:white;
                letter-spacing: 0.04rem;
            }
        }
    }

    .playerBtn{
        position: absolute;
        top:9.7rem;
        left:20.8rem;
        opacity: 0;
        transform: translateY(12px);
        transition: transform 0.3s ease-in-out,opacity 0.5s ease-in-out;

    }

    &:hover{
        transition: 0.5s all ease;
        background-color: #353333;
        .playerBtn{
            opacity: 1;
            transform:translateY(0px);   
        }
    }
`




export default BigSongContainer