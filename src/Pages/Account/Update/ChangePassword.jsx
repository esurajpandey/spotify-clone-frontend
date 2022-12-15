import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import InputBox from '../../../components/InputBox'
import TextButton from '../../../components/TextButton';
import { useStateProvider } from '../../../utils/StateProvider';

function ChangePassword() {
  
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repNewPass, setRepNewPass] = useState("");
  const [formError,setFormError] = useState({});
  const [{token}] = useStateProvider();
  
  const navigate = useNavigate();

  const validate = () => {
    let err = {};
    if(oldPass === ""){
      err.oldPass =  "Old password required"
    }

    if(newPass === ""){
      err.newPass = "New password required"
    }

    if(repNewPass !== newPass) {
      err.repNewPass = "Password is not matched"
    }
    return err;
  }


  const changePass = (data) => {
    fetch("http://localhost:3000/user/changePassword",{
        method : "PATCH",
        body : JSON.stringify(data),
        headers : {
          "Authorization" : `Bearer ${token}`,
          "Content-Type" :  "application/json"
        }
      })
      .then(resp =>resp.json())
      .then(resp => {
        console.log(resp);
        alert(JSON.stringify(resp));
        return navigate('/account');
      });
    }


  const onSubmit = (e) => {
    e.preventDefault();
    let err =  validate();
    setFormError(err);

    // console.log(newPass,repNewPass);
    if(Object.keys(err).length === 0){

      const data = {
        userPassword :  oldPass,
        newPassword : newPass
      }
      changePass(data);
    }
  }

  return (
    <ChangePasswordContainer>
      <div className="edit_header">
        <h1>Change your password</h1>
      </div>

      <ChangePasswordForm>
        <InputBox
          type="password"
          text="Current password"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
          name="oldPass"
          width="100%"
          padding={`${12}px ${14}px`}
          error={formError?.oldPass}
        />

        <InputBox
          type="password"
          text="New password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          name="newPass"
          width="100%"
          padding={`${12}px ${14}px`}
          error={formError?.newPass}
        />

        <InputBox
          type="password"
          text="Repeat new password"
          value={repNewPass}
          onChange={(e) => setRepNewPass(e.target.value)}
          name="repNewPass"
          width="100%"
          padding={`${12}px ${14}px`}
          error={formError?.repNewPass}
        />


        <ChangePasswordBtn>
          <div className="cancel">
            <button type='button'>
              <span>Cancel</span>
            </button>
          </div>

          <div className="save" onClick={onSubmit}>
            <TextButton
              type={'submit'}
              text="Set new password"
              bg="#1ed760"
              fg="black"
            />
          </div>

        </ChangePasswordBtn>

      </ChangePasswordForm>
    </ChangePasswordContainer>
  )
}

const ChangePasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap:1.5rem;
  margin-top: 2rem;
`

const ChangePasswordBtn = styled.div`
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
const ChangePasswordContainer = styled.div`
  padding: 2.5rem 3rem;
`

export default ChangePassword