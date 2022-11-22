import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
function DropdownMenu() {
    const [open, setOpen] = useState(false);
    const [listening,setListening] = useState(false);
    const menuRef =  useRef(null);
    const handleOpen = () => {
        setOpen(!open);
    }


    const listenForOutsideClicks=(listening,setListening,menuRef,setOpen)=>{
        if(listening) return;
        if(!menuRef.current) return;
        setListening(true);

        ['click','touchstart'].forEach((type)=>{
            document.addEventListener('click',(evt) =>{
                const cur = menuRef.current;
                const node = evt.target;
                if(cur.contains(node)) return;
                setOpen(false);
            })
        })
    }
    const list = [
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

    useEffect(()=>{
        listenForOutsideClicks(listening,setListening,menuRef,setOpen);
    },[]);

    return (
        <Container ref={menuRef}>
            <HiOutlineDotsHorizontal onClick={handleOpen} className="dot"/>
            {
                open ?
                    (
                        <ul className='menu'>
                            {
                                list.map(item => {
                                    return (
                                        <li className='item'>
                                            <button className={item.cName}>{item.name}</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ) :
                    null
            }
        </Container>
    )
}

const Container = styled.div`
    position: relative;
   
    .dot{
        font-size: 1.5rem;
        color: #cec6c6;
        display: flex;
        position: relative;
    }
    .menu{
        position: absolute;
        top: auto; 
        bottom: 100%;
        list-style-type: none;
        margin: 5px 0;
        border: 1px solid grey;
        width: 10rem;
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

        li{
            margin: 0;
            padding-left: 0.3rem;
            padding-right: 0.3rem;
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