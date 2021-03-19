import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import theme from '../styles/theme';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;

const loadImage = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = loadImage(
  require.context('../assets/', false, /\.(png|jpe?g|svg)$/)
);

const ProjectsContainer = styled(Grid)`
  width: 100%;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0px;
  padding: 24px;
  border: 1px solid #d7d7d7;
  border-radius: 12px;
  &:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
  box-shadow:1px 1px 1px 1px #ccc;
`;

const ProjectHeadline = styled.div`
  display: flex;
  text-align: center;
  padding: 12px;
  flex: 1;
  font-size: 24px;
  align-self: center;
`;

const ProjectTags = styled.div`
  display: block;
  text-align: -webkit-center;
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

// const DialogOpen = styled(Dialog)``;

const DialogTitle = styled(MuiDialogTitle)``;

const DialogContent = styled(MuiDialogContent)`
  /* padding: ; */
`;
const DialogActions = styled(MuiDialogActions)`
  margin: 0;
  /* padding: ; */
`;

const CardImage = styled.img`
  width: 75%;
  border-radius: 12px;
`;

const Projects = ({ projects }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState(null);

  const handleDialog = (i) => {
    setOpen(true);
    setSelectedPost(i);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h2 id='projects'>Projects</h2>
      {/* <Grid container justify='space-around'>
        <ProjectsContainer onClick={()=>handleDialog}>
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
        <Dialog
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}
          selectedPost={selectedPost}
        >
          <DialogTitle id='customized-dialog-title' onClose={handleClose}>
            Project Headline for the Project
          </DialogTitle>
          <DialogContent dividers>
            <p>
              This is the Description for the project that I completed this year
            </p>
            <p>
              Exercitation proident nisi minim dolor cillum labore magna
              cupidatat aute exercitation adipisicing sint. Nisi anim nostrud
              incididunt labore aute ex et aliquip
            </p>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color='primary'>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid> */}

      {projects.map((item) => {
        return (
          <Grid container justify='space-around' width='100%'>
            <ProjectsContainer onClick={() => handleDialog(item)}>
              <ProjectCard>
                <ProjectHeadline>{item.headline}</ProjectHeadline>
                <ProjectTags>
                  {item.technologies.map((tech) => {
                    return (
                      <StyledChip
                        variant='outlined'
                        size='small'
                        label={tech.stack}
                      />
                    );
                  })}
                </ProjectTags>
              </ProjectCard>
            </ProjectsContainer>
            {open && (
              <Dialog
                onClose={handleClose}
                aria-labelledby={selectedPost.id}
                open={open}
              >
                <DialogTitle id={selectedPost} onClose={handleClose}>
                  {selectedPost.projectDescription.Title}
                </DialogTitle>
                <DialogContent dividers>
                  <CardImage
                    src={images[selectedPost.projectDescription.imageURL]}
                    title={selectedPost.projectDescription.Title}
                  />
                  {selectedPost.projectDescription.content.map((elem) => {
                    return <p>{elem.para}</p>;
                  })}
                  {/* <pre>{JSON.stringify(selectedPost, null, 2)}</pre> */}
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose} color='primary'>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Grid>
        );
      })}
    </>
  );
};
export default Projects;
