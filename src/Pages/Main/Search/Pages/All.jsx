import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../../../../utils/StateProvider'
import BigSongContainer from '../../../Element/BigSongContainer'
import { songs,artists } from '../../Body/HomeContent';
import { reducerCases } from '../../../../utils/Constants';
import TrackListItemForSearch from '../../../Element/TrackListItemForSearch';
import ArtistCard from '../../../Cards/ArtistsCard';
function All() {
  const [{ currentSong, previousSong, isPlaying }, dispatch] = useStateProvider();
  const songList = songs.slice(0, 4);
  const handlePlay = (id) => {

    const song = songs.find(item => item?.id === +id)
    let newPlaying;
    const newCur = song;
    const newPrev = currentSong;

    if (newPrev?.id === undefined) {
      newPlaying = !isPlaying
    }

    else {
      newPlaying = (newCur?.id !== newPrev?.id) ? true : !isPlaying
    }

    dispatch({ type: reducerCases.SET_PREVIOUS_SONG, previousSong: newPrev })
    dispatch({ type: reducerCases.SET_CURRENT_SONG, currentSong: newCur })
    dispatch({ type: reducerCases.SET_PLAYING, isPlaying: newPlaying })
  }
  return (
    <AllResultContainer>
      <AllSongs>
        <div className='leftSongContainer'>
          <BigSongContainer></BigSongContainer>
        </div>

        <div className="songLists">
          {
            songList.map(({ id, title, artists, duration, album, cover, addedOn }, index) => {
              return (
                <TrackListItemForSearch
                  serialNumber={index + 1}
                  id={id}
                  cover={cover}
                  title={title}
                  singers={artists}
                  album_playlist={album}
                  handlePlay={handlePlay}
                  dateAdded={addedOn}
                  duration={duration}
                  liked={true}
                />
              )
            })
          }
        </div>
      </AllSongs>

      <AllArtists>
        <h2 className='search_heading'>Artists</h2>
        <div className="artistList">
          {
            artists.map(item => {
              return (
                <ArtistCard artist={item} playBtn={true}/>
              )
            })
          }
        </div>
      </AllArtists>

      <AllAlbums>
        <h2 className='search_heading'>Albums</h2>
      </AllAlbums>

      <AllPlaylists>
        <h2 className='search_heading'>Playlists</h2>
      </AllPlaylists>

      <AllPodcasts>
        <h2 className='search_heading'>Podcasts</h2>
      </AllPodcasts>

      <AllEpisodes>
        <h2 className='search_heading'>Episodes</h2>
      </AllEpisodes>

      <AllProfiles>
        <h2 className='search_heading'>Profiles</h2>
      </AllProfiles>
    </AllResultContainer>
  )
}

const AllResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:2rem;
  padding: 0 2rem;
  .search_heading{
    color:white;
    font-family: 'product-sans',Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    letter-spacing: 0.02rem;
  }
  
`


const AllSongs = styled.div`
  display: flex;
  gap:0.5rem;
  position: relative;
  top:1.5rem;
  .songLists{
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0rem 1rem;
  }
`

const AllArtists = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  .artistList{
    display: flex;
    gap:1.6rem;
  }
`

const AllAlbums = styled.div`
  
`

const AllPlaylists = styled.div`
  
`

const AllPodcasts = styled.div`
  
`

const AllEpisodes = styled.div`
  
`

const AllProfiles = styled.div`
  
`

export default All