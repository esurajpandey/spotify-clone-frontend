import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import EditPlaylist from './components/Main/Playlist/EditPlaylist';
import Spotify from './components/Main/Spotify/Spotify';
// import Library from './components/Main/Body/Library';

import { useStateProvider } from './utils/StateProvider';
function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {

  }, [token, dispatch]);

  // if (!token) {
  //   redirect('/login')
  // }
  
  return (
    // <div style={{display:'flex',justifyContent : "center",alignItems : "center",position:'relative',margin:"0",padding:'0',boxSizing:'border-box'}}>
    //   <EditPlaylist />
    // </div>
    <BrowserRouter>
      <Spotify/>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App