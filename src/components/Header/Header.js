import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import './Header.css'

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <Navbar className="border-3 border-bottom border-dark" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href=""><h2><Link className="a" to='/'>Edu Care</Link></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="a" to='/home'>Home</Link>
            <Link className="a" to='/course'>Course</Link>
            <Link className="a" to='/blog'>Blog</Link>
          </Nav>
          <Nav>
            {
              user?.uid? 
              <>
              <p>{user?.email}</p>
              <Button onClick={handleLogOut}>Log Out</Button>
              </>
              :
              <>
            <Link className="a" to='/login'>Login</Link>
            <Link className="a" to='/register'>Register</Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
