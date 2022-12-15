import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../DashBoard/NavBar/Navbar'
import AccountSideBar from '../DashBoard/NavBar/AccountSideBar'
import TextButton from '../../components/TextButton';
import Footer from '../DashBoard/Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import AccountOverview from './Update/AccountOverview';
import Edit from './Update/Edit';
import ChangePassword from './Update/ChangePassword';
import Setting from './Update/Setting';
import RecoverPlaylist from './Update/RecoverPlaylist/Recover';

function Account() {

    useEffect(() => {
        document.title = 'Account Overview';
    }, []);
    const path = useLocation().pathname;
    console.log(path);
    return (
        <AccountContainer>
            <Navbar />
            <div className="account_body">
                {path === '/account' && <TopPic>
                    <div className="left_header_element">
                        <h1>Get 3 months of Premium for free</h1>
                        <h2>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h2>

                        <div className="left_header_plan_button">
                            <TextButton
                                text={`GET 3 MONTHS FREE`}
                                bg={'black'} 
                                fg={'white'} 
                                type={'button'} 
                                padding={`1rem 2rem`} 
                            />
                        </div>
                        <span className='left_header_para'>
                            <p>Individual plan only. ₹119/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 31-Dec-2022.</p>
                        </span>
                    </div>
                    <div className="right_image_header_element">

                    </div>
                </TopPic>}
                <div className="account_main_body_container">
                    <AccountSideBar />
                    <div className="account_body_page_container">
                        <Routes>
                            <Route path='/' exact element={<AccountOverview/>}/>
                            <Route path='editProfile' element={<Edit/>}/>
                            <Route path='changePassword' element={<ChangePassword/>}/>
                            <Route path='notification' element={<Setting/>}/>
                            <Route path='recoverPlaylists' element={<RecoverPlaylist/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer/>
        </AccountContainer>
    )
}

const AccountContainer = styled.div`
    background-color: #1F2A39;
    height: 100%;

    .account_body{ 
        margin: 0 5rem;
        background-color: #2b2525;
    }
    .account_main_body_container{
        display: flex;

        .account_body_page_container{
            background-color: white;
            width: 100%;
        }
    }

`

const TopPic = styled.div`
    width: 100%;
    height: 80vh;
    background-color: #E1538B;
    color:white;
    font-family: 'product-sans300';
    padding-top: 3rem;

    .left_header_element{
        display: flex;
        flex-direction: column; 
        justify-content: flex-start;
        gap:2.5rem;
        width: 55%;
        padding: 1rem;
        h1{
            font-size: 3rem;
            line-height: 1.2;
            letter-spacing: 0.05rem;
            font-weight: 700;
            max-width: 100%;
            width: 100%;
        }
    }

    .left_header_plan_button{
        display: flex;
        border: 3px solid transparent;  
    }

    .left_header_para{
        p{
            font-family: 'gotham';
            font-size: 0.8rem;
            font-weight: 900;
            line-height: 1rem;
        }
    }
`
export default Account