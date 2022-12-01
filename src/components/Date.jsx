import React from 'react'
import styled from 'styled-components'
import {MdError}  from 'react-icons/md';
function Date(props) {
    const {dob,setDob,errors} =  props;
    const monthList = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const months = monthList.map((month,index) => (
        <option key={index} value={index+1}>{month}</option>
    ));

    const onChange = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;
        setDob({...dob,[name]:value});
    }

    return (
        <DateContainer>
            <label htmlFor="" className='title'>
                What's your date of birth?
            </label>
            <InputContainer errors={errors}>
                <div className="year">
                    <label htmlFor="">
                        Year
                    </label>
                    <input type="text" value={dob?.year} onChange={onChange} name="year" placeholder='YYYY'/>
                </div>
                <div className="month">
                    <label htmlFor="">
                        Month
                    </label>

                    <MonthList 
                        className="month"
                        // value={dob?.month}
                        name="month"
                        placeholder="Month"
                        onChange={onChange}
                        errors={errors}
                    >

                    <option  select="true" disabled value="">Month</option>
                    {months}   
                    </MonthList>
                </div>
                <div className="day">
                    <label htmlFor="">
                        Day
                    </label>
                    <input type="text" value={dob?.day} onChange={onChange} name="day" placeholder='DD'/>
                </div>
            </InputContainer>

            <div className="error">
                <p>{errors?.year && <><MdError/> {errors?.year} </>}</p>
                <p>{errors?.month && <><MdError/> {errors?.month} </>}</p>
                <p>{errors?.day && <><MdError/> {errors?.day} </>}</p>
            </div>
        </DateContainer>
    )
}

const DateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap:0.5rem;
    width: 28rem;
    .title{
        color: black;
        font-size: 0.875rem;
        font-weight: 700;
    }

    .error{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap:0.2rem;
        p{
        color:red;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
            svg{
                fill:red;
            }
        }
    }
`
const InputContainer =  styled.div`
    display: flex;
    gap:1.6rem;
    .day,.year,.month{
        display: flex;
        flex-direction: column;
        gap:0.5rem;
        label{
            font-size: 0.875rem;
        }
        input{
            font-size: 1rem;
            line-height: 1.5rem;
            text-transform: none;
            letter-spacing: normal;
            appearance: none;
            background-image: none;
            border: 0px;
            display: block;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 400;
            width: 100%;
            box-sizing: border-box;
            font-family: spotify-circular, Helvetica, Arial, sans-serif;
            -webkit-tap-highlight-color: transparent;
            margin-top: 0px;
            margin-bottom: 0px;
            border-radius: 4px;
            padding: 14px;
            background-color: var(--background-base,#ffffff);
            box-shadow: inset 0 0 0 1px var(--essential-subdued,#878787);
            color: var(--text-base,#000000);
            outline: ${({errors})=> ((errors?.year || errors?.day) ? '2px solid red' : '1px solid grey')};
        }        
    }

    .day{
        width: 45%;
    }
    .month{
        width: 100%;
    }
    .year{
        width: 55%;
    }


`

const MonthList =  styled.select`
    background-image: none;
    border: 0px;
    display: block;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    width: 100%;
    box-sizing: border-box;
    font-family: spotify-circular, Helvetica, Arial, sans-serif;
    -webkit-tap-highlight-color: transparent;
    margin-top: 0px;
    margin-bottom: 0px;
    appearance: none;
    text-indent: 0.01px;
    border-radius: 4px;
    padding: 14px 44px 14px 14px;
    background-color: var(--background-base,#ffffff);
    box-shadow: inset 0 0 0 1px var(--essential-subdued,#878787);
    color: var(--text-base,#000000);
    border: 0;
    outline: ${({errors})=> ((errors?.month) ? '2px solid red' : 'transparent')};
    .month{
        color: #878787;
        &:hover{
            background-color: transparent;
        }
    }
`
export default Date