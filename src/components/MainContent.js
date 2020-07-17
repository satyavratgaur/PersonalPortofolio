import React from 'react';
import styled from 'styled-components';
import Overview from '../components/Overview';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

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
      <Overview interests={mainContent.overview} />
      <Technologies />
      <Experience experience={mainContent.experience} />
      <Projects />
    </MainContentContainer>
  );
};
export default MainContent;
