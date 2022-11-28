import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { tagContent } from './HomeContent';
import { useParams } from 'react-router-dom';
import ItemBody from './ItemBody';
function TagBody() {
    // const [items, setItems] = useState([]);
    const id = useParams().id;
    const tag = tagContent.find(item => item.id == id);
    console.log(tag);
    console.log(tag);
    return (
        <Container>
            <div className="tag_head">
                <h1>{tag.title}</h1>
            </div>
            <div className="tag_items">
                {tag ? <ItemBody items={tag.items} play={false} /> : <div>No data found</div>}
            </div>
            <hr/>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 2rem;
    padding-top: 1.6rem;
    padding-right: 0.4rem;
    padding-bottom: 8rem;
    .tag_head{
        h1{
            font-size: 6rem;
            color: white;
            font-weight: 900;
        }   
    }
    hr{
        width: 98.5%;
        margin-top: 5rem;
        margin-bottom: 4rem;
        border: 0.1px solid #474747;
        height: 1px;
    }
`
export default TagBody