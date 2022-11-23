import React, { useEffect } from "react";
import styled from "styled-components";
import SpotifyLogo from "../../../assets/Logo";

import UserPlaylist from "../Playlist/UserPlaylist";
import { sideNav } from "./NavContent";

import { Link, useLocation } from "react-router-dom";
// import Playlist from "../Playlist/Playlist";

export default function SideBar() {
  let curRoute = useLocation().pathname;
  if(curRoute === "/library" ||
  curRoute === "/user/playlists" ||
  curRoute === "/user/albums" ||
  curRoute === "/user/podcasts" ||
  curRoute === "/user/artists"){
    curRoute = '/user/playlists'
  }
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
          <SpotifyLogo
            style={{
              width: "8rem",
              height: "4rem",
              fill: "white",
              display: "flex",
              marginLeft: "1.5rem",
              marginTop: "0.9rem",
            }}
          />
        </div>

        <ul>
          {sideNav.map((item) => {
            return (
              <li className={item.clName}>
                <Link to={item.path} className={curRoute === item.path && 'active'}>
                  {item.icons}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <UserPlaylist />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  height: 100%;
  width: 100%;
  padding: 0rem;
  z-index: 0;
  /* border: 1px solid rebeccapurple; */
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.4rem;
    padding-top: 0.5rem;
    padding-bottom: 0rem;
    .buttom_link {
      padding-top: 1.4rem;
    }
    .likedSong {
      border-bottom: 1px solid #b3b3b3;
      padding-bottom: 0.8rem;
    }

    li {
      display: flex;
      gap: 1rem;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      padding-bottom: 0rem;
      .active {
        color: white;
      }
      a {
        color: grey;
        text-decoration: none;
        font-size: 0.874rem;
        gap: 1rem;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:hover {
          color: white;
        }
        svg {
          font-size: 1.7rem;
        }
      }
    }
  }
`;
