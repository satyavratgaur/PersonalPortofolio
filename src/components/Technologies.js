import React from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import theme from '../styles/theme';

const primaryColor = theme.palette.primary.main;
const initialGray = theme.palette.gray.main;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechProgress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TechName = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  font-weight: bold;
`;

const ProgressBar = styled(LinearProgress)`
  display: flex;
  flex: 2;
  color: ${primaryColor};
  background-color: ${initialGray};
  border-radius: 12px;
  height: 10px !important;
`;

const Technologies = ({tech}) => {
  console.log(tech)
  return (
    <TechnologiesContainer>
      <h2>Technologies</h2>
      <TechProgress>
        <TechName>React</TechName>
        <ProgressBar variant='determinate' value={80}></ProgressBar>
      </TechProgress>
      {tech.map((item)=>{
        return <TechProgress>
        <TechName>{item.stack}</TechName>
        <ProgressBar variant='determinate' value={item.value}></ProgressBar>
      </TechProgress>
      })};
      
    </TechnologiesContainer>
  );
};
export default Technologies;
