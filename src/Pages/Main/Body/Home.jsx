import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';

import { recentContent, cardsContent } from './HomeContent';
import Card from '../../Cards/Card';
import ItemBody from './ItemBody';
function Home() {
    const play = false;
    const recent =  recentContent.slice(0,6);
    const [message,setMessage] = useState("");
    const currHrs =  new Date().getHours();


    useEffect(()=>{
        if (currHrs < 12)
            setMessage('Good Morning');
        else if (currHrs >= 12 && currHrs <= 16)
            setMessage('Good Afternoon');
        else if (currHrs > 16 && currHrs <= 24)
            setMessage('Good Evening');
    },[currHrs])
        

    useEffect(()=>{
        
    })













    return (
        <Container>
            <div className='recent'>
                <h1>{message}</h1>
                <ul>
                    {
                        recent?.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/spotify/body/${item.id}`}>
                                        <div className='recent_image'>
                                            <img src={require('../../../assets/femalVersion.jpg')} alt="Recent" />
                                        </div>
                                        <span>{item.title}</span>
                                    </Link>
                                    <div className='play_pause'>
                                        {play ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='spotify_cards'>
                <ItemBody items={cardsContent} play={play}/>
            </div>
            <hr/>
        </Container>
    )
}
const Container = styled.div`
    /* position: absolute; */
    position: relative;
    padding: 0.5rem 2rem;
    .recent{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        h1{
            color: white;
        }   
        ul{
            display: flex;
            margin-top: 1rem;
            width: 100%;
            list-style-type: none;
            gap:1.3rem;
            flex-wrap: wrap;
            li{
                /* border: 1px solid black; */
                display: flex;
                border-radius: 0.2rem;
                background: #383737;
                width: 20rem;
                a{
                    display: flex;
                    text-decoration: none;
                    align-items: center;
                    span{
                        color:white;
                        font-weight: 700;
                        font-size: 0.875rem;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        width: 11rem;
                        overflow: hidden;
                        word-wrap: break-word;
                        line-height: 1.5rem;
                        height: 3rem;
                        display: flex;
                        align-items: center;
                    }
                    .recent_image{
                        display: flex;
                        img{
                            width: 5rem;
                            height: 5rem;
                            border-radius: 0.2rem;
                        }
                    }
                }
                .play_pause{
                    display: none;
                    justify-content: flex-end;
                    align-items: center;
                    svg{
                        font-size: 3rem;
                        color:black;
                        fill: #349e34;
                        transition: 0.1s ease-in-out;
                        justify-content: flex-end;
                    }
                    &:hover{
                        svg{
                            font-size: 3.08rem;
                        }
                    }
                }
                &:hover{
                    .play_pause{
                        display: flex;
                    }
                }
            }
            
        }
    }
    hr{
        width: 99%;
        margin-top: 4rem;
        margin-bottom: 10rem;
        border: 0.1px solid #7a7575;
        height: 1px;
   } 
`

export default Home;