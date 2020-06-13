import React from 'react';
import {
    LinkStyling,
    HeaderContainer,
    HomeLinkStyling,
} from './styles';

const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
              <HeaderContainer>
                <div>
                    <HomeLinkStyling activeClassName="selected" exact to="/">Light Life Wellness</HomeLinkStyling>
                </div>
                <div>
                    <LinkStyling activeClassName="selected" to="/services">Our Services</LinkStyling>
                    <LinkStyling activeClassName="selected" to="/about">About</LinkStyling>
                    <LinkStyling activeClassName="selected" to="/contact">Contact</LinkStyling>
                    <LinkStyling activeClassName="selected" to="/scheduletoday">Schedule Today</LinkStyling>
                </div>
            </HeaderContainer>
        </div>
      
    )
}

export default Header
