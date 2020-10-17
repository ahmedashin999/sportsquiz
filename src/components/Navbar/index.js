import React,{useState} from 'react'
import './navbar.css'
import '../Images/logo.png';
 
import {Link } from 'react-router-dom';
import {Nav,NavbarContainer,NavLogo,NavMenu,NavItem,NavLinks,Logoimage} from './NavbarElements';

const Navbar = () => {
    const[navbar,setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY >=80 ){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBackground);
        
    return (
         <>
          <Nav className={navbar ? 'active':'offline'}>
              <NavbarContainer>
                   
                  <NavLogo>
                    
                     <Link to="/">
                     <Logoimage className="img"   />
                     </Link>
                 
            
                  </NavLogo>
                  <NavMenu>
                       
                      <NavItem>
                          <NavLinks  className={navbar ? 'menuActive':'menuOff'}to="/help">WHAT IS UTN ?</NavLinks>
                      </NavItem>
                     
                  </NavMenu>
              </NavbarContainer>
          </Nav>
         </>
    )
}

export default Navbar
