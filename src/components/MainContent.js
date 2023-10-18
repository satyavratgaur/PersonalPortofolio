import React from 'react';
import styled from 'styled-components';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const MainContentContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
`;

const MainContent = ({ mainContent }) => {
  return (
    <MainContentContainer>
      <h1>{mainContent.overview.title}</h1>
      <b>{mainContent.overview.content}</b>
      {/*Adding Overview content*/}
      {/* <Overview name='overview' interests={mainContent.overview} /> */}
      {/* <button onClick={scrollToTop}>Lets go to the top</button>
      <button onClick={goToOverview}>Lets go overview</button>
      <button onClick={goToExperience}>Lets go Experience</button> */}
      <Experience name='experience' experience={mainContent.experience} />
      <Technologies name='technologies' tech={mainContent.technologies} />
      <Projects name='projects' projects={mainContent.projects} />
    </MainContentContainer>
  );
};

export default MainContent;
