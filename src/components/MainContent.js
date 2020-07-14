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
      <h1>Title</h1>
      <h2>Subheading</h2>
      <b>
        Exercitation proident nisi minim dolor cillum labore magna cupidatat
        aute exercitation adipisicing sint. Nisi anim nostrud incididunt labore
        aute ex et aliquip. Id eiusmod duis duis enim ullamco occaecat. Anim
        nulla excepteur exercitation minim veniam excepteur mollit duis. Ex et
        nulla minim ex quis cupidatat dolor laborum excepteur. Minim do nulla
        commodo occaecat labore dolor sit id sit nostrud incididunt occaecat
        non. Exercitation incididunt ex est veniam minim aliquip. Sint
        exercitation laboris ex voluptate incididunt nulla Lorem. Laborum amet
        consequat do reprehenderit id do culpa non sint. Labore magna do velit
        amet sint laboris mollit occaecat irure. Veniam ullamco ad minim
        cupidatat cupidatat. Pariatur laborum nostrud do consequat commodo
        officia exercitation aliqua sunt aliqua est excepteur. Laboris ullamco
        do aute laborum voluptate ad anim reprehenderit aliqua duis aliquip. Et
        sit magna exercitation duis excepteur anim consequat aliqua anim non
        aute sit do. Nostrud sunt nulla reprehenderit nisi reprehenderit
        voluptate. Dolore nulla est nulla pariatur dolor est aliqua magna. Culpa
        laboris quis veniam ipsum ea id qui proident non deserunt. Et pariatur
        commodo ea ut. Duis exercitation tempor eiusmod nisi aliquip. Sint
        occaecat deserunt aute officia excepteur sunt nisi sint aliquip fugiat
        est excepteur nostrud. Magna esse sit sit officia voluptate qui non non
        id amet ipsum officia. Culpa aliqua aliqua sunt ipsum dolore.
        Reprehenderit est consequat ea fugiat nostrud aliquip deserunt sint eu
        tempor velit eiusmod ad. Ea voluptate elit duis voluptate excepteur
        incididunt labore amet irure pariatur consectetur exercitation. Commodo
        minim ullamco aliquip officia minim esse in duis velit commodo. Aute do
        magna et eu. Commodo elit laboris elit ex. Ad minim non adipisicing
        officia. Minim laboris aliquip exercitation nisi fugiat.
      </b>
      <Overview />
      <Technologies />
      <Experience />
      <Projects />
    </MainContentContainer>
  );
};
export default MainContent;
