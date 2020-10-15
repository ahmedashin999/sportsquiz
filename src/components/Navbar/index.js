import React,{useState} from 'react'
import './navbar.css'
import '../Images/grading.png';
import {FaBars} from 'react-icons/fa'
import {Link } from 'react-router-dom';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,Logoimage} from './NavbarElements';

const Navbar = ({toggle}) => {
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
                      {/* sportsgrading */}
                     <Link to="/">
                     <Logoimage className="img"   />
                     </Link>
                 
            
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks className={navbar ? 'menuActive':'menuOff'} to="/sports-grading-blog">BLOG</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks  className={navbar ? 'menuActive':'menuOff'}to="/help">WHAT IS UTN</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks className={navbar ? 'menuActive':'menuOff'} to="https://marconitennis.com.au/">MARCONI TENNIS AND SQUASH</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
         </>
    )
}

export default Navbar
