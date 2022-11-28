// import React, { useEffect, useRef, useState } from 'react'
// import styled from 'styled-components'
// // import playIcon from '../../../assets/svg/play.svg';
// // import pauseIcon from '../../../assets/svg/pause.svg';
// // import librarayIcon from '../../../assets/svg/library.svg';
// // import mice from '../../../assets/svg/mice.svg';
// // import mono from '../../../assets/svg/mono.svg';
// // import radio from '../../../assets/svg/radio.svg';
// // import mute from '../../../assets/svg/adiooff.svg';
// // import mediamSound from '../../../assets/svg/mediamsound.svg';
// // import fullSound from '../../../assets/svg/fullsound.svg';
// // import lowSound from '../../../assets/svg/lowsound.svg';
// import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from 'react-icons/bs';
// import { CgPlayTrackNext, CgPlayTrackPrev, } from 'react-icons/cg';
// import { FiRepeat } from 'react-icons/fi';


// import Slider from '../../Element/Slider';
// import { useStateProvider } from '../../../utils/StateProvider';

// class PlayerFooter extends React.Component {
    
//     constructor(props) {
//       super(props)
//       this.state = {
//         playing :  false,
//         value : 0,
//         duration : 10000
//       }
//     }

//     getMinSec = (ms) =>{
//         const min =  Math.floor(ms/60000);
//         const sec =  ((ms%60000)/1000).toFixed(0);
//         return min + ":" + (sec < 10 ? "0"  : "") + sec;
//     }

//     durationController = (e) =>{
//         this.setState(prevState => ({
//             value : +e.target.value
//         }))
//     }

//     changeState = () => {
//         const {playing,value,duration} =  this.state;
//         if(playing  && value !== duration){
//             this.player = setInterval(()=>{

//                 if(this.state.value === duration){//starting from begning
//                     this.setState(prevState => ({
//                         value:0,
//                         playing :  true
//                     }))
//                     this.stopPlayer();

//                 }else{
//                     this.setState(prevState => ({
//                         value : prevState.value + 1000
//                     }));
//                 }
//             },1000);
//         }

//         this.setState(prevState => ({
//             playing :  !prevState.playing
//         }));

//         if(!playing){
//             this.stopPlayer();
//         }
//     }

//     stopPlayer = () => {
//         clearInterval(this.player);
//     }
//     componentDidMount = () =>{
//     }
//   render (){
//    return (
//     <Container>
//     <LeftContainer>
//     </LeftContainer>
//     <PlayControl>
//         <div className="icons">
//             <BsShuffle />
//             <CgPlayTrackPrev className='size2rem'/>
//             {this.state.playing ? <BsFillPlayCircleFill onClick={this.changeState} className='play_pause'/> : <BsFillPauseCircleFill onClick={this.changeState} className='play_pause'/>}
//             <CgPlayTrackNext className='size2rem'/>
//             <FiRepeat />
//         </div>
//         <div className="track_input">
//             <span>{this.getMinSec(this.state.value)}</span>
//             <Slider 
//                 handleChange={this.durationController}
//                 value={this.state.value} 
//                 min={1000}
//                 max={this.state.duration}
//                 step={1000}
//                 />
//             <span>-{this.getMinSec(this.state.duration - this.state.value)}</span>
//         </div>
//     </PlayControl>
//     <VolumeControl>

//     </VolumeControl>
// </Container>
//    )
//   }
// }

// const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: #202020;
//     display: grid;
//     grid-template-columns: 2.5fr 4fr 2fr;
// `

// const LeftContainer = styled.div`
//     min-width: 230px;
//     border: 1px solid red;
// `

// const PlayControl = styled.div`
//     border: 1px solid green;
//     min-width: 290px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap:1rem;
//     .icons{
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap:1rem;
//         .size2rem{
//             font-size: 2rem;
//         }
//         .play_pause{
//             font-size: 2.3rem;
//         }
//         svg{
//             color: #b3b3b3;
//             transition: 0.2s ease-in-out;
//         }
//     }

//     .track_input{
//         display: flex;
//         gap:0.5rem;
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//         position: relative;
//         padding: 0 1rem;
//         span{
//             width: 20%;
//         }
//     }
// `
// const VolumeControl = styled.div`
// min-width: 228px;
//     border: 2px solid yellow;
// `
// export default PlayerFooter