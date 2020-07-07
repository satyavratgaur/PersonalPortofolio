import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Logo from '../assets/LogoLarge';
import LogoSmall from '../assets/LogoSmall';
import { ExternalLink } from 'react-feather';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 32px;
`;

const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 3;
`;

const StyledLogo = styled(Logo)`
  flex: 1;
  &:hover {
    path {
      fill: ${primaryColor};
    }
  }
`;

const LinkContainer = styled.div`
  /* padding: 10px; */
  display: flex;
  align-items: center;
  color: ${initialGray};
  &:hover {
    color: ${primaryColor};
    border-bottom: 4px solid ${primaryColor};
    transition: width 1s;
  }
`;

const Link = styled.a`
  padding: 12px;
  font-weight: bold;
  color: ${initialGray};
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  /* &:hover {
    color: ${primaryColor};
  } */
`;

const Navbar = ({ contentConfig }) => {
  return (
    <NavbarContainer>
      <StyledLogo fill={initialGray} width={150} height={50} />
      <NavbarLinks>
        {contentConfig.segmentLinks.map((item) => {
          //dynamic imports
          const LinkIcon = require(`../assets/${item.icon}`).default;
          const StyledLinkIcon = styled(LinkIcon)`
            ${LinkContainer}:hover & {
              path {
                fill: ${primaryColor};
              }
            }
          `;
          return (
            <LinkContainer>
              <StyledLinkIcon fill={initialGray} width={20} height={20} />
              <Link
                href={item.link}
                key={item.title}
                target={item.isExternal ? '_blank' : ''}
              >
                {item.title}
              </Link>
            </LinkContainer>
          );
        })}
      </NavbarLinks>
    </NavbarContainer>
  );
};
export default Navbar;
