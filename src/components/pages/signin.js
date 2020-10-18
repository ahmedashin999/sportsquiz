import React from 'react'
import '../css/quiz.css'
import logo from '../Images/SoccerGrading Logo_A1.svg'
import {Link} from 'react-router-dom'
import {FaChevronLeft} from 'react-icons/fa';
import {BsChevronDoubleLeft} from 'react-icons/bs'

function SigninPage() {
    return (
        <div className="form-page">
           <div className="logo-header">
                <Link to="/" className="logo-btn"   > <FaChevronLeft/> </Link>
                <img src={logo} alt=""className="logo"/>
                <Link className="logo-btn"><BsChevronDoubleLeft/></Link>
                </div>

         
            
        <form className="form">
        <p className="strong">Thanks for opting into our free sports tips</p>
           <p>We dont't spam</p>
           <p>It is not our style</p>
           <p>You can opt out anytime</p>
          <input type="text" placeholder="Name"/>  
          <input type="email" placeholder="Email"/>
         <Link to="/"> <button className="submit" type="submit">Send</button></Link>
        </form>
          
         
        </div>
    )
}

export default SigninPage
