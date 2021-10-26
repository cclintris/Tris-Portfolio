import React from 'react';
import { StyledAbout } from './styles';
import LayoutStyles from '../styles/LayoutStyles';
import Title from '../components/Title';

const About: React.FC = (): JSX.Element => {
  return (
    <LayoutStyles>
      <StyledAbout>
        <Title title="About me" span="About me" />
      </StyledAbout>
    </LayoutStyles>
  );
};

export default About;
