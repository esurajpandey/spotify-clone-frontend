import React from 'react'
import styled from 'styled-components'

function NotificationItem({ header, desc, emailValue, pushValue }) {
    return (
        <NotificationItemContainer>
            <div className="noti_item_text">
                <div className="header">
                    <h4>{header}</h4>
                </div>
                <div className="desc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="right_checkbox">
                <div className="email_check chck_noti">
                    <input type="checkbox" />
                </div>
                <div className="push_check chck_noti">
                    <input type="checkbox" />
                </div>
            </div>
        </NotificationItemContainer>

    )
}

const NotificationItemContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr  1.3fr;
    align-items: center;
    width: 100%;
    .noti_item_text{
        display: flex;
        flex-direction: column;
        font-family: 'product-sans-regular',Arial, Helvetica, sans-serif;
        letter-spacing: 0.04rem;
        h4{
            font-weight: 500;
        }
        p{
            font-size: 0.875rem;
        }
    }
    .right_checkbox{
        display:flex;
        gap:3.5rem;
        align-items: center;
        input{
            width: 1rem;
            height: 1rem;
            color: #39be40;
            
            &:checked + &:before{
                background-color: #ED820A;
                border-color: #ED820A;
                color: #fff;
            }
        }
        .chck_noti{
            border: 3px solid transparent;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2px;
            
            &:focus-within{
                transition: 0.8s ease-in-out;
                border: 3px solid black;
            }
        }
    }

`

export default NotificationItem