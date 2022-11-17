import {React, useRef} from 'react';

const Login = () =>
{
    const logEmail = useRef();
    const logPW = useRef();
    const signEmail = useRef();
    const username =  useRef();
    const signPW =  useRef();
    const signPWcheck =  useRef();
    const handleClick = (e) =>
    {
        e.preventDefault();
        console.log(logEmail.current.value, logPW.current.value);
    };
  return (
    <div class="log-in">
        <div>
            <h2>Welcome!</h2>
            <p>
                JOURNIFY is a private photo album creation site that combines the ease of digital photos with 
                the security of simplicity. Sometimes media isn't social, and we want to give you the option to 
                share your life on your terms. JOURNIFY your life with your private digital journal!
            </p>
        </div>
        <div>
            <form class="card journal form-group" id="login-form" onSubmit={handleClick}>
                <h2>Log in:</h2>
                <label for="email">Email:</label>
                <input type="email" class="form-control form-control-lg" id="login-email" ref={logEmail} required placeholder="you@example.com"/>
                <label for="password">Password:</label>
                <input type="password" class="form-control form-control-lg" id="login-password" ref={logPW} required placeholder="Enter Password"/>
                <button type="submit" class="btn btn-info login-btn col">Log in!</button>
            </form>
            <form class="card journal form-group" id="signup-form" onSubmit={handleClick}>
                <h2>Sign up:</h2>
                <label for="name">Name:</label>
                <input type="name" class="form-control form-control-sm" id="signup-name" ref={username} required placeholder="John Doe"/>
                <label for="email">Email:</label>
                <input type="email" class="form-control form-control-sm" id="signup-email" ref={signEmail} required placeholder="you@example.com"/>
                <label for="password">Password:</label>
                <input type="password" class="form-control form-control-sm" id="signup-password" ref={signPW} required placeholder="Enter Password"/>
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" class="form-control form-control-sm" id="confirm-password" ref={signPWcheck} required placeholder="Confirm Password"/>
                <button type="submit" class="btn btn-info login-btn col">Sign Up!</button>
            </form>
        </div>
    </div>
  )
};

export default Login;