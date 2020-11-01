import React from "react"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaLinkedinIn } from "react-icons/fa"
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from "./FooterElements"

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">The Pizza Place</SocialLogo>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                <FaFacebookSquare />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                <FaTwitterSquare />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                <FaInstagramSquare />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                <FaYoutubeSquare />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
