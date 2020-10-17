import React from 'react'
import { useState } from 'react'
import './hero.css'
import {HeroContainer,HeroContent,HeroH2,HeroH3,HeroBtnWrapper,HeroP,Button} from './HeroElements'
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(hover)
    }
    return (
        <HeroContainer className="hero">
            
            <HeroContent>
                <HeroH3> How Good Are You At Sport?</HeroH3>
                <HeroH2>Take our Quick (10) Question Quiz and Get your Universal Sports number (USN)</HeroH2>
       
                <HeroP>Pick Your Sport</HeroP>
                   <HeroBtnWrapper>
                       < Button   to="/get-your-utn"
                       onMouseEnter={onHover} onMouseLeave={onHover}
                       >
                           Tennis (UTN)
                       </Button>
                       <Button className="btn"  to="/get-your-usn"
                         onMouseEnter={onHover} onMouseLeave={onHover}
                       >
                           Soccer (USN)
                       </Button>
                   </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
