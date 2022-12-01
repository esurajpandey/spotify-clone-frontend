import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateProvider } from '../../../utils/StateProvider'
import {reducerCases} from '../../../utils/Constants';
function Logout() {
  const [{token,user},dispatch] = useStateProvider();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log('helo in lgg ', token);
    if(token){
        const resp = fetch('http://localhost:3000/user/logout',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({
                deviceId :  1
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.removeItem('user-info');

            //DISPATCH ALL THE STORED VALUE
            dispatch({type:reducerCases.SET_TOKEN, token:null});
            dispatch({type:reducerCases.SET_USER, user:null});
        })
    }
    return navigate('/spotify');
  },[])
}

export default Logout