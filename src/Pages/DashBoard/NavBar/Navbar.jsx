import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Profile from '../../../assets/svg/Profile.svg';

import SpotifyLogo from '../../../assets/Logo';
import { useState } from 'react';
function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  const user = {};
  return (
    <NavContainer>
      <div className="logo">
        <SpotifyLogo
          style={{
            width: "8rem",
            height: "100%",
            fill: "white",
            display: "flex",
            marginTop: "0.9rem",
            justifyContent: "center",
            alignItems: "center",

          }}
          navStyle={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1rem",
            // border:'1px solid blue'
          }}
        />
      </div>
      <div className="links">
        <Link to="/premium">Premium</Link>
        <Link to="/support">Support</Link>
        <Link to="/download">Download</Link>4
        <span className='link_bar'>|</span>
        <div className="profile_link">
          <Link to="" className='profile_link_item' onClick={() => setProfileOpen(!profileOpen)}>
            {user?.profile ? <img src="" alt="" className='p_link' /> : <img src={Profile} alt="" className='icon p_link' />}
            <span className='p_link'>Profile</span>
            {profileOpen ? <BsChevronUp /> : <BsChevronDown />}
          </Link>
          {
           profileOpen && 
            <ul className='profile-menu'>
              <li className='accn'>Account</li>
              <li className='lgout'>Log out</li>
            </ul>
          }

        </div>
      </div>
    </NavContainer>
  )
}
const NavContainer = styled.div`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6.5rem;
    background-color: black;

    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100%;
    }

    .links{
      height: 100%;
      display: flex;
      align-items: center;
      a{
        padding-left: 2rem;
        text-decoration: none;
        color: white;
        font-size: 1.05rem;
        font-family: 'glory-font';
        font-weight: 500;
        letter-spacing: 0.05rem;
        &:hover{
          color: #4ecf27;
        }
      }

      .link_bar{
        color:white;
        padding: 0;
        margin: 0;
        padding-left: 1.2rem;
      }
    }
    
    .profile_link{
      position: relative;
      display: flex;
      width: 100%;
      transition: 0.03s all ease;
      .profile_link_item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .icon{
          font-size: 1rem;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          padding: 0.3rem;
          border: 2px solid white;
          &:hover{
            border: 2px solid #2cc939;
          }
        }
      }
    }

    .p_link{
      display: flex;
      align-items: center;
      padding: 0.7rem;
    }
    .profile-menu{
      position: absolute;
      left: 1.8rem;
      top:3rem;
      background-color: #c2b9b9;
      z-index: 4;
      color:black;
      list-style-type: none;
      width: 9.4rem;
      height: 5.2rem;
      padding: 1rem 1rem;
      border-radius: 0.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: 500;
      .accn{
        color:black;
      }

      .lgout{
        color: #4d4949;
      }
    }

`
export default Navbar