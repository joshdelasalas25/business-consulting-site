import React from 'react'
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";


import {
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper,
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
               <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Business Intelligence</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Business Analytics</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Automation</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>         
        </ServicesContainer>
    )
}

export default Services
