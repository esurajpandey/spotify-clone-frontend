import React, { useEffect, useState ,useRef} from 'react'

import { useNavigate } from 'react-router-dom';

import { useStateProvider } from '../../../utils/StateProvider';
import {reducerCases, root} from '../../../utils/Constants';

function CreatePlaylist() {

  const [{token,userPlaylists},dispatch]= useStateProvider();
  const isFirstRender = useRef(true);
  const navigate = useNavigate();
  
  const create = async() => {
    let resp = await fetch(`${root}/playlist/create`,{
        method : "POST",
        body :  JSON.stringify({}),
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    resp = await resp.json();
    if(!resp?.playlistId ) return;

    let playlist = {
      id:resp?.playlistId,
      title :resp?.title,
      cover: resp?.cover,
      user :  resp?.user?.name,
      description :  resp?.description
    }

    userPlaylists.unshift(playlist);
    dispatch({type:reducerCases.SET_USER_PLAYLISTS,userPlaylists : userPlaylists});
    await new Promise((r) => setTimeout(r, 500));
    return navigate(`/spotify/body/${resp?.playlistId}`)
  }

  useEffect(()=>{
    if(isFirstRender?.current){
      isFirstRender.current = false;
      create()
    }
  },[]);

  
  return (
    <>
    </>
  )
}


export default CreatePlaylist