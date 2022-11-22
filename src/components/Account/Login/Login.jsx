import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Link, redirect } from "react-router-dom";
import { useStateProvider } from "../../../utils/StateProvider";
import { reducerCases } from "../../../utils/Constants";
function Login() {

    const [formData, setFormData] = useState({ userEmail: "", userPassword: "" });
    const [{ user, token }, dispatch] = useStateProvider()

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const login = async () => {
        const resp = await fetch('http://localhost:3000/user/login', {
            method: "POST",
            body: JSON.stringify({
                userEmail: formData.userEmail,
                userPassword: formData.userPassword,
                deviceId: 56
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await resp.json();
        const token = data.token;
        const user = data.user;
        console.log(data);
        dispatch({ type: reducerCases.SET_TOKEN, token });
        dispatch({ type: reducerCases.SET_USER, user });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await login();
        
        // storing in localstorage
        localStorage.setItem('login', JSON.stringify({
            login: true,
            token: token
        }));
        console.log(token);
        console.log(user);
    }

    useEffect(() => {
    }, [token, dispatch]);

    if(token){
        return redirect('/');
    }
    return (
        <Container>
            <form method='POST' onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="userEmail" value={formData.userEmail} onChange={onChangeHandler} />
                <br />
                <label htmlFor="Password">Password</label>
                <input type="password" name="userPassword" value={formData.userPassword} onChange={onChangeHandler} />

                <button>Login</button>
                <Link to="/signup">Signup</Link>
            </form>
        </Container>
    )
}
const Container = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        width: 40%;
        padding: 4rem;
        label{
            font-size:1.5rem;
        }
        input{
            padding: 0.875rem;
        }
        button{
            padding: 0.8rem;
            font-size: 1rem;
            margin-top: 1rem;
        }
    }
`
export default Login