import React from 'react';
import styled from 'styled-components';
import Overview from '../components/Overview';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainContentContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
`;

const MainContent = ({ mainContent }) => {
  console.log(mainContent);

  return (
    <MainContentContainer>
      <h1>{mainContent.overview.title}</h1>
      <b>{mainContent.overview.content}</b>
      <Overview name='overview' interests={mainContent.overview} />
      <Technologies name='technologies' />
      <Experience name='experience' experience={mainContent.experience} />
      <Projects name='projects' />
    </MainContentContainer>
  );
};
export default MainContent;
