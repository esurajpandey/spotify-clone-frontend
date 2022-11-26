import React,{useEffect,useState,useRef} from 'react'
import styled from 'styled-components'

function Slider({percentage,min,onChange,max,step}) {
  const [position,setPosition] = useState(0);
  const [marginLeft,setMarginLeft] = useState(0);
  const [progessBarWidth,setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();
  useEffect(()=>{

    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;

    const centerProgressBar = thumbWidth + rangeWidth / 100 * percentage - (thumbWidth/100  * percentage);
    setProgressBarWidth(centerProgressBar);
    const centerThumb = (thumbWidth /100) * percentage * -1;
    setMarginLeft(centerThumb); 
    setPosition(percentage);
  },[percentage]);

  return (
    <SlideContainer>
        <Progress width={progessBarWidth}/>
        <Thumb left={position} marginLeft={marginLeft} ref={thumbRef}/>

        <Range 
        type='range'
        defaultValue={percentage}
        ref={rangeRef}
        step='0.01'
        className='range'
        onChange={onChange}
        />
    </SlideContainer>
  )
}

const SlideContainer = styled.div`
    width: 100%;
    position: relative;
    --progess-bar-height : 4px;
    --thumb-width:8px;
    --thumb-height:8px;

  ::before{
    content: '';
    background-color: white;
    width: 99%;
    height: calc(var(--progress-bar-height) - 1px);
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`

const Progress = styled.div`
  width: 0%;
  height: var(--progress-bar-height);
  display: block;
  position: absolute;
  top: 50%;
  width:${({width})=> (`${width}px`)};
  border-radius: 10px;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
`
const Thumb = styled.div`
    width: 20px;
    height: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);
    z-index: 3;
    background: rgb(255, 255, 255);
    position: absolute;
    left:${({left})=> (`${left}%`)};
    margin-left: ${({marginLeft}) => (`${marginLeft}px`)};
    border-radius: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    pointer-events: none; /* Remove pointer events on thumb so user can click on the actual thumb beaneath it!  */
    user-select: none; 

`

const Range = styled.input`
  -webkit-appearance: none;
  background-color: rgba(240, 9, 9, 0.397);
  height: 10px;
  width: 100%;
  cursor: pointer;
  opacity: 1;
  margin: 0 auto;

  ::-webkit-slider-thumb{
    background: #350f2d;
    border: 1px solid #000000;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }

  
`

export default Slider