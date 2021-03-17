import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Logo from '../assets/LogoLarge';
import LogoSmall from '../assets/LogoSmall';
import { StyledExternalLink } from '../App';
import { Link as ScrollLink} from "react-scroll";
import { FaBars } from 'react-icons/fa';

// import { overview, goToOverview } from '../components/MainContent';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 32px;
`;

const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 3;

  @media only screen and (max-width:768px){
    display: none
  }
`;

const StyledLogo = styled(Logo)`
  flex: 1;
  &:hover {
    path {
      fill: ${primaryColor};
    }
  }
`;

const LinkContainer = styled(ScrollLink)`
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
`;

const BurgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   transform: translate(-100%,75%);
   font-size: 1.8rem;
   cursor: pointer;
 }
`

const Bars = styled(FaBars)`
 color: ${initialGray};
 &:hover {
    color: ${primaryColor};
  }
`

// const StyledExternalLink = styled(ExternalLink)`
//   padding-left: 10px;
//   width: 16px;
//   height: 16px;
//   &:visited {
//     color: inherit;
//   }
// `;

const Navbar = ({ contentConfig, toggle }) => {
  return (
    <NavbarContainer>
      <a href='/'>
      <StyledLogo fill={initialGray} width={150} height={50} />
      </a>
      {/* <button onClick={goToOverview}>Lets go to the top</button> */}
      <BurgerIcon onClick={toggle}>
        <Bars />
      </BurgerIcon>
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
            <LinkContainer
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <StyledLinkIcon fill={initialGray} width={20} height={20} />
              <Link
                href={item.link}
                key={item.title}
                target={item.isExternal ? '_blank' : ''}
              >
                {item.title}
                {item.isExternal ? <StyledExternalLink /> : ' '}
              </Link>
            </LinkContainer>
          );
        })}
      </NavbarLinks>
    </NavbarContainer>
  );
};
export default Navbar;
