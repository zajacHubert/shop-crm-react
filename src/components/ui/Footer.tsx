import React from 'react';
import { StyledBoxIcons, StyledFooter, StyledText } from './Footer.css';
import { SiYoutubemusic } from 'react-icons/si';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>Follow us on</StyledText>
      <StyledBoxIcons>
        <FaFacebook size={20} color='white' />
        <SiYoutubemusic size={20} color='white' />
        <FaTwitter size={20} color='white' />
      </StyledBoxIcons>
    </StyledFooter>
  );
};

export default Footer;
