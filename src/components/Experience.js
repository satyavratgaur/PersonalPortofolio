import React from 'react';
import styled from 'styled-components';
import { StyledExternalLink } from '../App';

const ExperienceContainer = styled.div``;

const Card = styled.div`
  display: flex;
  margin: 24px 0px;
  padding: 24px;
  flex-direction: column;
  border: 1px solid #d7d7d7;
  border-radius: 12px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const ExperienceHeadline = styled.div`
  display: flex;
  flex: 2;
  font-size: 20px;
  font-weight: bold;
  padding-right: 5px;
`;

const CardDate = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
  justify-content: flex-end;
  padding-left: 5px;
`;

const Experience = React.forwardRef(({ experience, exp }, ref) => {
  return (
    <ExperienceContainer id='experience'>
      <h2>Experience</h2>
      {experience.map((item) => {
        return (
          <Card>
            <CardHeader>
              <ExperienceHeadline>{item.headline}</ExperienceHeadline>
              <CardDate>
                {item.duration}
                {item.isExternal ? (
                  <a href={item.link}>
                    <StyledExternalLink />
                  </a>
                ) : (
                  ' '
                )}
              </CardDate>
            </CardHeader>
            <p>{item.description}</p>
          </Card>
        );
      })}
    </ExperienceContainer>
  );
});

export default Experience;
