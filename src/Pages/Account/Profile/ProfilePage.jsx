import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import mypic from '../../../assets/mypic.jpg';
import ArtistCard from '../../Cards/ArtistsCard';
import { Link, useNavigate } from 'react-router-dom';
import TrackListItem from '../../Element/TrackListItem';
import PlayilistCard from '../../Cards/PlaylistCard';
import {songs} from "../../Main/Body/HomeContent";


function ProfilePage({ user }) {
    // console.log('Hello')
    const count = 0;
    const [menu,setMenu] = useState(false);
    const [allSongs,setAllSongs] = useState(songs);
    const [fourSong,setFourSong]  =  useState([]);
    const trackLength = songs.length;
    let navigate = useNavigate();
    const handleMenu = (e) => {
        setMenu(!menu)
    }
    const changeProfile = (e) => {

    }
    const listChangeHandler = (e) => {

    }
    const seeMore = () =>{
        console.log('hello');
        return navigate("/topTracks");
    }

    

    useEffect(()=>{
        const four = allSongs.slice(0,4)
        setFourSong(four) 
    },[songs])


    return (
        <Container>
            <UserDetailsContainer>
                <ProfilePic>
                    <img src={mypic} alt="" />
                </ProfilePic>
                <TextContainer>
                    <h5>PROFILE</h5>
                    <h1 onClick={changeProfile}>{user?.name ?? "Suraj Pandey"}</h1>
                    <p>{`${count} Public Playlist`}</p>
                </TextContainer>
            </UserDetailsContainer>
            <ProfileBottom>
                <MenuContainer>
                    <HiOutlineDotsHorizontal onClick={handleMenu} className="dot" />
                    {
                        menu && 
                        <MenuItem>
                            <ul>
                                <li>
                                Edit Profile    
                                </li>
                                <li>
                                Copy link to profile
                                </li>
                            </ul>
                        </MenuItem>
                    }
                </MenuContainer>
                <TopArtist>
                    <h2 className='topart'>Top artists this month</h2>
                    <p className='onlyvs'>Only visible to you</p>
                        {
                            <ul>
                                <li>
                                 <ArtistCard artist={{ id: 1, title: "Arijit Singh" }} playBtn={true} />
                                </li>
                            
                            <li>
                                <ArtistCard artist={{ id: 1, title: "Arijit Singh" }} playBtn={true} />
                            </li>
                            </ul>
                        }
                   
                </TopArtist>

                <TopTracks>
                    <div className="track_top">
                        <div className='track_left'>
                            <Link to=''><h2>Top tracks this month</h2></Link>
                            <p className='onlyvs'>Only visible to you</p>
                        </div>
                        {
                            trackLength > 5 && <p className='see_all' onClick={seeMore}>SEE ALL</p>
                        }
                    </div>
                    <Tracks>
                        <ul>
                            {
                                fourSong.map(
                                    (item,index) => {
                                        if(index === 4){
                                            
                                        }
                                        return (
                                            <li>
                                                <TrackListItem
                                                    serialNumber={item.id}
                                                    cover={mypic}
                                                    title={item?.title}
                                                    singers={item?.artists}
                                                    album_playlist={item?.album}
                                                    duration={item.duration}
                                                    handler= {listChangeHandler}
                                                    liked= {false}
                                                />
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </Tracks>
                </TopTracks>
                <PublicPlaylists>
                    <h2>Public Playlist</h2>
                    <PlayilistCard
                        playlist={{
                            id:1,
                            title : "My Playlist #4",
                            description: "Loving Stark"
                        }}
                        playBtn={true}
                    />
                </PublicPlaylists>
            </ProfileBottom>

            <hr />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .onlyvs{
        font-size: 0.8rem;
        color: #ece2e2;
        font-weight: 500;
    }
    .see_all{
        color:grey;
        font-size: 0.8rem;
        cursor: pointer;
        letter-spacing: 2px;
        &:hover{
            text-decoration: underline;
        }
    }
`

const UserDetailsContainer = styled.div`
    width: 100%;
    padding-left: 2rem;
    padding-right: 1rem;
    height: 18rem;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:1rem;
`

const ProfilePic = styled.div`
    border-radius: 50%;
    img{
        width: 14.5rem;
        height: 14.5rem;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: rgba(0, 5, 1, 0.25) 0px 54px 55px, rgba(7, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   color:white;
   height: 14.5rem;
   h1{
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: -0.4rem;
   }
   p{
    position: relative;
    top:2rem;
    font-size: 0.875rem;
   }
`

const ProfileBottom = styled.div`
    height: 100%;
    background-color:#222020;
    padding-left: 2rem;
    padding-right: 1rem;
    padding-top: 2rem;
    width: 100%;
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    z-index: 0;
    position: relative;
    
`

const MenuItem =  styled.div`
    z-index: 4;
    position: relative;
    ul{
        overflow: hidden;
        list-style-type: none;
        position: absolute;
        background: #292828;
        border-radius: 0.2rem;
        width: 10rem;
        padding: 5px;
        li{
            padding:0.8rem;
            padding-left: 0.5rem;
            z-index: 4;
            font-size: 0.875rem;
            color:white;
            border-radius: 0.2rem;
            cursor: default;
            &:hover{

                transition: 0.3s ease-in-out;
                background-color: #3a3838;
            }
        }

    }

`
const MenuContainer = styled.div`
    width: 100%;
    position: relative;
    .dot{
        color:white;
        font-size: 1.7rem;
        position: relative;
    }

`
const TopArtist = styled.div`
    width: 100%;
    overflow: hidden;
    color:white;
    display: flex;
    flex-direction: column;
    gap:0.8rem;
    .topart{
        
    }

    ul{
        display: flex;
        list-style-type: none;
        gap:1rem;
    }

`
const PublicPlaylists = styled.div`
    h2{
        color:white;
        font-family: inherit;
        margin-bottom: 1.5rem;
    }
    width: 100%;
    overflow: hidden;
    /* border: 1px solid red; */

`

const TopTracks = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap:1.5rem;

    .track_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .track_left{
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            a{
                color:white;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
`

const Tracks =  styled.div`
    height: 100%;
`


export default ProfilePage