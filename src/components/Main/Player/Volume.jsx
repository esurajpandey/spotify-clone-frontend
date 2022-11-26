import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import mice from '../../../assets/svg/mice.svg';
import radio from '../../../assets/svg/mono.svg';
import librarayIcon from '../../../assets/svg/library.svg';
import mute from '../../../assets/svg/adiooff.svg';
import mediamSound from '../../../assets/svg/mediamsound.svg';
import fullSound from '../../../assets/svg/fullsound.svg';
import lowSound from '../../../assets/svg/lowsound.svg';

function Volume() {
    const [volumeRatio,setVolumeRatio] = useState(0);
    const [volIcon,setVolIcon] = useState(lowSound);
    const [isMute,setIsMute] = useState(false);
    const onChange = (e) =>{
        setVolumeRatio(prev => +e.target.value)
    }

    const muteHandle = (e) =>{
        setIsMute(!isMute);
    }
    useEffect(()=>{
        if(volumeRatio > 0 && volumeRatio <=30){
            setVolIcon(prev => lowSound)
        }
        else if(volumeRatio > 30 && volumeRatio <=80){
            setVolIcon(prev => mediamSound)
        }
        else if(volumeRatio > 80){
            setVolIcon(prev => fullSound)
        }else{
            setVolIcon(prev => mute)
        }

        
    },[volumeRatio])

    useEffect(()=>{
        if(isMute){
            setVolIcon(mute);
            setVolumeRatio(prev => 0);
        }else{
            setVolIcon(prev => lowSound)
            setVolumeRatio(prev => 30)
        }
    },[isMute]);
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
                <input type="range" step={10} min={10} max={100} defaultValue={volumeRatio} onChange={onChange}/>
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