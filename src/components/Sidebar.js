import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import profilePhoto from '../assets/universal_photo.jpeg';
import { hexToRgbA } from '../helpers/helpers';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;

const SidebarContainer = styled(Grid)`
  align-content: center;
  align-items: center;
  text-align: center;
`;

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

const SideCard = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
  border-radius: 12px;
`;

const SideCardTop = styled.div`
  display: flex;
  flex: 1;
  background-color: grey;
  flex-direction: column;
  text-align: left;
  padding: 0px 12px;
  border-radius: 12px;
`;

const College = styled.div`

`;

const Course = styled.div`

`;

const Year = styled.div

const Quote = styled.div`
  margin: 12px 0px;
  padding: 12px;
  text-align: left;
  border-left: 4px solid ${primaryColor};
`;

const SideCardBottom = styled.div`
  display: flex;
  flex: 2;
  flex-direction: ${(props) => (props.flexdir === 'column' ? 'column' : 'row')};
  padding: 12px 12px;
  border-radius: 12px;
`;

const Sidebar = ({ sidebarContent }) => {
  return (
    <SidebarContainer item container direction='column'>
      <SidebarImage src={profilePhoto} alt='UniversalStudios' />
      <h2>Satyavrat Gaur</h2>

      {/* Social Media Information */}
      {sidebarContent.social.map((item) => {
        const SocialMediaContainer = styled.div`
          display: flex;
          align-items: center;
          color: ${initialGray};
          padding: 0px 24px;
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

      {/* Side Card */}
      <SideCard>
        <SideCardTop>
          <h4>Education</h4>
        </SideCardTop>
        <Quote>
          <p>
            <i>
              "Exercitation proident nisi minim dolor cillum labore magna
              cupidatat aute exercitation adipisicing sint. Nisi anim nostrud
              incididunt labore aute ex et aliquip. Id eiusmod duis duis enim
              ullamco occaecat. Anim nulla excepteur exercitation minim veniam
              excepteur mollit duis. Ex et nulla minim ex quis cupidatat dolor
              laborum excepteur. Minim do nulla commodo occaecat labore dolor
              sit id sit nostrud incididunt occaecat non. Exercitation
              incididunt ex est veniam minim aliquip."{' '}
            </i>
            <br />
            <br />
            <i> - Da Vinci</i>
          </p>
        </Quote>
        <Divider />
        <SideCardBottom flexdir='column'>
          <p>"If you want to write more stuff"</p>
          <p>"If you want to write more stuff"</p>
        </SideCardBottom>
      </SideCard>
    </SidebarContainer>
  );
};

export default Sidebar;
