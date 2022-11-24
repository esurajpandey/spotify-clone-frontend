import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tagContent } from './HomeContent';
import SearchInput from "../Navbar/SearchInput";
function Search() {
  return (
    <Container>
      <h3 className='tag_head'>Browse all</h3>
      <div className='tags'>
        <ul className='tag_cards'>
          {
            tagContent.map((item, index) => {
              return (
                <li className='tag_card' key={item.id}>
                  <Link to={`/tagContents/${item.id}`}>
                    <h3>{item.title}</h3>
                    <div className="tag_image">
                      <img src={require('../../../assets/femalVersion.jpg')} alt="" />
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <hr/>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 2rem;
  padding-top: 1.6rem;
  padding-right: 0.6rem;
  padding-bottom: 8rem;
  .tag_head{
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
    margin-top: 1.8rem;
  }
  .tags{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .tag_cards{
      display: flex;
      flex-wrap: wrap;
      gap:1.5rem;
      width: 100%;
      list-style-type: none;
      .tag_card{
        cursor: pointer;
        background: #504242;
        width: 11.5rem;
        height: 12rem;
        padding: 1rem;
        border-radius: 0.6rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        a{
          text-decoration: none;
        }
        h3{
          color: white;
          font-size: 1.4rem;
          width: 100%;
          display: flex;
        }
        .tag_image{
          position:relative;
          top: 4rem;
          left: 5rem;
          transform: rotate(30deg);
          box-shadow: -0px 0px 0px 0px rgba(0,0,0,0.75);
          img{
            border-radius: 2px;
            position: relative;
            width: 6.5rem;
            height: 6.5rem;
          }
        }
      }
    }
  } 
  hr{
    width: 98.5%;
    margin-top: 5rem;
    margin-bottom: 4rem;
    border: 0.1px solid #474747;
    height: 1px;
  }
`
export default Search