import React from 'react'
import '../css/quiz.css'
import logo from '../Images/soccerlogo.png'
import {Link} from 'react-router-dom'

function SigninPage() {
    return (
        <div className="form-page">
            <img src={logo} className="logo" alt=""/>

         
            
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
