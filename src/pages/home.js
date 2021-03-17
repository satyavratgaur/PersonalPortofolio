import React, {useState} from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Grid from '@material-ui/core/Grid';
import theme from '../styles/theme';
import MainContent from '../components/MainContent';
import SideNavBar from '../components/SideNavBar';
import Navbar from '../components/Navbar';


const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Home = ({ config }) => {

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  }

  console.log(config);
  console.log(theme);
  return (
    <HomeContainer>
      <SideNavBar content={config.navbar} open = {open} toggle={toggle}/>
      <Navbar contentConfig={config.navbar} toggle={toggle} />
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
