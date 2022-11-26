import React from 'react'
import styled from 'styled-components'
import Card from '../../Cards/Card';

function ItemBody({ items, play }) {
    return (
        <Container>
            <ul className='card_lists'>
                {
                   items &&  items.map((item, index) => {
                        return (
                            <li className='cards' key={item.id}>
                                <h2 className='heading'><a href='/'>{item.title}</a></h2>
                                <ul className='card_items'>
                                    {
                                        item.cards.map((item, index) => {
                                            return (
                                                <li key={item.id}>
                                                    <Card item={item} play={play} playBtn={true}/>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 4rem;
        .card_lists{
            width: 100%;
            display: flex;
            flex-direction: column;
            .cards{
                width: 100%;
                /* border: 1px solid yellow; */
                display: flex;
                flex-direction: column;
                margin: 1em 0;
                .heading{
                    a{
                        text-decoration: none;
                        color:white;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                    padding-bottom: 1rem;
                }
                .card_items{
                    display: flex;
                    gap:2rem;
                    list-style-type: none;
                }
            }
        }
`

export default ItemBody