import React from 'react'
import './navbar.css'
import '../Images/logo.png';
import logo from '../Images/Group.png'
 
import {Link } from 'react-router-dom'; 

const Navbar = () => {
    
        
    return (
         <>
          <div className='navbar'>
              <div className="navbar-container">
                   
                  <div className="nav-logo">
                    
                     <Link to="/">
                     <img  src={logo} className="img"   />
                     </Link>
                 
            
                  </div>
                  <ul className="nav-menu">
                       
                      <li className="nav-item">
                      <Link to="/help" className= "nav-link">
                      
                               What is USN ?
                                
                              </Link>
                          
                      </li>
                     
                  </ul>
              </div>
          </div>
         </>
    )
}

export default Navbar
