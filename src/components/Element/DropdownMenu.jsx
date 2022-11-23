import React from 'react'
import styled from 'styled-components'
import {BiPlay}  from 'react-icons/bi';

function DropdownMenu(props) { 
    const data = [
        {
            name: "Add to queue",
            path: '',
            cName: 'add_queue menu_item'
        },
        {
            name: "Go to playlist radio",
            path: '',
            cName: 'go_to_radio menu_item'
        },
        {
            name: "Add to profile",
            path: '',
            cName: 'add_to_profile menu_item'
        },
        {
            name: "Edit Details",
            path: '',
            cName: 'edit_details menu_item'
        },
        {
            name: "Create similar playlist",
            path: '',
            cName: 'creae_similar_playlist menu_item'
        },
        {
            name: "Delete",
            path: '',
            cName: 'delete menu_item'
        },
        {
            name: "Share",
            path: '',
            cName: 'share menu_item'
        },
        {
            name: "Open in Desktop app",
            path: '',
            cName: 'open_in_desktop menu_item'
        }
    ]
    
    const list =  props?.menuItem ??data;
    return (
        <Container ref={props.menuRef} >
            <ul className='menu-item'>
                {
                    list.map(item => {
                        return (
                            <li className='item'>
                                <button className={item.cName}>{item.name}
                                {
                                    item.name ==="Share" && (
                                        <BiPlay/>
                                    )
                                }
                                </button>
                                
                            </li>
                        )
                    })
                }
            </ul>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    .menu-item{
        /* margin: auto;
        bottom: 100%;//for showing top */
        border: 1px solid red;
        position: absolute;
        list-style-type: none;
        margin: 5px 0;
        border: 1px solid grey;
        width: 100% ;
        border:0;
        border-radius: 4px;
        background-color: #242323;
        padding-top: 6px;
        padding-bottom: 6px;
        color:#f3f2f2;
        z-index: 1;
        .share,.delete,.add_to_profile{
            border-bottom:1px solid #c5c1c1;
        }
        .share{
            display: flex;
            align-content: center;
            text-align: center;
            gap:5rem;
            svg{
                font-size: 1.2rem;
                display: flex;
            }
        }
        li{
            margin: 0;
            padding-left: 0.3rem;
            padding-right: 0.3rem;
            width: 100%;
            button{
                width: 100%;
                font-size: 0.8rem;
                font-weight: 500;
                padding:5px;
                height: 100%;
                text-align: left;
                border:none;
                color:inherit;
                background: none;
                margin: 0;
                cursor: pointer;
                border: 0;
                border-radius: 2px;
                padding: 12px;
                &:hover{
                    background-color: #3f3b3b;
                }
            }
        }
    }
`
export default DropdownMenu