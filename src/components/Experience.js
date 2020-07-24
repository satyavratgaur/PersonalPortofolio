import React, { useRef } from 'react';
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
`;

const CardDate = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
  justify-content: flex-end;
`;

const Experience = ({ experience , exp }) => {
  // const exp = useRef(null);

  return (
    <ExperienceContainer ref={exp}>
      <h2>Experience</h2>
      {experience.map((item) => {
        return (
          <Card>
            <CardHeader>
              <ExperienceHeadline>{item.headline}</ExperienceHeadline>
              <CardDate>
                {item.duration}
                {item.isExternal ? (
                  <a href={item.link} target='_blank'>
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
      <Card>
        <CardHeader>
          <ExperienceHeadline>Select Portfolio Servicing</ExperienceHeadline>
          <CardDate>Jun-July 2020</CardDate>
        </CardHeader>
        <p>
          Exercitation proident nisi minim dolor cillum labore magna cupidatat
          aute exercitation adipisicing sint. Nisi anim nostrud incididunt
          labore aute ex et aliquip. Id eiusmod duis duis enim ullamco occaecat.
        </p>
      </Card>
    </ExperienceContainer>
  );
};

export default Experience;
