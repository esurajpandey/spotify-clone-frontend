import React from 'react'
import styled from 'styled-components'
import Button from '../../Element/Button';
import { recentContent } from '../Body/HomeContent';
import Card from '../../Cards/Card';
import { Link } from 'react-router-dom';

function PodcastContent() {
  const userPodcast = true;

  return (
    <Container>
      {
        userPodcast && (
          <div className='no_podcast'>
            <h1>Follow your first podcast</h1>
            <p>Follow podcasts you like by tapping the follow button</p>
            <div className="btn">
              <Button text={"Find podcasts"} path='/spotify/podcasts' bg="white" />
            </div>
          </div>
        )
      }
      <h2 className='head'><Link to=''>Top podcasts</Link></h2>
      <div className="spotify_podcasts">
        <ul>
          {
            recentContent && (
              recentContent.map(item=> {
                return (
                    <li>
                        <Card item={item} play={false} playBtn={false}/>
                    </li>
                )
            })
            )
          }
        </ul>
      </div>
      <hr/>
    </Container>
  )
}

const Container = styled.div`
    padding-left: 2rem;
    padding-top: 2rem;
    padding-right: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .no_podcast{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:2rem;
      h1{
        color : white;
      }
      p{
        color: white;
      }
    } 
    .head{
      a{
        color: white;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    .spotify_podcasts{
      margin-top: 1rem;
      ul{
        display: flex;
        list-style-type: none;
        gap:2rem;
      }
    }
    hr{
      width: 96.5%;
      margin-top: 5rem;
      margin-bottom: 13.4rem;
      border: 0.1px solid #7a7575;
      height: 1px;
    }
`

export default PodcastContent