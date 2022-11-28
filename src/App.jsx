import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Login from './Pages/Account/Login/Login';
import Signup from './Pages/Account/Signup/Signup';
import EditPlaylist from './Pages/Main/Playlist/EditPlaylist';
import Spotify from './Pages/Main/Spotify/Spotify';
import { useStateProvider } from './utils/StateProvider';
function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {

  }, [token, dispatch]);
  return (
    
    <BrowserRouter>
      {/* <Spotify/> */}
      <Signup/>
      <Routes>
        {/* <Route path='/account' exact element={}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App