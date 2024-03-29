import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/universal_photo.jpeg';

const OverviewContainer = styled.div``;

const Card = styled.div`
  display: flex;
  margin: 24px 0px;
  padding: 24px;
  flex-direction: row;
  border: 1px solid #d7d7d7;
  border-radius: 12px;
`;

const CardLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: 75%;
  border-radius: 12px;
`;

const CardRight = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const MediaCard = ({ src, title, heading, subheading, content }) => {
  return (
    <Card>
      <CardLeft>
        <CardImage src={src} title={title} />
      </CardLeft>
      <CardRight>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
        <p>{content}</p>
      </CardRight>
    </Card>
  );
};

// const loadImage = imageName => {
//   import(`./assets/${imageName}.jpg`).then(image => {
//     this.setState({
//       image
//     });
//   });
// };

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

const Overview = ({ interests }) => {
  return (
    <OverviewContainer id='overview'>
      <MediaCard
        src={profilePhoto}
        title='Title'
        heading='heading'
        subheading='subheading'
        content='This is the content for the card'
      />
      {interests.hobbies.map((item) => {
        // let img = images('../../assets/' + item.src);
        // const images = require.context(`${img}`, true);
        // const { image } = this.state;

        // let img = '../assets/' + item.src + '.jpg';

        return (
          <MediaCard
            src={images[item.src]}
            title={item.title}
            heading={item.heading}
            subheading={item.subheading}
            content={item.content}
          />
        );
      })}
    </OverviewContainer>
  );
};

export default Overview;
