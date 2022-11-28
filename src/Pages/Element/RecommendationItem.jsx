import React from 'react'
import styled from 'styled-components'
import {BsFillPlayFill} from 'react-icons/bs';
import coverImage from '../../assets/femalVersion.jpg'
function RecommendationItem({cover,album,singers,title,handler,albumLink,singersLink}) {
  return (
    <Container>
        <Cover>
            <BsFillPlayFill className='playBtn'/>
            <div className="image">
                <img src={coverImage} alt=''/>
            </div>
        </Cover>
        <Info>
            <h4>{title}</h4>
            <a href='.'>{singers}</a>
        </Info>
        <Album>
            <a href='.'>{album}</a>
        </Album>
        <AddButton>
            <button onClick={handler}>
                <span>Add</span>
            </button>
        </AddButton>
    </Container>
  )
}



const Cover = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .playBtn{
        opacity: 0;
        position: absolute;
        color : white;
        font-size: 1.5rem;
    }
    .image{
        img{
            width: 100%;
            height: 100%;
        }
    }
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 9fr 7fr 1.2fr;
    color:#b3aaaa;
    padding: 0.5rem;
    align-items: center;
    border: 1px solid transparent;
    a{
        text-decoration: none;
        color: grey;
        &:hover{
            color: white;
            text-decoration: underline;
        }
    }
    &:hover{
        background-color: #1d1c1c;
    }
    &:hover ${Cover}{
        .playBtn{
            opacity: 1;
        }
        .image{
            img{
                opacity: 0.2;
                background-color: rgba(0,0,0,0.5);
            }
        }        
    }

`

const Info = styled.div`
    
`

const Album = styled.div`
    
`

const AddButton = styled.div`
    button{
        padding: 0.4rem 0.9rem;
        font-size: 1rem;
        border-radius: 1rem;
        border: 0;
        background-color: inherit;
        outline: 1px solid grey;
        transition: 0.3s ease-in-out;
        box-sizing: border-box;
        span{
            font-weight: 500;
            color: #fdf7f7;
        }
        &:hover{
            scale: 1.07;
        }
    }   
`

export default RecommendationItem