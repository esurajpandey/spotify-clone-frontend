import React, { useEffect } from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Spotify from './Pages/Main/Spotify/Spotify';
import font from './utils/font';
import Login from './Pages/Account/Login/Login';
import Signup from './Pages/Account/Signup/Signup';

import { useStateProvider } from './utils/StateProvider';
function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {

  }, [token, dispatch]);
  return (
    
    <BrowserRouter>
      <Spotify/>
      {/* <Signup/> */}
      <Routes>
          <Route path='/account'>
              <Route path='/login' exact element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
          </Route>
          <Route path='/spotify'>
              
          </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App