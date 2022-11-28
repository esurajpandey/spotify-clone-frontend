import React, { useState } from 'react'
import styled from 'styled-components'
import SpotifyLogo from '../../../assets/Logo';
import Facebook from './Facebook';
import Google from './Googel';
import InputBox from '../../../components/InputBox';
import TextButton from '../../../components/TextButton';
import Date from '../../../components/Date';
import RadioButton from '../../../components/RadioButton';
import CheckBox from '../../../components/CheckBox';
import {initialValues} from './SignupContent';
function Signup() {
    
    const [formValue, setFormValue] = useState(initialValues);
    const [gender, setGender] = useState({ male: "Male", female: "Female", non: "Non-Binary", other: 'Other', unknown: "Unknown" });
    const [dateErrors, setDateErrors] = useState({});
    const [formErrors,setFormErrors] = useState({});

    const handleGender = () => {

    }

    const onSubmit = (e) => {

    }
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }


    
    return (
        <Container>
            <Top>
                <SpotifyLogo
                    style={{
                        width: "8rem",
                        height: "5rem",
                        fill: "black",
                        display: "flex",
                        marginLeft: "1.5rem",
                        marginTop: "0.9rem",
                    }}
                />
                <h1>Sign up for free to start listening.</h1>
            </Top>
            <SocialButtons>
                <Facebook width={100} />
                <Google width={90} />
            </SocialButtons>
            <div className="hrlin">
                <hr />
                <span>or</span>
                <hr />
            </div>

            <Form>
                <div className="mail">
                    <InputBox
                        type="email"
                        text="What's your email?"
                        value={formValue.userEmail}
                        onChange={onChange}
                        placeholder="Enter your email."
                        name="userEmail"
                    />
                    <a href="./" className='phone signup-link'>Use phone number instead.</a>
                </div>
                <InputBox
                    type="email"
                    text="Confirm your email"
                    value={formValue.cnfMail}
                    onChange={onChange}
                    placeholder="Enter your email again."
                    name="cnfMail"
                />

                <InputBox
                    type="password"
                    text="Create a password"
                    value={formValue.userPassword}
                    onChange={onChange}
                    placeholder="Create a password."
                    name="userPassword"
                />

                <div className="profile_name">
                    <InputBox
                        type="text"
                        text="What should we call you?"
                        value={formValue.name}
                        onChange={onChange}
                        placeholder="Enter a profile name."
                        name="name"
                    />
                    <p>This appears on your profile.</p>
                </div>
                <div className="dob">
                    <Date />
                </div>
                <Gender>
                    <label htmlFor="" className='gen'>What's your gender?</label>
                    <div className="option">
                        <RadioButton name="gender" value={gender?.male} onChange={handleGender}
                            text={"Male"} />
                        <RadioButton name="gender" value={gender?.female} onChange={handleGender}
                            text={"Female"} />
                        <RadioButton name="gender" value={gender?.non} onChange={handleGender}
                            text={"Non-Binary"} />
                        <RadioButton name="gender" value={gender?.other} onChange={handleGender}
                            text={"Other"} />
                        <RadioButton name="gender" value={gender?.unknown} onChange={handleGender}
                            text={"Prefer not to say"} />
                    </div>
                </Gender>
                <div className="check-list">
                    <CheckBox name='not_marketing' value={false} text="I would prefer not to receive marketing messages from Spotify" />
                    <CheckBox name='share' value={false} text="Share my registration data with Spotify's content providers for marketing purposes." />
                </div>
                <div className="terms">
                    <p>
                        By clicking on sign-up, you agree to Spotify's <a href="/">Terms and Conditions of Use</a>.
                    </p>
                    <p>
                        To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href="/">Spotify's Privacy Policy.</a>
                    </p>
                </div>

                <div className="btn">
                    <TextButton
                        type={'submit'}
                        onClick={onSubmit}
                        text="Sign Up"
                        bg="#1ed760"
                        fg="black"
                    />
                </div>
            </Form>

            <div className="instead_login">
                <p><span>Have an account? <a href="/login" className='signup-link'>Log in.</a></span></p>
            </div>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .signup-link{
        color:#05c244;
    }
    .hrlin{
      display: flex;
      flex-direction: row;
      hr{
        margin: 14px 0px 10px;
        flex: 1 1 0%;
        border-top: 1px solid rgb(70, 91, 133);
        width: 10rem;
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

    .instead_login{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8rem;
    }
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        text-align: center;
        width: 80%;
        text-align: center;
        line-height: 36px;
        font-size: 32px;
        letter-spacing: -0.04em;
    }
`

const SocialButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding-bottom: 2rem;
    .check-list{
        margin: 2rem 0rem;
        display:flex;
        flex-direction:column;
        width: 28rem;
        gap:2rem;
    }

    .terms{
        width: 28rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap:0.8rem;
        p{
            font-size: 0.8rem;
        }
    }
    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gender = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap:0.5rem;
    .gen{
        font-weight: 700;
        color: black;
        font-size: 0.875rem;
    }
    .option{
        width: 28rem;
        display: flex;
        gap:1rem;
        flex-wrap: wrap;
    }
`
export default Signup