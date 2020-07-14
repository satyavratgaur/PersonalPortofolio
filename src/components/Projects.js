import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import theme from '../styles/theme';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;

const ProjectsContainer = styled(Grid)``;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0px;
  padding: 24px;
  border: 1px solid #d7d7d7;
  border-radius: 12px;
`;

const ProjectHeadline = styled.div`
  display: flex;
  padding: 12px;
  flex: 1;
  font-size: 24px;
  align-self: center;
`;

const ProjectTags = styled.div`
  display: flex;
  flex: 1;
  font-size: 24px;
  align-self: center;
`;

const StyledChip = styled(Chip)`
  margin: 6px;
  padding: 6px;
  /* &:hover {
    color: ${primaryColor};
    background-color: white;
  } */
`;

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <Grid container justify='space-around'>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectHeadline>Project Headline</ProjectHeadline>
            <ProjectTags>
              <StyledChip variant='outlined' size='small' label='ReactJS' />
              <StyledChip variant='outlined' size='small' label='ReactJS' />
              <StyledChip variant='outlined' size='small' label='ReactJS' />
              <StyledChip variant='outlined' size='small' label='ReactJS' />
            </ProjectTags>
          </ProjectCard>
        </ProjectsContainer>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectHeadline>Project Headline</ProjectHeadline>
            <ProjectTags>
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
            </ProjectTags>
          </ProjectCard>
        </ProjectsContainer>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectHeadline>Project Headline</ProjectHeadline>
            <ProjectTags>
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
            </ProjectTags>
          </ProjectCard>
        </ProjectsContainer>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectHeadline>Project Headline</ProjectHeadline>
            <ProjectTags>
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
            </ProjectTags>
          </ProjectCard>
        </ProjectsContainer>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectHeadline>Project Headline</ProjectHeadline>
            <ProjectTags>
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
              <StyledChip label='ReactJS' />
            </ProjectTags>
          </ProjectCard>
        </ProjectsContainer>
      </Grid>
    </>
  );
};
export default Projects;
