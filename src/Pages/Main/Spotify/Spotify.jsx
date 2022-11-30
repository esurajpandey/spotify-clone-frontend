import React, { useEffect,useRef,useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { reducerCases } from '../../../utils/Constants';
import { useStateProvider } from '../../../utils/StateProvider';
import Home from '../Body/Home';
import SideBar from '../Navbar/SideBar';
import Footer from '../Player/Footer';
import LikedSong from "../Body/LikedSong";
import PrivatePlaylist from "../Playlist/PrivatePlaylist";
import Search from '../Body/Search';
import TagBody from '../Body/TagBody';
import PlaylistContent from '../Playlist/PlaylistContent';
import AlbumContent from '../Album/AlbumContent';
import PodcastContent from '../Podcast/PodcastContent';
import UserArtists from '../Artist/UserArtists';
import TopNavBar from '../Navbar/TopNavBar';
import CreatePlaylist from '../Playlist/CreatePlaylist';
import ProfilePage from '../../Account/Profile/ProfilePage';
import TopTracks from '../Body/Tracks/TopTracks';
import Login from '../../Account/Login/Login';
import Signup from '../../Account/Signup/Signup';
export default function Spotify() {
  
  const [{ token,user,editPopup,isScroll}, dispatch] = useStateProvider()
  const bodyRef =  useRef();
  const [navBg,setNavBg] = useState(false);
  
  const [headerBg,setHeaderBg] = useState(false);

  const bodyScrolled = () =>{
    bodyRef.current.scrollTop >= 30 ? setNavBg(true) : setNavBg(false);
    bodyRef.current.scrollTop >= 268 ? setHeaderBg(true) : setHeaderBg(false); 
    dispatch({type:reducerCases.SET_SCROLL,isScroll:navBg});
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

  useEffect(()=>{
    dispatch({type:reducerCases.SET_SCROLL,isScroll:navBg});
  },[navBg]);

  return (
    <Container>
      <Model onClick={closePopup} className="modal" editPopup={editPopup}/>
        <SpotifyBody>
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
              <Route path='/body/:id' element={<PrivatePlaylist/>} />
              <Route path='/user/playlists' element={<PlaylistContent/>} />
              <Route path='/user/albums' element={<AlbumContent/>} />
              <Route path='/user/podcasts' element={<PodcastContent/>} />
              <Route path='/user/artists' element={<UserArtists/>} />
              <Route path='/user/profile' element={<ProfilePage/>} />
              <Route path='/topTracks' element={<TopTracks/>} />
            </Routes>
          </div>
        </SpotifyBody>
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
  display: flex;
  flex-direction: column;
  .footer{
    width: 100%;
    height: 14vh;
  }
  @media (max-width: 480px) {
    .footer{
      display: none;
    }
  }
`


const SpotifyBody = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    background: linear-gradient(transparent,#363535);
    background-color:#3d3a3a;
    height: 86vh;
    .body{
      height: 100%;
      width: 100%;
      overflow: auto;
      position: relative;
      background: linear-gradient(transparent, #423f3f);
      &::-webkit-scrollbar{
        width: 0.7rem;
        &-thumb{
            background-color:rgb(75,75,75);
        }
     }
    }

    @media (max-width: 768px) {
      height:86vh;
      width: 100%;
    }
`