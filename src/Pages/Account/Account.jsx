import React,{useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../DashBoard/NavBar/Navbar'

import AccountSideBar from '../DashBoard/NavBar/AccountSideBar'
function Account() {

    useEffect(() => {
        document.title = 'Account Overview';    
    }, []);

  return (
    <AccountContainer>
        <Navbar/>
        <div className="account_body">
            <AccountSideBar/>
        </div>
    </AccountContainer>
  )
}

const AccountContainer = styled.div`
    background-color: #1F2A39;
    height: 100%;
    
`
export default Account