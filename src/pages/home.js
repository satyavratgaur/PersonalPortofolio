import React, {useRef} from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Grid from '@material-ui/core/Grid';
import theme from '../styles/theme';
import MainContent from '../components/MainContent';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Home = ({ config }) => {
  console.log(config);
  console.log(theme);
  return (
    <HomeContainer>
      <Grid container spacing={3}>
        <Grid container item sm={12} md={3}>
          <Sidebar sidebarContent={config.sideBar} />
        </Grid>
        <Grid item xs={12} md={9}>
          <MainContent mainContent={config.mainContent} />
        </Grid>
      </Grid>
    </HomeContainer>
  );
};

export default Home;
