import React from 'react'
import styled from 'styled-components'

function Slider({value,handleChange,min,max,step}) {
  return (
    <Container>
        <RangeSlider 
        type='range' 
        onChange={handleChange} 
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const RangeSlider = styled.input`
    -webkit-appearance:none;
    width: 100%;
    outline: none;
    height: 4px;
    border: 4px;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    ::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        opacity: 0;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: red;
        cursor: pointer;
    }

    ::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
        opacity: 0;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: red;
        cursor: pointer;
    }
    &:hover{
        ::-webkit-slider-thumb{
            opacity: 1;
        }
        ::-moz-range-thumb{
            opacity: 1;
        }
    }

    ::-webkit-slider-thumb,
	 ::-ms-track{
        background-color: 3f91e5;
        width: 250px;
     }


`

export default Slider