import React, { useEffect } from 'react'
import { useStateProvider } from "../../../utils/StateProvider";
import { reducerCases } from '../../../utils/Constants';
import styled from 'styled-components';
export default function Playlist() {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylist = async () => {
      playlists.push({ id: 1, name: "My Playlist #1" });//testing
      playlists.push({ id: 2, name: "My Playlist #2" });//testing
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists })
    }
    getPlaylist();
  }, [token,playlists, dispatch]);

  const changePlayList = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId })
  }

  return (
    <Container>
      <ul>
        {
          playlists.map(({ id, name }) => {
            return (
              <li onClick={() => changePlayList(id)}>
                {name}
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
  }
`

