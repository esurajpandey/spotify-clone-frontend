import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
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
    <BrowserRouter>
      <Spotify/>
      <Routes>
        {/* <Route path='/' exact element={<Spotify/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App