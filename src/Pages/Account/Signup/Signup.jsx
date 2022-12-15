import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SpotifyLogo from '../../../assets/Logo';
import Facebook from './Facebook';
import Google from './Googel';
import InputBox from '../../../components/InputBox';
import TextButton from '../../../components/TextButton';
import Date from '../../../components/Date';
import RadioButton from '../../../components/RadioButton';
import { initialValues } from './SignupContent';
import { Link } from 'react-router-dom';
import { dateValidate, validate } from './validation';
import { postRequest } from '../../../request/Post';
function Signup() {

    const [formValue, setFormValue] = useState(initialValues);
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState({ day: "", month: "", year: "" });
    const [genderError, setGenderError] = useState();
    const [dateErrors, setDateErrors] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isMarketing, setIsMarketing] = useState(false);
    const [isShare, setIsShare] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

   
    const signup = () => {
        const data = {
            name :  formValue?.name,
            userEmail : formValue?.userEmail,
            userPassword :  formValue?.userPassword,
            userGender :  gender,
            userDob :  `${dob?.year}-${dob?.month}-${dob?.day}`
        }
        postRequest('user/create',data)
        .then(resp => 
            console.log(resp)
        )
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setDateErrors(dateValidate(dob));

        if(gender===null){
            setGenderError(prev => "Select your gender.")
        }else{
            setGenderError(null);
        }

        if(Object.keys(formErrors).length === 0 && Object.keys(dateErrors).length===0 && gender && formValue?.userEmail === formValue?.cnfMail){
            setIsSubmit(true);
            signup();
        }
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
                        error={formErrors?.userEmail}
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
                    error={formErrors?.cnfMail}
                />

                <InputBox
                    type="password"
                    text="Create a password"
                    value={formValue.userPassword}
                    onChange={onChange}
                    placeholder="Create a password."
                    name="userPassword"
                    error={formErrors?.userPassword}
                />

                <div className="profile_name">
                    <InputBox
                        type="text"
                        text="What should we call you?"
                        value={formValue.name}
                        onChange={onChange}
                        placeholder="Enter a profile name."
                        name="name"
                        error={formErrors?.name}
                    />
                    <p>This appears on your profile.</p>
                </div>
                <div className="dob">
                    <Date dob={dob} setDob={setDob} errors={dateErrors} />
                </div>
                <Gender>
                    <label htmlFor="" className='gen'>What's your gender?</label>
                    <div className="option">
                        <RadioButton
                            name="gender" value={'Male'}
                            text={"Male"} gender={gender}
                            setGender={setGender} />

                        <RadioButton
                            name="gender" value={'Female'}
                            text={"Female"} gender={gender}
                            setGender={setGender} />

                        <RadioButton
                            name="gender" value={'Non-Binary'}
                            text={"Non-Binary"} gender={gender}
                            setGender={setGender} />

                        <RadioButton
                            name="gender" value={'Others'}
                            text={"Other"} gender={gender}
                            setGender={setGender} />

                        <RadioButton
                            name="gender" value={'Unknown'}
                            text={"Prefer not to say"}
                            gender={gender} setGender={setGender} />
                        {
                            genderError && <p className='gender-error'>{genderError}</p>
                        }
                    </div>
                </Gender>
                <CheckList>
                    <div className="marketing chk">
                        <input
                            type="checkbox"
                            name="marketing"
                            value={isMarketing}
                            checked={isMarketing}
                            onChange={() => setIsMarketing(prev => !isMarketing)}
                        />
                        <label htmlFor="">
                            I would prefer not to receive marketing messages from Spotify
                        </label>
                    </div>
                    <div className="share_data chk">
                        <input
                            type="checkbox"
                            name="isShare"
                            value={isShare}
                            checked={isShare}
                            onChange={() => setIsShare(prev => !isShare)}
                        />
                        <label htmlFor="">
                            Share my registration data with Spotify's content providers for marketing purposes.
                        </label>
                    </div>
                </CheckList>
                <div className="terms">
                    <p>
                        By clicking on sign-up, you agree to Spotify's <a href="/">Terms and Conditions of Use</a>.
                    </p>
                    <p>
                        To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href="/">Spotify's Privacy Policy.</a>
                    </p>
                </div>

                <div className="btn" onClick={onSubmit}>
                    <TextButton
                        type={'submit'}
                        onClick={onSubmit}
                        text="Sign Up"
                        bg="#1ed760"
                        fg="black"
                        padding={'1rem 2.5rem'}
                    />
                </div>
            </Form>

            <div className="instead_login">
                <p><span>Have an account?
                    <Link to="/user/login" className='signup-link'>Log in.</Link>
                </span></p>
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
    .profile_name{
        display: flex;
        flex-direction: column;
        gap:0.3rem;
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
    .gender-error{
        color:red;
    }
`

const CheckList = styled.div`
    margin: 2rem 0rem;
    display:flex;
    flex-direction:column;
    width: 28rem;
    gap:2rem;
    
    .chk{
        input{
            width: 1rem;
            height: 1rem;
        }
        label{
            display: flex;
            flex-wrap: wrap;
            font-size: 0.875rem;
            line-height: 1.25rem;
            text-transform: none;
            letter-spacing: normal;
        }
    }
    .marketing{
        display: flex;
        gap:1rem;
        justify-content: flex-start;
        align-items: center;
    }

    .share_data{
        display:grid;
        grid-template-columns: 0.3fr 4fr;
        input{
            width: 1rem;
            height: 1.5rem;
        }
    }

`
export default Signup