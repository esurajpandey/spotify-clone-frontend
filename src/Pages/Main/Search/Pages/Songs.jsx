import React from 'react'
import {songs} from '../../Body/HomeContent';
import Body from '../../Playlist/Body';
import styled from 'styled-components';

function Songs() {
  const songList = songs.map(song => {
    return {
      id : song?.id,
      title :  song?.title,
      album : song?.album,
      duration : song?.duration,
      artists : song?.artists,
      track: song?.track,
      cover : song?.cover,
      loved : song?.loved
    }
  })
  return (
    <SearchSongsContainer>
      <Body songs={songList}/>
    </SearchSongsContainer>
  )
}

const SearchSongsContainer = styled.div`
  width: 100%;
`

export default Songs