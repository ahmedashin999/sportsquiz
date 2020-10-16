import React from 'react'
import '../Tennis/tennis.css'

function SigninPage() {
    return (
        <div className="form-list">
            <div className="touch">Get In Touch</div>
        <form className="form">
             
          <input type="text" placeholder="Name"/>  
          <input type="email" placeholder="Email"/>
         <button className="submit" type="submit">Submit</button>
        </form>
          
        </div>
    )
}

export default SigninPage
