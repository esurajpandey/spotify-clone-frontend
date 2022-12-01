import React, { useEffect } from 'react'
import { useStateProvider } from "../../../utils/StateProvider";
import { reducerCases } from '../../../utils/Constants';
import styled from 'styled-components';
import { itemContent } from '../Body/HomeContent';
import { Link } from 'react-router-dom';

export default function Playlist() {
  const [{userPlaylists}, dispatch] = useStateProvider();
  
  useEffect(() => {
    const getPlaylist = async () => {
      dispatch({ type: reducerCases.SET_USER_PLAYLISTS, userPlaylists:itemContent })
    }
    getPlaylist();
  }, [userPlaylists,dispatch]);


  return (
    <Container>
      <ul>
        {
          userPlaylists.map((playlist,index) => {
            return (
              <li key={playlist?.id}>
                <Link to={`/spotify/body/${playlist?.id}`}>
                  {playlist?.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </Container>
  )
}
const Container = styled.div`
    height: 100%;
    overflow: hidden;
    /* border: 1px solid blueviolet; */
    margin-left: 0.4rem;
    ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    padding-top: 1rem;
    height: 52vh;
    overflow: auto;
    max-height: 100%;
    &::-webkit-scrollbar{
        width: 0.7rem;
        &-thumb{
            background-color: rgba(255,255,255,0.6);
            &:hover{
              background-color: white;
            }
        }
    }
    li{
      display: flex;
      gap: 1rem;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover{
        color:white;
      }
    }
    .active{
      a{
        color:white;
      }
    }
  }
`

