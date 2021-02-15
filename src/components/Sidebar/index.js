import React from 'react'
import {
     SidebarContainer,
     Icon,
     CloseIcon, 
     SidebarWrapper, 
     SidebarMenu, 
     SideBtnWrap, 
     SidebarRoute, 
     SidebarLink
     } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="products">Products</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="contact">Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar

