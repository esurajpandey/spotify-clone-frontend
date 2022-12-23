import React from 'react'
import { useState } from 'react'
import { Link, Routes, useLocation, Route } from 'react-router-dom';
import styled from 'styled-components'

import All from './Pages/All';
import Songs from './Pages/Songs';
import Albums from './Pages/Albums';
import Playlists from './Pages/Playlists';
import Artists from './Pages/Artists';
import Podcasts from './Pages/Podcasts';
import Profiles from './Pages/Profiles';
import Genres from './Pages/Genres';


function SearchMain() {
    const navItem = [
        {
            title: "All",
            path: '/spotify/search'
        },
        {
            title: "Songs",
            path: '/spotify/search/songs'
        },
        {
            title: "Albums",
            path: '/spotify/search/albums'
        },
        {
            title: "Playlists",
            path: '/spotify/search/playlists'
        },
        {
            title: "Artists",
            path: '/spotify/search/artists'
        },
        {
            title: "Podcasts & Shows",
            path: '/spotify/search/podcasts'
        },
        {
            title: "Profiles",
            path: '/spotify/search/profiles'
        },
        {
            title: "Genres & Moods",
            path: '/spotify/search/genres'
        },
    ]


    const loc = useLocation().pathname;
    return (
        <SearchPageContainer>
            <SearchNav>
                <ul>
                    {navItem.map((item, index) => {
                        return (
                            <li key={index} className={`${loc === item.path && `active`} search_nav`}>
                                <Link to={item?.path}>
                                    <span>{item?.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </SearchNav>
            <SearchBody>
                <Routes>
                    <Route path='/' element={<All />} />
                    <Route path='songs' element={<Songs />} />
                    <Route path='albums' element={<Albums />} />
                    <Route path='playlists' element={<Playlists />} />
                    <Route path='artists' element={<Artists />} />
                    <Route path='podcasts' element={<Podcasts />} />
                    <Route path='profiles' element={<Profiles />} />
                    <Route path='genres' element={<Genres />} />
                </Routes>
            </SearchBody>

        </SearchPageContainer>
    )
}

const SearchNav = styled.div`
    display: flex;
    flex-direction:column;
    padding-left: 2rem;
    ul{
        display: flex;
        list-style-type: none;
        gap:1rem;

        li{
            padding: 0.4rem 0.8rem;
            border-radius: 1rem;
            background-color:#363434;
            font-family: 'product-sans-regular',Arial, Helvetica, sans-serif;
            a{
                text-decoration: none;
                width: 100%;
                cursor:default;
                span{
                    color:white;
                    letter-spacing: 0.01rem;
                    font-size:0.875rem;
                    font-weight:500;
                }

            }
            &:hover{
                transition: 0.3s ease-in-out;
                background-color:#3d3c3c;
            }
        }
    }
    .active{
        background-color: white;
        a{
            span{
                color:black;
            }

        }
        &:hover{
            background-color: white;
        }
    }
`
const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchBody = styled.div`
    width: 100%;
    height:100%;
`
export default SearchMain