import React, { useState } from 'react'
import styled from 'styled-components'
import { itemContent } from '../Body/HomeContent';
import PlaylistContainer from '../Body/PlaylistContainer';
import { IoIosSearch } from 'react-icons/io';
import {AiOutlineClose}  from 'react-icons/ai';
import RecommendationItem from '../../Element/RecommendationItem';
function CreatePlaylist() {
  const playlistData = {
    title: 'My Playlist #1',
    img: "",
    user: "Stark",
    type: 'private'
  }
  const recommendation = true;
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const onChangeHanlde = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <Container>
      <PlaylistContainer playlistData={playlistData} />
      <CreateBody>
        {showSearch && <TopLine />}
        {!showSearch && 
        <div className='find_more' onClick={e => setShowSearch(!showSearch)}>
          <span>FIND MORE</span>
        </div>
        }
        
        {
          showSearch && (
            <div className="search_for_song">
              <div className="left">
                <h3>Let's find something for your playlist</h3>
                <SearchBar>
                  <IoIosSearch className='srch' />
                  <input type="text" value={searchValue} placeholder="Search for songs for episodes" onChange={onChangeHanlde} />
                </SearchBar>
              </div>
              <AiOutlineClose className='close' onClick={e => setShowSearch(!showSearch)}/>
            </div>
          )
        }
        {
          !showSearch && (
            <Recommendation>
                <RecommendationItem cover={``} album={`BTS`} singers={`Suraj`} title={`Hello Stark`} handler={(e)=>{}}albumLink='' singersLink=''/>
            </Recommendation>
          )
        }
        <BottomLine />
      </CreateBody>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .find_more{
      display: flex;
      padding: 0 2rem;
      width: 100%;
      justify-content: flex-end;
      span{
        color:white;
        font-size: .75rem;
        font-weight: 700;
      }
    }
    .search_for_song{
      padding: 0 2rem;
      padding-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      hr{
          margin-top:0rem;
          margin-bottom: 8rem;
          display: flex;
          width: 100%;
      }
      h3{
        color: white;
        font-size: 1.22rem;
        letter-spacing: 0.02rem;
        margin-bottom: 1.5rem;
      }

      .close{
        display: flex;
        fill: white;
        font-size: 1.7rem;
      }
    }


`

const BottomLine = styled.div`
  height: 10rem;
  margin-top: 10rem;
  border-top: 1px solid grey;
  margin-left:2rem;
  margin-right: 2rem;
`

const TopLine = styled.div`
  border-top: 1px solid grey;
  margin-left:2rem;
  margin-right: 2rem;
`

const CreateBody = styled.div`
  display:grid;
  grid-template-rows: 1.7fr 5fr 10fr;
`

const SearchBar = styled.div`
  background-color: #424141;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  z-index: 2;
  width: 100%;
  border-radius: 0.2rem;
  
  .srch{
    font-size: 1.5rem;
    font-weight: 100;
    color:#c5bfbf;
  }
  input{
    outline: none;
    width: 100%;
    border: 0;
    font-size: 1rem;
    padding: 0.5rem;
    background-color: inherit;
    color:#c5bfbf;
    &::placeholder{
      color: #c5bfbf;
    }
  }
`

const Recommendation = styled.div`
  margin-left: 2rem;
  margin-right: 1rem;
  /* border: 1px solid red; */
`
export default CreatePlaylist