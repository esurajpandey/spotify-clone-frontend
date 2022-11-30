import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import playIcon from '../../../assets/svg/play.svg';
import pauseIcon from '../../../assets/svg/pause.svg';
import mono from '../../../assets/svg/radio.svg';
import mypic from '../../../assets/mypic.jpg';
import {HiHeart,HiOutlineHeart} from 'react-icons/hi';
import Player from './Player';
import Volume from './Volume';
import {useStateProvider} from '../../../utils/StateProvider';
import { reducerCases } from '../../../utils/Constants';
function Footer() {

    const [{currentSong},dispatch] = useStateProvider();
    
    useEffect(()=>{
        dispatch({type:reducerCases.SET_CURRENT_SONG,currentSong});
        console.log(currentSong);
    },[currentSong,dispatch]);

    const [loved,setLoved] = useState(false);
    const handleLike =  () =>{
        setLoved(!loved);
    }

    return (
        <Container>
            <LeftContainer>
                <Details>
                    <div className="image">
                        <img src={currentSong?.cover} alt="" />
                    </div>
                    <div className="text">
                        <a href="/" className='song_title'><span>{currentSong?.title}</span></a>
                        <div className="singers">
                            <ul>
                                {
                                    currentSong?.artists.map(item=>{
                                        return (
                                            <li><a href='/' className='singer_list'>{item}</a>,</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Details>
                <Icons>
                    <div className="heart">
                        {currentSong?.loved ? <HiHeart onClick={handleLike} className='fillHeart'/>:<HiOutlineHeart  onClick={handleLike} className='emptyHeart'/>}
                    </div>
                    <div className="mono">
                        <img src={mono} alt="" />
                    </div>
                </Icons>
            </LeftContainer>
            <Player track={currentSong?.track}/>
            <VolumeControl>
                <Volume/>
            </VolumeControl>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #252525;
    display: grid;
    grid-template-columns: 2.5fr 4fr 2fr;
    padding: 0.2rem 1.2rem;
`
const Details = styled.div`
    display: flex;
    align-items: center;
    gap:0.8rem;
    overflow: hidden;
    .image{
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        img{
            width: 3.5rem;
            height: 3.5rem;
            object-fit: cover;
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .song_title{
            color: white;
            text-decoration: none;
            font-size: 0.9rem;
            font-family: inherit;
            font-weight: 500;
            &:hover{
                text-decoration: underline;
            }
        }
        .singers{
            ul{
                display: flex;
                list-style-type: none;
                overflow: hidden;
                li{
                    color: #c5bdbd;
                    a{
                        text-decoration: none;
                        font-size: 0.75rem;
                        color: inherit;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
`

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    gap:1rem;
    margin-left: 1rem;
    .heart{
        cursor: default;
        user-select: none;
        .fillHeart{
            fill:#3ad141;
        }
        svg{
            font-size: 1.2rem;
        }
        .emptyHeart{
            color:white;
        }
    }


`
const LeftContainer = styled.div`
    min-width: 230px;
    display: flex;
    align-items: center;
`

const VolumeControl = styled.div`
    min-width: 228px;
`
export default Footer;