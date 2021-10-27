import React from 'react';
import { StyledAbout } from './styles';
import LayoutStyles from '../styles/LayoutStyles';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';

const About: React.FC = (): JSX.Element => {
  return (
    <LayoutStyles>
      <StyledAbout>
        <Title title="About me" span="About me" />
        <ImageSection />
      </StyledAbout>
    </LayoutStyles>
  );
};

export default About;
