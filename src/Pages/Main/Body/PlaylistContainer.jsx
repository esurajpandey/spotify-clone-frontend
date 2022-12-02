import React, { useState,useEffect } from 'react'
import styled from 'styled-components'

import { RiMusic2Line } from 'react-icons/ri';
import { HiOutlinePencil } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { useStateProvider } from '../../../utils/StateProvider';
import { reducerCases } from '../../../utils/Constants';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import EditPlaylist from '../Playlist/EditPlaylist';
import DropdownMenu from '../../Element/DropdownMenu';
import PlayerButton from '../../Element/PlayerButton';
import Body from '../Playlist/Body';

function PlaylistContainer() {

  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [{ editPopup,currentPlaylist,token }, dispatch] = useStateProvider();
  const playlistId = useParams()?.id;

  const handleMenuOpen = () => {
    setOpen(!open);
  }

  const onLike = (e) => {
    setLiked(!liked);
  }

  const getDuration = (songs) => {
    let total = 0;
    songs.forEach(song => {
      total = total + +song?.duration
    })
    let sec = total / 1000;
    let min = sec / 60;
    let hrs = min / 24;

    let res = "";

    if (hrs >= 1) {
      res = res + ` ${hrs} hr`
      min = Math.floor(min % 60);
    }

    if (min <= 60) {
      res = res + ` ${Math.floor(min)} min`
    }
    return res;
  }

  const getCurrentPlaylist = async () => {
    if (playlistId) {
      let data = await fetch(`http://localhost:3000/playlist/private/song/${playlistId}/0`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      data = await data.json();

      let curr = {
        id: data?.playlistId,
        title: data?.title,
        user: data?.user?.name,
        decription: data?.decription,
        type: data?.type ?? 'private',
        cover: data?.cover,
        songs: data?.songs.map(song => {
          return {
            album: {
              id: song?.albumId,
              title: song?.album?.title
            },
            artists: song?.artists.map(artist => {
              return {
                id: artist?.artistId,
                name: artist?.artistName
              }
            }),
            duration: song?.duration,
            id: song?.songId,
            addedOn: song?.songInPlaylist?.addedOn,
            title: song?.title,
            cover: song?.cover
          }
        })//songs
      }//playlist

      dispatch({ type: reducerCases.SET_CURRENT_PLAYLIST, currentPlaylist: curr })

      //set isLoading false
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCurrentPlaylist();
  }, [playlistId]);

  const uploadImage = () => {
    dispatch({ type: reducerCases.SET_EDIT_POP_UP, editPopup: !editPopup })
  }

  return (
    <>
      {
        isLoading ? 

        <div className="loading">
          <h1>Loading</h1>
        </div>

        : <Container editOn={editPopup}>
            {
              editPopup && <EditPlaylist id={currentPlaylist?.id} title={currentPlaylist?.title} image={currentPlaylist?.img}  description={currentPlaylist?.decription}/>
            }
            <div className="top_items">
              <div className="image" onClick={uploadImage}>
                {
                  !currentPlaylist?.cover ? (
                    <div className='music_icon'>
                      <RiMusic2Line />
                    </div>
                  )
                    :
                    <img src={currentPlaylist?.cover} alt="Selected Playlist" />
                }
                <div className='edit_icon'>
                  <HiOutlinePencil style={{
                    strokeWidth: "40"
                  }} />
                  <span>Choose photo</span>
                </div>
              </div>

              <div className="details">
                <span className='type'>PLAYLIST</span>
                <h1 className='title' onClick={uploadImage}>{currentPlaylist.title}</h1>

                <div className="song-details">
                  <span className='user'>{currentPlaylist?.user}</span>
                  {
                    currentPlaylist?.songs &&
                    <span className='counts'> &#x2022;{` ${currentPlaylist?.songs.length} songs `}
                      &#x2022; {getDuration(currentPlaylist?.songs)}
                    </span>
                  }
                </div>
              </div>
            </div>

            <NavigationContainer>
              {currentPlaylist?.songs && <PlayerButton />}
              {
                currentPlaylist.type === 'public' &&
                <div className='like_btn'>
                  {
                    liked ? <FaHeart onClick={onLike} className="liked" /> : <FaRegHeart onClick={onLike} className="unliked" />
                  }
                </div>
              }
              <div className="menu">
                <HiOutlineDotsHorizontal onClick={handleMenuOpen} className="dot" />
                {
                  open && <DropdownMenu />
                }
              </div>
            </NavigationContainer>
            <Body songs={currentPlaylist?.songs} />
            
          </Container>
      }
    </>
  )
}

const Container = styled.div`
  min-height: 80vh;
  background-image: linear-gradient(transparent,#242323);
  .top_items{
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding-top: 1.8rem;
    .image{
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      width: 14.5rem;
      position: relative;
      height: 14.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #312f2f;
      img{
        object-fit:cover;
        width: 14.5rem;
        height: 14.5rem;
        box-shadow: rgba(0,0,0,0.25) 0px 25px 50px -12px;
      }
      .music_icon{
        display: inline-block;
        svg{
          color: #a09e9e;
          font-size : 4.5rem ;
          font-weight: 100;
        }
      }
      .edit_icon{
          display: none;
          flex-direction: column;
          justify-content: center;
          position: absolute;
          align-items: center;
          gap:4px;
          background-color: rgba(0, 0, 0, 0.65);
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          color: #f3eaea;
          svg{
            font-size : 3rem;
            stroke-width: 1px;
            stroke-linecap:1px;
          }
          span{
            letter-spacing: 1px;
          }
          z-index: 1;
        }
      &:hover{
        img{
          z-index: 0.5;
        }
        .music_icon{
          display: none;
        }
        .edit_icon{
          display: flex;
        }
      }
    }

    .details{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 4.5rem;
      font-family: 'product-sans';
      color: #f0e7e7;
      .type{
        font-weight: 400;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 0.01rem;
        letter-spacing: 0.02rem;
      }

      .user{
        font-weight: 400;
        font-size: 0.8rem;
      }
      .title{
        color:white;
        font-size:5rem;
        font-weight: 900;
        cursor: pointer;
      }
      .counts{
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
`

const NavigationContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap:1.7rem;
  margin:1rem 2rem;
  .like_btn{
      font-size: 2rem;
      padding-top:0.5rem;
      .liked{
          fill:#60d660;
      }
      .unliked{
          fill:#cec6c6;
      }
  }
  .menu{
      width: 10rem;
      .dot{
          font-size: 1.5rem;
          color: #cec6c6;
          display: flex;
          position: relative;
      }
      position: relative;
  }
`
export default PlaylistContainer