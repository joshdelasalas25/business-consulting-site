import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from "../ButtonElements";
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent,
    HeroH1, 
    HeroP,
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight } from './HeroElements' 

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


   return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
            <HeroH1>Level Up Your Business</HeroH1>
            <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</HeroP>
            <HeroBtnWrapper>
                <Button to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'> 
                    Sign In {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
        
    )
}

export default HeroSection
