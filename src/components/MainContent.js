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
  console.log(mainContent);
  // const overview = useRef(null);
  // const exp = useRef(null);

  // const scrollToTop = ({ loc } = { top: 0 }) =>
  //   window.scrollTo({ top: 0, behavior: 'smooth' });

  // const goToOverview = () => {
  //   console.log('How bout sum ovaview', overview);
  //   window.scrollTo({ top: overview.current.offsetTop, behavior: 'smooth' });
  // };
  // const goToExperience = () => {
  //   console.log('How bout sum exp', exp);
  //   window.scrollTo({ top: exp.current.offsetTop, behavior: 'smooth' });
  // };

  // console.log('How bout overview', overview);
  // console.log('Experience', exp);
  // console.log(useRef({0,top}));
  return (
    <MainContentContainer>
      <h1>{mainContent.overview.title}</h1>
      <b>{mainContent.overview.content}</b>
      <Overview name='overview' interests={mainContent.overview} />
      <Technologies name='technologies' tech = {mainContent.technologies}/>

      {/* <button onClick={scrollToTop}>Lets go to the top</button>
      <button onClick={goToOverview}>Lets go overview</button>
      <button onClick={goToExperience}>Lets go Experience</button> */}
      <Experience
        name='experience'
        experience={mainContent.experience}
        // exp={exp}
      />
      <Projects name='projects' />
    </MainContentContainer>
  )
}

export default MainContent;
