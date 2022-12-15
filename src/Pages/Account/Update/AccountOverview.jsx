import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom';
import TextButton from '../../../components/TextButton';
import { reducerCases } from '../../../utils/Constants';
import { useStateProvider } from '../../../utils/StateProvider';

function AccountOverview() {
  const [{ token, userInfo }, dispatch] = useStateProvider();
  const navigate = useNavigate();
  
  const navigateToEdit = () => {
    return navigate('/account/editProfile');
  }

  useEffect(() => {
    fetch("http://localhost:3000/user/account", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(resp => {

        let data = {
          userName: resp?.userData?.userName,
          userEmail: resp?.userData?.userEmail,
          userDob: resp?.userData?.userDob,
          userGender: resp?.userData?.userGender,
          userCountry: resp?.userData?.userCountry,
          plan: resp?.planData
        }
        dispatch({ type: reducerCases.SET_USER_INFO, userInfo: data })
      })
  }, [dispatch, token])

  return (
    <AccountOverviewContainer>
      <div className="overview_heading">
        <h1>Account overview</h1>
      </div>
      <UserData>
        <h2 className='pr_heading'>Profile</h2>
        <tbody>
          <tr className="row">
            <td className='table_heading'>Username</td>
            <td className='table_data'>
              <p>{userInfo?.userName}</p>
            </td>
          </tr>
          <tr className="row">
            <td className='table_heading'>Email</td>
            <td className='table_data'>
              <p>{userInfo?.userEmail}</p>
            </td>
          </tr>
          <tr className="row">
            <td className='table_heading'>Date of birth</td>
            <td className='table_data'>
              <p>{userInfo?.userDob}</p>
            </td>
          </tr>
          <tr className="row">
            <td className='table_heading'>Country of region</td>
            <td className='table_data'>
              <p>{userInfo?.userCountry}</p>
            </td>
          </tr>
        </tbody>
      </UserData>

      <div className="overview_edit_button" onClick={navigateToEdit}>
        <TextButton
          type={'submit'}
          text="Edit profile"
          bg="transparent"
          fg="black"
          border={`1px solid grey`}
        />
      </div>

      <PlanContainer>
        <h2>Your Plan</h2>
        <div className='user-plan-container'>
          <div className='plan-header'>
            <h1>{userInfo?.plan?.name === "Free Plan" ? "Spotify Free" : userInfo?.plan.name}</h1>
          </div>
          <div className='plan-message'>
            <p>{userInfo?.plan?.message}</p>
            <hr />
            <h3>{userInfo?.plan?.name === "Free Plan" ? "Free" : userInfo?.plan.name}</h3>
          </div>
        </div>
      </PlanContainer>

      <div className="overview_join_premium_btn">
        <TextButton
          type={'submit'}
          text="Join Premium"
          bg="transparent"
          fg="black"
          border={`1px solid grey`}
        />
      </div>


      <SignOutFromEverywhereContainer>
        <h2 className='signoutall_heading'>Sign out everywhere</h2>
        <p  className='signoutall_para'>This logs you out of Spotify everywhere you’re logged in, including the mobile, tablet, web player and desktop apps. This doesn't include partner devices (e.g. speakers, games consoles, and TVs), so for those go to your apps page and choose REMOVE ACCESS.</p>
        <span className='signoutall_note'>
          <p>Note: It can take up to 1 hour for sign out to take effect on the web player.</p>
        </span>

        <div className="signout_all_btn">
          <TextButton
            type={'submit'}
            text="Sign out everywhere"
            bg="transparent"
            fg="black"
            border={`1px solid grey`}
          />
        </div>
      </SignOutFromEverywhereContainer>
    </AccountOverviewContainer>
  )
}


const UserData = styled.table`
  max-inline-size: 100%;
  inline-size: 100%;
  text-align: start;
  border-collapse: collapse;
  overflow-wrap: break-word;
  width: 100%;

  .pr_heading{
    margin-bottom: 2rem;
  }

  .table_heading{
    color: grey;
    padding: 1em 1.2em 1.2em 0px;
    white-space: nowrap;
  }

  .table_data{
    color: black;
    padding: 1em 0px;
    text-align: right;
    word-break: break-all;
    text-align: left;
  }

  .row{
    align-items: flex-start;
    border-bottom: 1px solid #dedede;
    color:#6a6a6a;
    display: table-row;
    width: 100%;
  }

`
const AccountOverviewContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap:2rem;

  .overview_heading{
    h1{
      font-size: 3rem;
      font-family: 'product-sans';
    }
  }

  .overview_edit_button{
    width: 21%;
  }

  .overview_join_premium_btn{
    width: 23.3%;
  }
`

const PlanContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .user-plan-container{
    border-radius: 8px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 30%) 0px 2px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .plan-header{
      background: rgb(179, 179, 179);
      padding-left: 1rem;
      height: 14rem;
      display: flex;
      align-items: center;
      font-family: 'product-sans300',Helvetica, sans-serif;
      letter-spacing: 0.05rem;
  }

  .plan-message{
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:2rem;
    padding-left: 1rem;
    hr{
      margin-right: 1rem;
      border: 0;
      border-bottom: 1px solid #ddd7d7;
    }
    h3{
      font-size: 1.5rem;
    }
  }
  

`

const SignOutFromEverywhereContainer = styled.div`
  font-family: 'product-sans-regular',Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap:1rem;
  padding-bottom: 3rem;
  .signoutall_heading{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'product-sans';
  }

  .signoutall_para{
    word-spacing: 0.2rem;
    font-size: 1rem;
  }
  .signoutall_note{
    background: #f5f0f0;
    p{
      display: flex;
      padding: 1rem;
      border: 1px solid #c5c3c3;
      font-size: 1rem;
      font-weight: 400;
      padding-block-end: 16px;
      box-sizing: border-box;
      line-height: 1.5rem;
    }
  }

  .signout_all_btn{
    width: 30.655%;
  }
`
export default AccountOverview