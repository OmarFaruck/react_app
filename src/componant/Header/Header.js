import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Image from '../../images/Jadoo.png'
import Button from 'react-bootstrap/Button';
import '../Header/Header.css'; 
import {NavLink} from 'react-router-dom';
 

const Header=()=>{
    return (<header className="header">
         <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
            <Container>
                <Navbar.Brand>
                  <img src={Image} className="img-fluid mx-auto" alt=''/>
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav p-2">
                      <Nav className="ms-auto py-1 fw-bolder fs-5">
                      <NavLink className= "nav-link" to="/">Home</NavLink>
                      <NavLink className= "nav-link" to="/about">about</NavLink> 
                      <NavLink className= "nav-link" to="/blog">blog</NavLink>  
                      
                      <Nav.Link ><Button as="input" type="submit" value="Login"  className='mx-auto'/></Nav.Link> 
                    </Nav>
                  </Navbar.Collapse>
            </Container>
    </Navbar>
    </header>
    );
}

export default Header;