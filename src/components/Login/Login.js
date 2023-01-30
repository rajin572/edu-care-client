import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import './Login.css'

const Login = () => {
    const [error, setError] = useState('')
    const {userLogin, googleLogin, githubLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const HandleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        userLogin(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset()
            navigate(from, {replace: true})
            setError('')
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        }
        )
    }
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () =>{
      googleLogin(googleProvider)
      .then(result =>{
        const user = result.user
        console.log(user);
        navigate(from, {replace: true})
        setError('')
      })
      .catch(error => {
        console.log(error);
      })
    }
    const handleGithubLogin =() =>{
        githubLogin(githubProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
            navigate(from, {replace: true})
            setError('')
          })
          .catch(error => {
            console.log(error);
          })
    }
  return (
    <div className="registerbox">
      <div className="authentication">
      <h1 className="text-center my-3">Login</h1>
      <Form onSubmit={HandleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="input" name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="input"
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="error-massage">{error}</p>
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button >
        <div className="mt-3 warnText">
        <Form.Text >Haven't Any Account ? <Link className="my-5 warnLink" to='/register'>Please Register</Link></Form.Text>
        </div>
      </Form>
      <div className="othersAccount mt-4">
        <h4 className="text-center">Or Using</h4>
        <div className="">
        <button onClick={handleGoogleLogin} className="w-100 p-2" ><FaGoogle></FaGoogle> Login With Google</button>
        <div className="mx-2 my-2 text-center">OR</div>
        <button onClick={handleGithubLogin} className="w-100 p-2" ><FaGithub></FaGithub> Login With GitHub</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
