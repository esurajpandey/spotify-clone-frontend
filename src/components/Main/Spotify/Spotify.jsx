import React, { useEffect,useRef,useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { reducerCases } from '../../../utils/Constants';
import { useStateProvider } from '../../../utils/StateProvider';
import Home from '../Body/Home';
import SideBar from '../Navbar/SideBar';
import TopNav from '../Navbar/TopNav';
import Footer from '../Player/Footer';
import CreatePlaylist from "../Body/CreatePlaylist";
import LikedSong from "../Body/LikedSong";
import PlaylistBody from "../Playlist/PlaylistBody";
import Search from '../Body/Search';
import TagBody from '../Body/TagBody';
import PlaylistContent from '../Playlist/PlaylistContent';
import AlbumContent from '../Album/AlbumContent';
import PodcastContent from '../Podcast/PodcastContent';
import UserArtists from '../Artist/UserArtists';
import TopNavBar from '../Navbar/TopNavBar';
export default function Spotify() {
  const [{ token,user,editPopup}, dispatch] = useStateProvider()
  const bodyRef =  useRef();
  const [navBg,setNavBg] = useState(false);
  const [headerBg,setHeaderBg] = useState(false);
  console.log("Hel",editPopup);
  const bodyScrolled = () =>{
    bodyRef.current.scrollTop >= 30 ? setNavBg(true) : setNavBg(false);
    bodyRef.current.scrollTop >= 268 ? setHeaderBg(true) : setHeaderBg(false); 
  }
  useEffect(() => {
    const getUser = async () => {
      dispatch({type:reducerCases.SET_USER});
    }
    getUser();
  }, [token, dispatch])
  const closePopup = () =>{
    dispatch({type:reducerCases.SET_EDIT_PLAYLIST,editPopup:!editPopup});
  }
  return (
    <Container>
      <Model onClick={closePopup} className="modal" editPopup={editPopup}/>
        <div className="spotify_body">
          <SideBar />
          <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
            {/* <TopNav navBg={navBg}/> */}
            <TopNavBar navBg={navBg}/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/search' element={<Search/>}/>
              <Route path='/tagContents/:id' element={<TagBody/>}/>
              <Route path='/createPlaylist' element={<CreatePlaylist/>}/>
              <Route path='/likedSong' element={<LikedSong/>}/>
              <Route path='/body/:id' element={<PlaylistBody/>} />
              <Route path='/user/playlists' element={<PlaylistContent/>} />
              <Route path='/user/albums' element={<AlbumContent/>} />
              <Route path='/user/podcasts' element={<PodcastContent/>} />
              <Route path='/user/artists' element={<UserArtists/>} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
    </Container>
  )
}


const Model  = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({editPopup}) => !editPopup ? 'transparent' :"#000000dc"};
    z-index: ${({editPopup}) => editPopup === false? '-1': '5'};
    display: ${({editPopup}) => editPopup === false? 'none': 'block'};

`

const Container = styled.div`
  max-width: 100vw;
  max-height: 1000000vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify_body{
    display: grid;
    grid-template-columns: 20vw 80vw; 
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent,#363535);
    background-color:#282828;;
    .body{
      height: 100%;
      width: 100%;
      overflow: auto;
      position: relative;
      &::-webkit-scrollbar{
        width: 0.7rem;
        &-thumb{
            background-color:rgb(75,75,75);
        }
     }
    }
  }
  .footer{
    width: 100%;
      /* border: 5px solid green; */
  }
`

