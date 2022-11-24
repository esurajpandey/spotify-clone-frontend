import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import left from "../../../assets/svg/svgexport-1.svg";
import right from "../../../assets/svg/svgexport-2.svg";
import user from "../../../assets/svg/user.svg";
import SearchInput from "./SearchInput";
import PlayerButton from '../../Element/PlayerButton';
import {GoTriangleUp,GoTriangleDown} from 'react-icons/go';

import { topNavContent,dropMenu } from "./NavContent";
import DropdownMenu from '../../Element/DropdownMenu';

function TopNavBar({ navBg }) {
    const [userMenu,setUserMenu] = useState(false);
    const [openMenu,setOpenMenu] = useState(false);
    const handleUserMenuClicked = (e) => {
        setOpenMenu(!openMenu);
        setUserMenu(!userMenu);
    }

    const loc = {
        inLibrary: false,
        inSearch: false,
        inHome: false,
        libray: {
            inPlaylist: false,
            inPodcast: false,
            inAlbum: false,
            inArtist: false,
        },
    };
    const location = useLocation();
    const isPlayer =  navBg && location.pathname === '/createPlaylist';
    switch (location.pathname) {
        case "/":
            loc.inHome = true;
            break;
        case "/user/playlists":
            loc.inLibrary = true;
            loc.libray = true;
            break;
        case "/user/podcasts":
            loc.inLibrary = true;
            loc.libray = true;
            break;
        case "/user/albums":
            loc.inLibrary = true;
            break;
        case "/user/artists":
            loc.inLibrary = true;
            loc.libray = true;
            break;
        case "/search":
            loc.inSearch = true;
            break;
        default:
            loc.inHome = true;
    }
    return (
        <Container navBg={navBg}>
            <div className='top_left'>
                <div className="navigation_btn">
                    <div className="left">
                        <img src={left} alt="" />
                    </div>
                    <div className="right">
                        <img src={right} alt="" />
                    </div>
                </div>
                {loc.inSearch && 
                <div className="search">
                    <SearchInput />
                </div>}

                {
                    isPlayer && <div className="playlist_data">
                        <PlayerButton/>
                        <h2>{`Playlist Title`}</h2>
                    </div>
                }

                {
                    loc.inLibrary && <div className="library_nav">
                        <ul>
                        {topNavContent.map((item) => {
                            return (
                            <li
                                key={item.title}
                                className={`${item.cName} ${
                                location.pathname === item.path && "active"
                                }`}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            );
                        })}
                        </ul>
                    </div>
                }
            </div>

            <div className='top_right'>
                <div className="upgrade">
                    <Link to='/'>Upgrade</Link>
                </div>
                <div className="user">
                    {
                        userMenu && 
                        <div className='user_menu'>
                            <DropdownMenu menuItem={dropMenu}/>
                        </div>
                    }
                    <button onClick={handleUserMenuClicked} className="user_btn">
                        <div className="icon">
                            <img src={user} alt="User" />
                        </div>
                        <span>{`Suraj Pandey`}</span>
                        {
                            userMenu ? 
                            <GoTriangleUp/>
                            :
                            <GoTriangleDown/>
                        }
                    </button>
                </div>
            </div>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 11.5vh;
    background: ${({ navBg }) => (navBg ? "#273036" : 'transparent')};
    position: sticky;
    top: 0;
    transition: 0.3s ease-in-out;
    z-index: 2;
    .top_left{
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        padding: 0 1.5rem;
        gap:2rem;
        .playlist_data{
            display: flex;
            align-items: center;
            gap:1rem;
            h2{
                color: white;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                font-size: 1.7rem;
                font-weight: 900;
            }
        }
        .navigation_btn{
            display: flex;
            align-items: center;
            gap:1rem;
            .left, .right{
                display: flex;
                border-radius: 50%;
                padding: 0.22rem;
                padding: 5px;
                width: 2rem;
                height: 2rem;
                background-color: #070707;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

        }
        .search{
            width: 100%;
        }
        .active {
            background-color: #393939;
        }
        .library_nav {
            ul{
                display: flex;
                list-style-type: none;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                li {
                    display: flex;
                    padding-left: 0.9rem;
                    padding-right: 0.9rem;
                    padding-top: 0.7rem;
                    padding-bottom: 0.7rem;

                    border-radius: 0.3rem;
                    a {
                    text-decoration: none;
                    span {
                        color: white;
                        font-size: 0.875rem;
                        font-weight: 700;
                    }
                    }
                }
            }
        }
    }

    .top_right{
        display: flex;
        align-items: center;
        padding: 0 1.4rem;
        .upgrade{
            display: flex;
            align-items: center;
            border-radius: 1rem;
            border: 1px solid white;
            a{
                border: 0;
                position: relative;
                text-decoration: none;
                color: white;
                font-size: 0.875rem;
                font-weight: 700;
                padding: 0.4rem 0.8rem;
                letter-spacing: 0.5px;
                transition: transform 5s;
            }
            &:hover{
                background-color: #464444;
                transform: scale(1.02);
            }
        }
        .user{
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: flex-end;
            width: 13rem;
            .user_btn{
                display: flex;
                width: 78%;
                align-items: center;
                justify-content: center;
                gap:8px;
                position: relative;
                left: 2.5rem;
                background-color: #161616;
                border: 0;
                color:white;
                border-radius: 1rem;
                padding-left: 2px;
                padding-top: 2px;
                padding-bottom: 2px;
                padding-right: 10px;
                span{
                    display: flex;
                    align-items: center;
                    font-size: 0.875rem;
                    font-weight: 700;
                }
                .icon{
                    display: flex;
                    border-radius: 50%;
                    background-color: #464444;
                    img{
                        padding: 7px;
                    }
                }
                
            }
        }
        .user_menu{
            position: relative;
            display: flex;
            flex-direction: column;
            top: 2.3rem;
            right: 0.4rem;
            width: 100%;
        }
    }
`
export default TopNavBar