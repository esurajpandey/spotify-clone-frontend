import React from 'react'
import styled from 'styled-components';
import Body from './Body';
import { useParams } from 'react-router-dom';
import { itemContent, songs } from "../Body/HomeContent";
import PublicTopBody from './PublicPlaylist';

function PrivateTopBody() {
  const id = useParams()?.id;
  const playlistData = itemContent.find(item => item.id === +id);
  return (
    <PlaylistContainer>
      {
        playlistData?.type === 'private' ?
        <div className="top">
          <div className="image">
            <img src={require('../../../assets//femalVersion.jpg')} alt="Selected Playlist" />
          </div>
          <div className="details">
            <span className='type'>PLAYLIST</span>
            <h1 className='title'>{playlistData?.title}</h1>
            <p className='description'>{playlistData?.description}</p>
          </div>
        </div>
        :<PublicTopBody playlistData={playlistData}/>
      }
      <Body songs={playlistData?.songs} />
    </PlaylistContainer>
  )
}


const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .top{
      padding-left: 2rem;
      padding-right: 1rem;
      display: flex;
      gap:1rem;
      .image{
        img{
          height: 15rem;
          box-shadow: rgba(0,0,0,0.25) 0px 25px 50px -12px;
        }
      }
      .details{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1rem;
        color: #e0dede;
        font-family: 'product-sans';
        .title{
          color:white;
          font-size:4rem;
        }
      }
    }
`
export default PrivateTopBody