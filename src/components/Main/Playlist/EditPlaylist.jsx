import React, { useState } from 'react'
import styled from 'styled-components'
import { RiMusic2Line } from 'react-icons/ri';
import { HiOutlinePencil } from 'react-icons/hi';

function EditPlaylist() {
    const isImg = false;
    const [values, setValues] = useState({ title: "", description: "" });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    return (
        <Container>
            <div className="heading">
                <h2>Edit details</h2>
            </div>
            <div className="body">
                <div className='details'>
                    <div className="image">
                        {
                            !isImg ? (
                                <div className='music_icon'>
                                    <RiMusic2Line />
                                </div>
                            )
                                :
                                <img src={require('../../../assets/femalVersion.jpg')} alt="Selected Playlist" />
                        }
                        <div className='edit_icon'>
                            <HiOutlinePencil style={{ strokeWidth: "40" }} />
                            <span>Choose photo</span>
                        </div>
                    </div>
                    <div className="text_inputs">
                        <div className="name">
                            <label htmlFor="title">Name</label>
                            <input type="text" value={values.title} name="title" onChange={handleInputs} placeholder="Add a name" />
                        </div>
                        <div className="description">
                            <label htmlFor="description">
                                Description
                            </label>
                            <input type="textarea"
                                name="description"
                                value={values.description}
                                onChange={handleInputs}placeholder="Add an optional description"
                            />
                            
                        </div>
                    </div>
                </div>
                <div className="save_btn">

                </div>
            </div>
            <div className="bottom">
                <p>
                    By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.
                </p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 9rem;
    width: 35rem;
    height: 22rem;
    background-color: #222121;
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-rows: 0.7fr 3fr 0.8fr;
    flex-direction: column;
    border-radius: 0.6rem;
    .heading{
        display: flex;
        align-items: center;
        h2{
            color: white;
        }
    }
    .body{
        border: 1px solid blue;
        display: grid;
        grid-template-rows: 3fr 1fr;
        .details{
            border: 2px solid green;
            .image{
                box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                width: 11.5rem;
                height: 11rem;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #312f2f;
                img{
                    width: 100%;
                    box-shadow: rgba(0,0,0,0.25) 0px 25px 50px -12px;
                }
                .music_icon{
                    display: inline-block;
                    svg{
                    color: #a09e9e;
                    font-size : 4.5rem ;
                    font-weight: 100;
                    }
                }
                .edit_icon{
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    position: absolute;
                    align-items: center;
                    gap:4px;
                    background-color: rgba(0, 0, 0, 0.65);
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    color: #f3eaea;
                    svg{
                        font-size : 3rem;
                        stroke-width: 1px;
                        stroke-linecap:1px;
                    }
                    span{
                        letter-spacing: 1px;
                    }
                    z-index: 1;
                    }
                &:hover{
                    img{
                    z-index: 0.5;
                    }
                    .music_icon{
                    display: none;
                    }
                    .edit_icon{
                    display: flex;
                    }
                }
            }

        }
        .save_btn{
            border: 1px solid yellow;
        }
    }

    .bottom{
        /* border: 1px solid yellow; */
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        p{
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.0064rem;
            line-height: 1rem;
            color: white;
        }
    }

`
export default EditPlaylist