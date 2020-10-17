import React from 'react'
import './hero.css'
import {Link} from 'react-router-dom'

const HeroSection = () => {
   
    
    return (
        <div className="hero">
            
            <div className="hero-content">
                <h1 className="first"> How Good Are You At Sport?</h1>
                <h1 className="second">Take our Quick (10) Question Quiz and Get your Universal Sports number (USN)</h1>
       
                <p className="pick">Pick Your Sport</p>
                   <div className="HeroBtnWrapper">
                       <Link to="/get-your-utn">
                       <button className="btn" >
                           Tennis
                       </button>
                       
                       </Link>
                       
                       <Link to="/get-your-usn">
                       <button className="btn">
                           Soccer
                       </button>
                       </Link>
                       <br/>
                       <br/>
                       <p>Graded 27000 people</p>
                   </div>
            </div>
        </div>
    )
}

export default HeroSection
