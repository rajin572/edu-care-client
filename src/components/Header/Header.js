import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import './Header.css'
import logo from '../../images/pngwing.com.png'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <div className="nav-sticy">
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="logoAndName" href="">

            <h2> <img src={logo} alt="" /><Link className="a" to='/'>Edu Care</Link></h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto list-name">
              <Link className="a" to='/home'>Home</Link>
              <Link className="a" to='/course'>Course</Link>
              <Link className="a" to='/blog'>Blog</Link>
            </Nav>
            <Nav>
              {
                user?.uid ?
                  <div className="userName-and-logout">
                    <div className="navImg">
                      <img style={{ height: '30px', borderRadius: "100%" }} src={user?.photoURL} alt="" />
                    </div>
                    <button className="mx-2 button-primary" onClick={handleLogOut}>Log Out</button>
                  </div>
                  :
                  <>
                    <Link className="a" to='/login'><button className="button-primary" >Login</button></Link>
                    <Link className="a" to='/register'><button className="button-primary" >Register</button></Link>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
