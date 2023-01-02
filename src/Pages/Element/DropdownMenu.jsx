import React, { useRef } from 'react'
import styled from 'styled-components'
import {BiPlay}  from 'react-icons/bi';
import { Link } from 'react-router-dom';

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
    
    const linkRef =  useRef();
    const handleClick = () => {
        alert("Hello");
        // linkRef.current.click();
    }
    const list =  props?.menuItem ??data;
    return (
        <Container ref={props.menuRef} >
            <ul className='menu-item'>
                {
                    list.map(item => {
                        return (
                            <li className={`${item.cName} item`} onclick={(e)=>handleClick()} key={item.name}>
                                <Link to={item?.path} ref={linkRef} target={(item?.path==='/account') && '_blank'}><span>{item.name}</span>
                                {
                                    item?.name ==="Share" && (
                                        <BiPlay/>
                                    )
                                }
                                </Link>
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
    z-index: 2;
    width: 100%;
    .menu-item{
        overflow: hidden;
        position: absolute;
        list-style-type: none;
        margin: 5px 0;
        min-width: 11rem;
        border: 1px solid grey;
        width: 100%;
        border:0;
        border-radius: 4px;
        background-color: #242323;
        padding: 5px 6px ;
        color:#f3f2f2;
        z-index: 1;
        /* border: 5px solid green; */
        .share,.delete,.add_to_profile,.setting{
            border-bottom:1px solid #4d4747;
        }
        .share{
            padding: 0;
            a{
                display: flex;
                align-content: center;
                text-align: center;
                gap:5rem;
                svg{
                    font-size: 1.2rem;
                    display: flex;
                }
            }
        }
        li{
            margin: 0;
            padding-left: 0.3rem;
            padding-right: 0.3rem;
            width: 100%;
            padding: 0.7rem 0.1rem;
            cursor: pointer;
            a{  
                text-decoration: none;
                width: 100%;
                font-size: 0.8rem;
                font-weight: 500;
                height: 100%;
                text-align: left;
                border:none;
                color:inherit;
                background: none;
                margin: 0;
                cursor: pointer;
                border: 0;
                border-radius: 2px;
                padding: 10px;
                span{
                    font-size: 0.8rem;
                }
            }
            &:hover{
                    background-color: #3f3b3b;
            }
        }
    }
`
export default DropdownMenu