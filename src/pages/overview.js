import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Overview = () => {
    return (
        <Wrapper>
            <Title>
                4th of July Scenes
            </Title>
        </Wrapper>
    );
}
 
export default Overview;