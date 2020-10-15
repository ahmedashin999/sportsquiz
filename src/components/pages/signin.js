import React from 'react'
import '../Tennis/tennis.css'

function SigninPage() {
    return (
        <>
        <form className="form">
          <input type="text" placeholder="Name"/>  
          <input type="email" placeholder="Email"/>
         <button className="submit" type="submit">Submit</button>
        </form>
          
        </>
    )
}

export default SigninPage
