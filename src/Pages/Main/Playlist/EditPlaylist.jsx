import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { RiMusic2Line } from 'react-icons/ri';
import { HiOutlinePencil, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useStateProvider } from '../../../utils/StateProvider';
import { BiErrorCircle } from 'react-icons/bi';
import { reducerCases, root } from '../../../utils/Constants';

function EditPlaylist({ id,title, image ,description}) {
    const [values, setValues] = useState({ title:"", description: "" });
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState("");
    const [file,setFile] = useState(null);

    const isFirstRender = useRef(true);
    const fileRef = useRef(null);
    const [{ editPopup,token,currentPlaylist }, dispatch] = useStateProvider();

    const savePlaylist = () => {
        const fd = new FormData();
        fd.append('cover',file);
        fd.append("title",values?.title?? title)
        fd.append("description",values?.description?? "");
        fd.append("playlistId",id);
        fetch(`${root}/playlist/edit`,{
            method : "POST",
            body :  fd,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => resp.json(fd))
        .then(resp =>{

            currentPlaylist.title = resp?.title;
            currentPlaylist.description = resp?.description;
            currentPlaylist.cover =  resp?.cover;

            dispatch({type:reducerCases.SET_CURRENT_PLAYLIST,currentPlaylist:currentPlaylist})
        })

        if(values?.title )
            dispatch({ type: reducerCases.SET_EDIT_POP_UP, editPopup: !editPopup })
    }


    const fileChangeHandler = (e) => {
        let files = e.target.files;
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setSelectedImage(reader.result);
            }
        }
        setFile(files[0]);
        reader.readAsDataURL(files[0]);
    }

    const closeEdit = () => {
        dispatch({ type: reducerCases.SET_EDIT_POP_UP, editPopup: !editPopup })
    }

    const fileUpload = (e) => {
        fileRef.current.click();
    }


    const onTitleChange = (e) => {
        if(!e.target.value){
            setError("Playlist name is required.");
        }else{
            setError(prev=>"")
        }
        setValues({...values,[e.target.name]:e.target.value})
    }


    const handleDecription = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        if (isFirstRender?.current) {
            isFirstRender.current = false;
            setSelectedImage(image)
            values.title = title;
            values.description = description;
            fileUpload();
        }
    }, []);



    return (
        <Container>
            <div className="header">
                <div className="heading">
                    <h2>Edit details</h2>
                    <AiOutlineClose onClick={closeEdit} />
                </div>
                {error && 
                    <div className="error-class">
                        <BiErrorCircle />
                        <span>{error}</span>
                    </div>
                }
            </div>
            <div className="body">
                <div className='details'>
                    <ImageUploader>
                        <input id="selectFile" type='file' className='file_uploader' accept="image/*"
                            onChange={fileChangeHandler} multiple={false}
                            ref={fileRef} />

                        <div className="top">
                            <HiOutlineDotsHorizontal />
                        </div>
                        <div className='image-bottom' onClick={fileUpload}>

                            {
                                !selectedImage ? (
                                    <div className='music_icon'>
                                        <RiMusic2Line />
                                    </div>
                                )
                                    :
                                    <img src={selectedImage} alt="Selected Playlist" />
                            }
                            <div className='edit_icon'>
                                <HiOutlinePencil style={{ strokeWidth: "40" }} />
                                <span>Choose photo</span>
                            </div>
                        </div>
                    </ImageUploader>

                    <div className="text_inputs">
                        <div className="name">
                            <input type="text" value={values.title} name="title" onChange={onTitleChange} placeholder="Add a name" className='shadow' />
                            <label htmlFor="title" className='lblEdit'>Name</label>
                        </div>
                        <div className="description">
                            <textarea
                                name="description"
                                value={values.description}
                                onChange={handleDecription}     
                                placeholder="Add an optional description"
                                className='shadow'
                                rows={6.9} cols={50}
                            />
                            <label htmlFor="description" className='lblEdit'>
                                Description
                            </label>
                        </div>
                    </div>
                </div>
                <div className="save_btn">
                    <button onClick={savePlaylist} >
                        <span>
                            Save
                        </span>
                    </button>
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
    width: 33rem;
    height: 24rem;
    padding: 1rem 1.5rem;
    background-color: #423f3f;
    position: fixed;
    top:20%;
    left: 30%;
    z-index: 6;
    display: grid;
    grid-template-rows: 0.7fr 4fr 0.8fr;
    border-radius: 0.6rem;

    .header{
        display: flex;
        flex-direction: column;
        gap:0.5rem;
        .error-class{
            width: 100%;
            border: 1px solid red;
            background-color: red;
            padding: 5px 3px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap:0.5rem;
            border-radius: 0.2rem;
            svg{
                fill: white;
                font-size: 1.2rem;
            }
            span{
                font-size: 0.8rem;
                color:white;
            }
        }
    }
    .heading{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            color: white;
        }
        svg{
            fill: #a3a0a0;
            width: 2rem;
            height: 2rem;
            padding: 5px;
            border-radius:50%;
            background-color: transparent;
            &:hover{
                background-color: #1d1b1b;
            }
        }
    }
    .shadow{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    .body{
        /* border: 1px solid blue; */
        position: relative;
        display: grid;
        grid-template-rows: 3fr 2fr;    
        position: relative;
        top:0.5rem;
        box-sizing: border-box;
        .file_uploader{
          display  :none ;
        }
        .details{   
            display: grid;
            grid-template-columns: 2.7fr 4fr;
            position: relative;
            /* border: 1px solid red; */
            background-color: #423f3f;

            .text_inputs{
                display: flex;
                flex-direction: column;
                position: relative;
                padding-left: 0.5rem;
                padding-top: 0.2rem;
                /* border: 1px solid red; */
                .name, .description{
                    display: flex;
                    flex-direction: column;
                    padding-bottom: 0.8rem;
                    position: relative;
                    input,textarea{
                        width: 98%;
                        border-radius: 0.2rem;
                        box-sizing: border-box;
                        padding: 0.7rem;
                        border: 0;
                        font-size: 0.875rem;
                        color: #f8eeee;
                        background-color: #423f3f;
                        outline: none;
                        &::placeholder{
                            color:#969292;
                        }
                        &:focus + .lblEdit{
                            display: block;
                            opacity: 1;
                        }
                        &:focus{
                            outline: 1px solid #969292;
                        }
                    }
                    label{
                        position: absolute;
                        left: 10px;
                        color:white;
                        font-size: 0.7rem;
                        font-weight: 700;
                        opacity: 0;
                        transition: 0.3s ease-in;
                        z-index: 1;
                    }
                    
                    
                }
                .name{
                    label{
                        bottom:88%
                    }
                }
                .description{
                    textarea{
                        
                        resize:none;
                        overflow: hidden;
                        
                    }
                    label{
                        bottom: 96.5%;
                    }
                }
            }

        }
        .save_btn{
            background-color: #423f3f;
            display: flex;
            justify-content: flex-end;
            box-sizing: border-box;
            align-items: center;
            padding-right: 0.2rem;
            button{
                box-sizing: border-box;
                border: none;
                border-radius: 1.8rem;
                padding: 0.9rem 1.9rem;
                transition: 100ms ease-in-out;
                span{
                    font-size: 1rem;
                    font-weight: 700;
                }
                &:hover{
                    scale: 1.04;
                }
            }
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

const ImageUploader = styled.div`
    width: 11.5rem;
    height: 11rem;
    position: relative;
    .top{
        width: 100%;
        position: absolute;
        display: none;
        justify-content: flex-end;
        align-items: center;
        z-index: 2;
        height: 2.1rem;
        padding-right: 0.5rem;
        padding-top: 0.5rem;
        svg{
            color:#dac7c7;
            background-color: #2e2c2c;
            border-radius: 50%;
            font-size: 1rem;
            width: 2rem;
            height: 2rem;
            &:hover{
                background-color: #141414;
                color: white;
            }
        }
    }
    .image-bottom{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #383636;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
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
            height: 100%;
            gap:4px;
            background-color: rgba(63, 61, 61, 0.65);
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
    &:hover{
        .top{
            display: flex;
        }
    }
`
export default EditPlaylist