import React, { useEffect } from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Spotify from './Pages/Main/Spotify/Spotify';
import Login from './Pages/Account/Login/Login';
import Signup from './Pages/Account/Signup/Signup';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';

function App() {
  const [{ token,user }, dispatch] = useStateProvider();
  useEffect(() => {
      let store =  JSON.parse(localStorage.getItem('user-info'));
      if(store?.token){
        dispatch({type:reducerCases.SET_USER,user : store.name})
        dispatch({type:reducerCases.SET_TOKEN,token : store.token})
        // console.log('Hello in app ',token)
      }
  }, [token, dispatch]);
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route  path='/user/signup' element={<Signup/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='spotify/*' element={<Spotify/>}/>
        </Routes>
    </BrowserRouter>
  )
}
 

export default App