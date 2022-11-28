import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {itemContent} from "../Body/HomeContent";
import { AiFillClockCircle } from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';

function Body() {
  const id =  useParams().id;
  const playlistData =  itemContent.find(item => item.id === +id);

  useEffect(()=>{
    
  });

  const getMinSec = (ms) =>{
    const min =  Math.floor(ms/60000);
    const sec =  ((ms%60000)/1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0"  : "") + sec;
  }
  const playTrack = (id,name,artists,image,context_uri,track_number) =>{

  }
  return (
    <Container >
    {
      playlistData && (
        <>
          <div className="playlist">
            <div className="image">
              <img src={require('../../../assets//femalVersion.jpg')} alt="Selected Playlist" />
            </div>

            <div className="details">
              <span className='type'>PLAYLIST</span>
              <h1 className='title'>{playlistData.title}</h1>
              <p className='description'>{playlistData.description}</p>
            </div>
          </div>

          <div className="lists">
              <div className="header_row">
                <div className="col">
                  <span>#</span>
                </div>
                <div className="col">
                  <span>TITLE</span>
                </div>
                <div className="col">
                  <span>ALBUM</span>
                </div>
                <div className="col">
                  <span><AiFillClockCircle /></span>
                </div>
              </div>
              <div className="tracks">
                {
                  playlistData.songs.map(({ id, name, artists, duration, album}, index) => {
                    return (
                      <div className='row' key={id} onClick={()=>playTrack(id,name,artists)}>
                        <div className="col index">
                          <span>{index + 1}</span>
                          <BsFillPlayFill/>
                        </div>
                        <div className="col detail">
                          <div className="image">
                            <img src={require('../../../assets//femalVersion.jpg')} alt="track" />
                          </div>
                          <div className="info">
                            <span className='name'>{name}</span>
                            <span>{artists}</span>
                          </div>
                        </div>

                        <div className="col">
                          <span>{album}</span>
                        </div>

                        <div className="col">
                          <span>{getMinSec(duration)}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </>
      )
    }
  </Container>
  )
}

const Container = styled.div`
  .playlist{
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 2rem;
    .image{
      img{
        height: 15rem;
        box-shadow: rgba(0,0,0,0.25) 0px 25px 50px -12px;
      }
    }
    .details{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title{
        color:white;
        font-size:4rem;
      }
    }
  }
  .lists{
    .header_row{
      display: grid;
      grid-template-columns : 0.3fr 2.9fr 2fr 0.1fr;
      color: #dddcdc;
      margin: 1rem 0 0 0;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: ${({headerBg})=> headerBg ? "#000000dc" : "black"};
    }
    .tracks{
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom:10rem;

      .row{
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns : 0.3fr 3fr 2fr 0.1fr;
        .index{
          svg{
            font-size: 1.2rem;
            display: none;
          }
        }
        &:hover{
          background: rgba(143, 139, 139, 0.5);
          border-radius: 5px;
          /* opacity: 0.5; */
          .index{
            span{
              display: none;
            }
          }
          svg{
            display: block;
          }
        }

        .col{
          display: flex;
          align-items: center;
          color: #dddcdc;
          img{
            height: 40px;
          }
        }
        .detail{
          display: flex;
          gap:1rem;
          .info{
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`

export default Body