import React, { useState } from 'react'
import styled from 'styled-components'
import { RiMusic2Line } from 'react-icons/ri';
import {HiOutlinePencil} from 'react-icons/hi';
import TrackList from './TrackList';
import EditPlaylist from '../Playlist/EditPlaylist';
import { useStateProvider } from '../../../utils/StateProvider';
import { reducerCases } from '../../../utils/Constants';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import DropdownMenu from '../../Element/DropdownMenu';
import PlayerButton from '../../Element/PlayerButton';

function PlaylistContainer({playlistData,type}) {
  const [{editPopup},dispatch] = useStateProvider();
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [listening, setListening] = useState(false);
  const handleMenuOpen = () => {
    setOpen(!open);
  }
  const onLike = (e) => {
      setLiked(!liked);
  }
  const cover = playlistData?.img ?? "";
  
  const uploadImage = () =>{
    dispatch({ type: reducerCases.SET_POP_UP, editPopup: !editPopup})
  }
  return (
    <Container editOn={editPopup}>
      {
            editPopup && <EditPlaylist title={playlistData?.title} image={playlistData?.img}/>
      }
      <div className="top_items">
        <div className="image" onClick={uploadImage}>
          
          {
            !cover ? (
              <div className='music_icon'>
                <RiMusic2Line />
              </div>
            )
              :
              <img src={cover} alt="Selected Playlist" />
          }
          <div className='edit_icon'>
            <HiOutlinePencil style={{
              strokeWidth : "40"
            }}/>
            <span>Choose photo</span>
          </div>
        </div>
        <div className="details">
          <span className='type'>PLAYLIST</span>
          <h1 className='title'>{playlistData.title}</h1>
          <p className='created_by'>{playlistData?.userName ?? "Suraj Pandey"}</p>
        </div>
      </div>
      
      <NavigationContainer>
        {playlistData?.songs && <PlayerButton />}

        {
            playlistData.type==='public' &&
            <div className='like_btn'>
                {
                    liked ? <FaHeart onClick={onLike} className="liked" /> : <FaRegHeart onClick={onLike} className="unliked" />
                }
            </div>
        }
        <div className="menu">
            <HiOutlineDotsHorizontal onClick={handleMenuOpen} className="dot" />
            {
                open && <DropdownMenu/>
            }
        </div>
      </NavigationContainer>

      <div className="track_lists">
        {
          playlistData.songs && <TrackList headerBg={true} trackList={playlistData.songs} />
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
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
        width: 100%;
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
      padding-top: 5rem;
      color: #aaaaaa;
      .title{
        color:white;
        font-size:4rem;
      }
    }
  }
`

const NavigationContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap:1.7rem;
  margin:5rem 2rem;
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