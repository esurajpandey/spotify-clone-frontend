import React from 'react';
import styled from 'styled-components';

function CheckBox({text,name,value}) {
  return (
    <CheckBoxConatiner>
        <input type="checkbox" />
        <label htmlFor=""><span>{text}</span></label>
    </CheckBoxConatiner>
  )
}


const CheckBoxConatiner =  styled.div`
    display: flex;
    flex-direction: row;
    gap:1rem;
    justify-content: flex-start;
    align-items: flex-start;
    label{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      span{
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-transform: none;
        letter-spacing: normal;
      }
    }
    input{
      width: 1rem;
      height: 1rem;
      
      &:focus{
          pointer-events: none;
          transition: border-color 300ms ease-in 0.1s;
          border-radius: 500px;
          border: 3px solid black;
      }  
    }

`
export default CheckBox