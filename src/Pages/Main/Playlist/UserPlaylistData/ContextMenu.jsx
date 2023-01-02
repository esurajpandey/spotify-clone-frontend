
import React from 'react'
import styled from 'styled-components'

function ContextMenu({top,left}) {

    const menuListItem = [
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
    return (
        <ContextMenuContainer top={top} left={left}>
            {
                menuListItem.map((item,index)=>{
                    return (
                        <div className="menu_option">
                            <span>{item.name}</span>
                        </div>
                    )
                })
            }
        </ContextMenuContainer>
    )
}



const ContextMenuContainer = styled.div`
    /* border-radius: 4px; */
    /* padding: 1rem; */
    z-index: 20;
    box-sizing: border-box;
    position: absolute;
    top: ${({top})=>(`${top}px`)};
    left: ${({left})=>(left?`${left}px`:'0px')};

    background-color: #282828;
    border-radius: 3px;
    -webkit-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    max-height: calc(100vh - 24px);
    max-width: 350px;
    min-width: 160px;
    overflow-y: auto;
    padding: 4px;

    .menu_option{
        min-width: 7rem;
        /* border: 1px solid grey; */
        width: 100%;
        border:0;
        border-radius: 3px;
        padding: 0.7rem 0.6rem;
        color:#f3f2f2;
        z-index: 5;
        span{
            font-size:0.875rem;
            cursor: default;
            font-family: 'product-sans-regular',Arial, Helvetica, sans-serif;
        }
        &:hover{
            background-color:#555353;
        }
    }
`

export default ContextMenu