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
    <Container>
      <div className="authentication">
      <h1 className="text-center my-3">Login</h1>
      <Form onSubmit={HandleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="input" name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="input"
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Text className="my-5">Haven't Any Account ? <Link to='/register'>Please Register</Link></Form.Text>
        <br />
        <Form.Text className="text-danger">{error}</Form.Text>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="mt-4">
        <h4 className="text-center">Or Using</h4>
        <div className="d-lg-flex justify-content-between">
        <Button onClick={handleGoogleLogin} className="w-100 p-2" variant="primary"><FaGoogle></FaGoogle> Login With Google</Button>
        <div className="mx-2 my-2 text-center">OR</div>
        <Button onClick={handleGithubLogin} className="w-100 p-2" variant="dark"><FaGithub></FaGithub> Login With GitHub</Button>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default Login;
