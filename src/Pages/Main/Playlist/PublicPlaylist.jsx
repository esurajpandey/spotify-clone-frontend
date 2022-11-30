import React from 'react'
import styled from 'styled-components'

function PublicTopBody({playlistData}) {
  return (
    <PublicContainer>
      <div className="image">
          <img src={require('../../../assets/public.jpg')} alt="Selected Playlist" />
      </div>
      <div className="details">
          <span className='type'>PLAYLIST</span>
          <h1 className='title'>{playlistData?.title}</h1>
          <div className="info">
            <span className='description'>{playlistData?.description}</span>
            <span className='songdata'>
              <p>Spotify</p>
              <ul>
                <li>{`${playlistData?.likes} likes`}</li>
                <li>{`${playlistData?.songs.length} songs`},</li>
                <li>{`1hr 13min`}</li>
              </ul>
            </span>
          </div>
      </div>
    </PublicContainer>
  )
}


const PublicContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  position: relative;
  top: 0;
  font-family: 'product-sans';
  .image{
    width: 100%;
    position: relative;
    img{
      width: 100%;
      height: 19rem;
      box-shadow: rgba(0,0,0,0.25) 0px 25px 50px -12px;
    }
  }

  .details{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
    color: #e0dede;
    position: absolute;
    left: 2.5rem;
    bottom: 2rem;
    height: 100%;
    .title{
      color:white;
      font-size:6rem;
      font-family: inherit;
      font-weight: 900;
      letter-spacing: 0.1rem;
    }
    .info{
      font-family: 'gotham';
    }
    .songdata{
      font-weight: 600;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap:0.5rem;

      p{
        font-weight: 500;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'product-sans';
      }
      ul{
        font-family: 'gotham';
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        gap:0.5rem;
        list-style-type: circle;
        li{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`
export default PublicTopBody