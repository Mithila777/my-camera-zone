import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Container , Nav } from 'react-bootstrap';
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
    <div className=' shadow bottom' >
<Navbar className='  sticky' expand="lg" bg="bg-lighten-xl" variant="light">
  <Container >
  <h5 className='title'>CAMERA ZONE</h5>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <Link as={Link} to="/">Home</Link>
      <Link as={Link} to="/Blog">Blog</Link>
      { user?
      
        <Link as={Link} to="/AddCamera">Add Product</Link>:<span></span>
    
      }
             

     { user?
      
      <Link as={Link} to="/ManageCamera">Manage Product</Link>:<span></span>
  
    }
    { user?
      
      <Link as={Link} to="/Myitems">My Product</Link>:<span></span>
  
    }
      <Link as={Link} to="/About">About Us</Link>



      
    </Nav>
    <Nav>
        {
        
        user ?<button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Link as={Link} to="login">Sign In  </Link>}  
     
       <button class="btn btn-sm btn-outline-dark rounded-0"><Link as={Link} to="/Registration">Sign Up</Link></button>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

            
        </div>
    );
};

export default Header;