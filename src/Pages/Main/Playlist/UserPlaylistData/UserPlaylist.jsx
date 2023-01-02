import React, { useEffect } from 'react'
import { useStateProvider } from "../../../../utils/StateProvider";
// import { reducerCases } from '../../../utils/Constants';
import styled from 'styled-components';
import DropdownMenu from '../../../Element/DropdownMenu';

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ContextMenu from './ContextMenu';



export default function Playlist() {
  const [{ userPlaylists }] = useStateProvider();
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [position,setPosition] = useState({x:0,y:0});


  const openContextMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);

    console.log(e.pageX);
    console.log(e.pageY);
    setPosition({x: e.pageX, y : e.pageY})
  }

  const path = useLocation().pathname;
  console.log(path);


  const handleLeftClick = ()=>{
    if(isMenuOpen){
      setIsMenuOpen(!isMenuOpen);
    }
  }
  return (
    <ListOfUserPlaylist onClick={handleLeftClick}>
      
      <ul>
        {
          userPlaylists.map((playlist, index) => {
            return (
              <li key={playlist?.id} onContextMenu={openContextMenu}>
                <Link to={`/spotify/body/${playlist?.id}`}>
                  {playlist?.title}
                </Link>

                {/* <div className="menu">
                  <HiOutlineDotsHorizontal onClick={openMenu} className="dot" />
                  {
                    isMenuOpen && <DropdownMenu />
                  }
                </div> */}
              </li>
            )
          })
        }
      </ul>
      {isMenuOpen && <ContextMenu top={position.y} left={position.x}/>}
    </ListOfUserPlaylist>
  )
}
const ListOfUserPlaylist = styled.div`
    height: 100%;
    overflow: auto;
    /* border: 1px solid blueviolet; */
    margin-left: 0.4rem;
    width: 100%;
    /* position: relative; */
    ul{
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 0;
      /* padding: 1rem; */
      padding-left: 0;
      padding-top: 1rem;
      padding-bottom: 5rem;
      /* border: 1px solid yellow; */
      height: 52vh;
      overflow: auto;
      max-height: 100%;
      padding: 0;
      transition: 0.3s ease-in-out;
    li{
      display: flex;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      position: relative;
      padding: 0.4rem 1rem;
      width: 100%;
      font-family: 'product-sans-regular',Arial, Helvetica, sans-serif;
      
      &:hover{
        color:white;
      }
      a{
        font-size: 0.9rem;
        padding: 0;
        color:rgb(179,179,179);
      }
    }
    
    .active{
      a{
        color:white;
      }
    }

    &::-webkit-scrollbar{
        width: 1rem;
        &-thumb{
            background-color: rgba(255,255,255,0.6);
            &:hover{
              background-color: white;
            }
        }
    }
  }

  .menu{
    
  }
`

const Menu = styled.div`
  position: absolute;
  left: ${({left})=> `${left}px`};
  top : ${({top})=> `${top}`};
`