import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import mice from '../../../assets/svg/mice.svg';
import librarayIcon from '../../../assets/svg/library.svg';
import mute from '../../../assets/svg/adiooff.svg';
import mediamSound from '../../../assets/svg/mediamsound.svg';
import fullSound from '../../../assets/svg/fullsound.svg';
import lowSound from '../../../assets/svg/lowsound.svg';
import {useStateProvider}  from '../../../utils/StateProvider';
import {reducerCases}  from '../../../utils/Constants';
function Volume() {

    const [volIcon,setVolIcon] = useState(lowSound);
    const [isMute,setIsMute] = useState(false);
    const [{volume},dispatch] = useStateProvider();
    
    const onChange = (e) =>{
        const val = +e.target.value;
        dispatch({type:reducerCases.SET_VOLUME,volume : val});
    }

    const muteHandle = (e) =>{
        const prev =  isMute;
        if(!prev){
            dispatch({type:reducerCases.SET_VOLUME,volume : 0});
        }else{
            dispatch({type:reducerCases.SET_VOLUME,volume : 30});
        }
        setIsMute(!isMute);
    }

    useEffect(()=>{
        if(volume > 0 && volume <=30){
            setVolIcon(prev => lowSound)
        }
        else if(volume > 30 && volume <=80){
            setVolIcon(prev => mediamSound)
        }
        else if(volume > 80){
            setVolIcon(prev => fullSound)
        }else{
            setVolIcon(prev => mute)
        } 
    },[volume])

  return (
    <Container>
        <div className="mic">
            <img src={mice} alt="" />
        </div>
        <div className="library">
            <img src={librarayIcon} alt="" />
        </div>
        <Vol>
           <div className="icons">
                <img src={volIcon} alt=""  onClick={muteHandle}/>
           </div>
           <div className="range">
                <input type="range" step={10} min={10} max={100} defaultValue={volume} onChange={onChange}/>
           </div>
        </Vol>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    
`
const Vol = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
`

export default Volume