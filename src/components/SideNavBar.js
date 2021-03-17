import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import theme from '../styles/theme';
import { FaTimes } from 'react-icons/fa';
import { StyledExternalLink } from '../App';
import { Link as LinkS } from 'react-scroll';
import Logo from '../assets/LogoLarge';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;

const SideNavBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  justify-content:center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ open }) => (open ? '100%' : '0')};
  top: ${({ open }) => (open ? '0' : '-100%')};
`;

const StyledLogo = styled(Logo)`
  flex: 1;
  justify-self: center;
  &:hover {
    path {
      fill: ${primaryColor};
    }
  }
`;

const CloseIcon = styled(FaTimes)`
  color: ${initialGray};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const SideNavBarWrapper = styled.div`
  color: #fff;
`;

const SideNavBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  } ;
`;

const SideNavBarLinkContainer = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  color: ${initialGray};
  font-size: 1.5rem;

  &:hover {
    color: ${primaryColor};
    transition: width 1s;
  }
`;
const SideNavBarLink = styled.a`
  padding: 10px;
`;

const SideNavBar = ({ content, open, toggle }) => {
  console.log(open, toggle);
  console.log(content);
  return (
    <SideNavBarContainer open={open} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideNavBarWrapper>
      <StyledLogo fill={initialGray} width={300} height={100} />
        <SideNavBarMenu>
          {content.segmentLinks.map((item) => {
            const LinkIcon = require(`../assets/${item.icon}`).default;
            const StyledLinkIcon = styled(LinkIcon)`
              ${SideNavBarLinkContainer}:hover & {
                path {
                  fill: ${primaryColor};
                }
              }
            `;
            return (
              <SideNavBarLinkContainer onClick={toggle} to={item.link}>
                <StyledLinkIcon fill={initialGray} width={20} height={20} />
                <SideNavBarLink
                  key={item.title}
                  target={item.isExternal ? '_blank' : ''}
                >
                  {item.title}
                  {item.isExternal ? <StyledExternalLink /> : ' '}
                </SideNavBarLink>
              </SideNavBarLinkContainer>
            );
          })}
        </SideNavBarMenu>
      </SideNavBarWrapper>
    </SideNavBarContainer>
  );
};
export default SideNavBar;
