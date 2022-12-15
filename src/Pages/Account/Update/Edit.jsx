import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Date from '../../../components/Date';
import InputBox from '../../../components/InputBox';
import SelectOption from '../../../components/SelectOption';
import TextButton from '../../../components/TextButton';
import { useStateProvider } from '../../../utils/StateProvider';

function Edit() {
  const genderOption = ['Male', 'Female', 'Non-binary', 'Unknown', 'Other'];
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userGender, setUserGender] = useState();
  const [dob, setDob] = useState({ day: "", month: "", year: "" });
  const [dateErrors, setDateErrors] = useState({});
  const [{ userInfo, token }, dispatch] = useStateProvider();

  const [pwdEnable, setPwdEnable] = useState(false);
  const navigate = useNavigate();

  const onCancel = () => {
    return navigate('/account');
  }

  useEffect(() => {
    if (userInfo) {
      setUserEmail(prev => userInfo?.userEmail);
      setUserGender(prev => userInfo?.userGender);
      let d = userInfo?.userDob.split('-');
      setDob(prev => ({ day: d[2], month: +d[1], year: d[0] }))
    }
  }, [token]);

  const updateUser = (e) => {
    e.preventDefault();
    if (userEmail && userPassword && userGender && pwdEnable) {
      if (dob?.day && dob?.month && dob?.year) {

        fetch('http://localhost:3000/user/edit', {
          method: "PATCH",
          body: JSON.stringify({
            userEmail: userEmail,
            userDob: `${dob?.year}-${dob?.month}-${dob?.day}`,
            userGender: userGender,
            userPassword: userPassword
          }),
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
          .then(resp => resp.json())
          .then(resp =>
            console.log(resp)
          );
      }
    } else {
      alert('Something went wrong!');
    }
  }


  const onEmailBlur = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (userEmail === "") {
      setEmailError(prev => "Email is required")

    } else if (!regex.test(userEmail)) {

      setEmailError(prev => "invalid Email");

    } else {

      fetch('http://localhost:3000/user/check/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userEmail:userEmail})
      })
        .then(data => data.json())
        .then(data => {

          if (!data?.status) {
            setPwdEnable(true);
            setEmailError(prev => "")
          }else{
            if(userEmail === userInfo?.userEmail){
              setPwdEnable(true);
              setEmailError(prev => "")
            }else{
              setEmailError(prev => "Email is already registered")
            }
          }
          
        })
    }
  }

  return (
    <EditAccountContainer>
      <div className="edit_header">
        <h1>Edit Profile</h1>
      </div>

      <EditForm>
        <InputBox
          type="email"
          text="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Enter your email again."
          name="cnfMail"
          width="100%"
          padding={`${12}px ${14}px`}
          onBlur={onEmailBlur}
          error={emailError}
        />

        <InputBox
          type="password"
          text="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          name="userPassword"
          width="100%"
          padding={`${11}px ${14}px`}
        // error={formErrors?.cnfMail}
        />

        <SelectOption
          text="Gender"
          options={genderOption}
          name={'gender'}
          value={userGender}
        />

        <div className="dob">
          <Date dob={dob} setDob={setDob} errors={dateErrors} width={`100%`} />
        </div>
        <SelectOption
          text="Country or region"
          options={['India']}
          name={'country'}
          value={userGender}
        />

        <div className="edit_checkbox">
          <input type="checkbox" name='shareData' />
          <label htmlFor="">
            Share my registration data with Spotify's content providers for marketing purposes.
          </label>
        </div>

        <hr className='edit_hr' />
      </EditForm>

      <EditButtons>
        <div className="cancel" onClick={onCancel}>
          <button type='button'>
            <span>Cancel</span>
          </button>
        </div>

        <div className="save" onClick={updateUser}>
          <TextButton
            type={'submit'}
            text="Save Profile"
            bg="#1ed760"
            fg="black"
          />
        </div>
      </EditButtons>

    </EditAccountContainer>
  )
}


const EditButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap:2rem;
  margin-top: 1.5rem;
  .cancel{
    display: flex;
    align-items: center;
    justify-content: center;
    button{
      background: none;
      padding-top: 0.6rem;
      padding-bottom: 0.4rem;
      border: 0;
      border-bottom: 3px solid transparent;
      span{
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
        font-weight: 900;
        color:#6a6a6a;
      }
      &:focus-within{
        border-bottom: 3px solid grey;
      }
      &:hover{
        span{
          color:black;
        }
        transform: scale(1.08);
      }
    }
  }
`
const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:1.5rem;
  margin-top: 2rem;
`
const EditAccountContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 2.5rem 3rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .edit_header{
    h1{
      font-size: 2.8rem;
      font-family: 'product-sans';
    }
  }

  .edit_checkbox{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:0.7rem;
    margin-top: 0.5rem;
    input{
      width: 1rem;
      height: 1rem;
    }
    label{
      font-size: 0.875rem;
    }
  }

  .edit_hr{
    border: 0;
    border-bottom: 1px solid grey;
    margin-top: 0.5rem;
  }
`
export default Edit