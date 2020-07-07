import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import CardMedia from '@material-ui/core/CardMedia';
import profilePhoto from '../assets/universal_photo.jpeg';
import { hexToRgbA } from '../helpers/helpers';
import Grid from '@material-ui/core/Grid';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;
const SidebarContainer = styled(Grid)``;

const SidebarImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: inset 0px 8px 8px rgba(0, 0, 0, 0.25);
`;

const Link = styled.a`
  font-weight: bold;
  color: ${initialGray};
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

const SideCard = styled.div``;

const Sidebar = ({ sidebarContent }) => {
  return (
    <SidebarContainer item container justify='center' alignItems='center'>
      <SidebarImage src={profilePhoto} alt='UniversalStudios' />

      <h2>Satyavrat Gaur</h2>

      {/* Social Media Information */}

      {sidebarContent.social.map((item) => {
        const SocialMediaContainer = styled.div`
          display: flex;
          align-items: center;
          color: ${initialGray};
          padding: 12px 24px;
          &:hover {
            color: ${item.socialMediabg};
            background: ${hexToRgbA(item.socialMediabg, 0.15)};
            /* background: linear-gradient(90deg, rgba(131,58,180,) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); */
            border-radius: 12px;
            transition: width 1s;
          }
        `;
        const LinkIcon = require(`../assets/${item.icon}`).default;
        const StyledLinkIcon = styled(LinkIcon)`
          padding: 12px;
          ${SocialMediaContainer}:hover & {
            path {
              fill: ${item.socialMediabg};
            }
          }
        `;
        return (
          <SocialMediaContainer>
            <StyledLinkIcon fill={initialGray} />
            <Link
              href={item.link}
              key={item.title}
              target={item.isExternal ? '_blank' : ''}
            >
              {item.text}
            </Link>
          </SocialMediaContainer>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
