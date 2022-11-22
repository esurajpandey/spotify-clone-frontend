import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../../../utils/StateProvider';
import { reducerCases } from '../../../utils/Constants';

function CurrentTrack() {
    const [{token,currentlyPlaying},dispatch] = useStateProvider();
    useEffect(()=>{
        const getCurrentTrack = async() =>{
            // const resp = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
            //     headers: {
            //         Authorization: 'Bearer ' + token,
            //         "Content-Type": 'application/json'
            //     }
            // });
            const resp = "";
            if(resp.data !== ""){
                const {item} =  resp.data;
                const currentlyPlaying = {
                    id : item.id,
                    name : item.name,
                    artists : item.artists.map((artist) => artist.name),
                    image : item.album.images[2].url,
                };
                dispatch({type :  reducerCases.SET_PLAYING,currentlyPlaying});
            }else {
                dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
            }
        }
        getCurrentTrack();
    },[token,dispatch])
  return (
    <Container>
        {
            currentlyPlaying && (
                <div className="track">
                    <div className="track__image">
                        <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                    </div>
                    <div className="track__info">
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists.join(", ")}</h6>
                    </div>
                </div>
            )
        }
    </Container>
  )
}


const Container = styled.div`
    .track{
        display: flex;
        align-items: center;
        gap: 1rem;
        &__info{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            h4{
                color: white;
                padding: 0;
                margin: 0;
            }

            h6{
                color:#b3b3b3;
                padding: 0;
                margin: 0;
            }
        }
    }
`

export default CurrentTrack

