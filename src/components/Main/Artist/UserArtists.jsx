import React from 'react'
import styled from 'styled-components'
import {RiUserSearchLine} from 'react-icons/ri';
import Button from '../../Element/Button';;
function UserArtists() {
    const userArtists = false;
    return (
        <Container>
            {
                !userArtists && (
                    <div className='no_artists'>
                        <RiUserSearchLine/>
                        <h1>Follow your first artist</h1>
                        <p>Follow artists you like by tapping the follow button.</p>
                        <div className="btn">
                            <Button text={"Find artists"} path='/spotify/artists' bg="white" />
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
    .no_artists{
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

export default UserArtists