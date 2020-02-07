import React from "react";
import { Link } from "@reach/router";
import { FaFacebookSquare, FaPinterestSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Container, Flexbox, Li, Copyright, Title, SocialIcon } from "./styles";

export default function Footer({ footerLinks, footerIcons }) {
  return    <Container>
                  <Flexbox>
                        <div style={{ flexGrow: 1 }}>
                              <Title>THEMOVIEBOX</Title>
                        </div>
                        <div style={{ flexGrow: 0.2, margin: "auto" }}>
                              <ul className="footer-links" style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    {footerLinks.map((link, i) => (
                                          <Li key={i}><Link style={{ textDecoration: "none", color: '#c7c6c6' }} to={link.path}>{link.name}</Link></Li>
                                    ))}
                              </ul>
                        </div>
                  </Flexbox>
                  <hr style={{ borderColor: '#f1f0f0', opacity: 0.1 }} />
                  <Copyright>
                        <Flexbox>
                              <div style={{ flexGrow: 1 }}>
                                    <p style={{ fontSize: 12, color: '#c7c6c6' }}>Designed by Wisdom Anaba. All rights reserved</p>
                              </div>
                              <div style={{ flexGrow: 0.1, display: "flex", justifyContent: "space-between", alignItems: "center",  margin: "auto" }}>
                                    {footerIcons.map((icon, i) => (
                                          <SocialIcon key={i}><Link to={icon.path} style={{ textDecoration: 'none', color: '#c7c6c6' }}>{icon.name}</Link></SocialIcon>
                                    ))}
                              </div>
                        </Flexbox>
                  </Copyright>
            </Container>;
}

Footer.defaultProps = {
      footerLinks: [{
            name: "About",
            path: "/"
      },
      {
            name: "Movies",
            path: "/"
      },
      {
            name: "Rating",
            path: "/"
      },
      {
            name: "Contact",
            path: "/"
      }],
      footerIcons: [{
            name: <FaFacebookSquare />,
            path: "/"
      },
      {
            name: <FaPinterestSquare />,
            path: "/"
      },
      {
            name: <FaTwitterSquare />,
            path: "/"
      },
      {
            name: <FaLinkedin />,
            path: "/"
      }]
}
