import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Navbar , Container , Nav  } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
    <div className=' shadow bottom mt-1' >
<Navbar className='  sticky' expand="lg" bg="bg-lighten-xl" variant="light">
  <Container >
  <h5 className='title'>CAMERA ZONE</h5>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto vavbar ">
      <NavLink  as={Link}  to="/" >Home</NavLink>
      <NavLink   as={Link} to="/Blog" >Blogs</NavLink>
      { user?
      
        <NavLink as={Link} to="/AddCamera">Add Product</NavLink>:<span></span>
    
      }
             

     { user?
      
      <NavLink as={Link} to="/ManageCamera">Manage Product</NavLink>:<span></span>
  
    }
    { user?
      
      <NavLink as={Link} to="/Myitems">My Product</NavLink>:<span></span>
  
    }
      <NavLink  as={Link} to="/About">About Us</NavLink>



      
    </Nav>
    <Nav>
        {
        
        user ?<button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <NavLink as={Link} to="login">Sign In  </NavLink>}  
     
       <button class="btn btn-sm btn-outline-dark rounded-0"><NavLink as={Link} to="/Registration">Sign Up</NavLink></button>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

            
        </div>
    );
};

export default Header;