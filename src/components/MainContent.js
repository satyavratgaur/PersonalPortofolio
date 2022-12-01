import React, { useRef } from 'react';
import styled from 'styled-components';
import Overview from '../components/Overview';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import { useWindowScroll } from 'react-use';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainContentContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
`;

//const overview = React.createRef();

const MainContent = ({ mainContent }) => {
  return (
    <MainContentContainer>
      <h1>{mainContent.overview.title}</h1>
      <b>{mainContent.overview.content}</b>
      <Experience name='experience' experience={mainContent.experience} />
      <Technologies name='technologies' tech={mainContent.technologies} />
      <Projects name='projects' projects={mainContent.projects} />
    </MainContentContainer>
  );
};

export default MainContent;
