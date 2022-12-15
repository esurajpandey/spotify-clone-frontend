import React from 'react'
import styled from 'styled-components'

function SelectOption({ options, text, name,value }) {

    return (
        <SelectComponentContainer>
            <label htmlFor="">{text}</label>

            <select name={name} value={value}>
                {
                    options.map((option, index) => {
                        return (
                            <option value={option} className='option'>
                                <span>{option === 'Unknown' ? 'Prefer not to say' : option}</span>
                            </option>
                        )
                    })
                }
            </select>
        </SelectComponentContainer>
    )
}

const SelectComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    label{
        color: black;
        font-size: 0.875rem;
        font-weight: 700;
    }
    select{
        width: 100%;
        padding: 14px 10px;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        text-indent: 0.01px;
        border-radius: 4px;
        font-weight: 500;
        background-color: transparent;
    }

    .option{
        padding-right: 1rem;
        span{
            letter-spacing: 0.05rem;
        }
    }
`
export default SelectOption