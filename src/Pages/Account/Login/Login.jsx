import React, { useState } from 'react'

import styled from 'styled-components'
import SpotifyLogo from '../../../assets/Logo'
import Apple from './Apple'
import Google from './Googel'
import Phone from './Phone'
import Facebook from './Facebook';
import InputBox from '../../../components/InputBox'
import { Link } from 'react-router-dom'
import TextButton from '../../../components/TextButton'
import SignupBtn from './SignupBtn'
function Login() {

  const [formValue, setFormValue] = useState({ userEmail: "", userPassword: "" });
  const onSubmit = (e) =>{

  }

  const onChange = (e) => {
    const { name, value } = e.target.value;
    setFormValue({ ...formValue, [name]: value })
  }
  return (
    <Container>
      <Top>
        <SpotifyLogo
          style={{
            width: "11rem",
            height: "5rem",
            fill: "black",
            display: "flex",
            marginLeft: "1.5rem",
            marginTop: "0.9rem",
          }}
        />
      </Top>
      <SocialContainer>
        <p>To continue, log in to Spotify.</p>
        <Facebook />
        <Apple />
        <Google />
        <Phone />
      </SocialContainer>
      <div className="hrlin">
        <hr/>
        <span>or</span>
        <hr/>
      </div>
      <Form method='POST' >
        <InputBox
          type="email"
          text="Email address or username"
          value={formValue.userEmail}
          onChange={onChange}
          placeholder="Email address or username"
          name="userEmail"
        />

        <InputBox
          type="password"
          text="Password"
          value={formValue.userPassword}
          onChange={onChange}
          placeholder="password"
          name="userPassword"
        />
        <Link className='forget'><span>Forgot your password?</span></Link>
        <div className="submit">
          <div className="remeber_me">
            <input type="checkbox"/>
            <span>Remeber me</span>
          </div>
          <TextButton
            type={'submit'}
            onClick={onSubmit}
            text="LOG IN"                     
            bg="#1ed760"
            fg="black"
          />
        </div>
      </Form>

     <div className="bottom">
        <hr />
        <h2 className='no_account'>Don't have an account?</h2>
        <SignupBtn/>
     </div>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
    .hrlin{
      display: flex;
      flex-direction: row;
      hr{
        margin: 12px 0px 20px;
        flex: 1 1 0%;
        border-top: 1px solid rgb(70, 91, 133);
        width: 12rem;
      }

      span{
        flex: 0.3 1 0%;
        align-self: center;
        text-align: center;
        line-height: 1px;
        font-weight: 700;
        font-size: 12px;
        background: rgb(255, 255, 255);
        text-transform: uppercase;
      }
    }

    .bottom{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 0.5rem;
      gap:1rem;
      h2{
        font-size: 1.4rem;
      }
      hr{
        width: 100%;
        border: 0;
        border-bottom: 1px solid grey;
      }
    }
    
`

const Top = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid grey;
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  p{
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap:1.2rem;
  .forget{
      text-decoration: none;
      color: black;
      letter-spacing: 0.014rem;
      span{
        font-family: inherit;
        font-weight: 500;
      }
      &:hover{
        text-decoration: underline;
      }
    }


    .submit{
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      .remeber_me{
        display: flex;
        align-items: center;
        gap:0.5rem;
        input{
          width: 1rem;
          height: 1rem;
          &:checked{
            border-color: #08ce4a;
            background-color:red;
          }
        }
        span{
          font-size: 0.9rem;
          font-family: inherit;
          font-weight: 400;
        }
      }
    }
`
export default Login