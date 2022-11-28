import React from 'react'
import {BsRecordCircle} from 'react-icons/bs';
import styled from 'styled-components'
import Button from '../../Element/Button';;
function AlbumContent() {
  const userAlbums = false;
  return (
    <Container>
            {
                !userAlbums && (
                    <div className='no_albums'>
                        <BsRecordCircle/>
                        <h1>Follow Your first   album</h1>
                        <p>Save album by tapping the heart icon.</p>
                        <div className="btn">
                            <Button text={"Find albums"} path='/spotify/albums' bg="white" />
                        </div>
                    </div>
                )
            }
        </Container>
  )
}


const Container = styled.div`
    padding-left: 2rem;
    padding-top: 1.6rem;
    padding-right: 0.4rem;
    padding-bottom: 8rem;
    .no_albums{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:2.4rem;
        color:white;
        svg{
            font-size: 4rem;
        }
    }   
`
export default AlbumContent