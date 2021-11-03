import React from 'react';
import { StyledAbout } from './styles';
import { MainLayout } from '../styles/LayoutStyles';
import { Title } from '../components';
import { ImageSection } from '../components';
import { ServiceSection } from '../components';
import { HobbySection } from '../components';

const About: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
      <StyledAbout>
        <Title title="About me" span="About me" />
        <ImageSection />
        <ServiceSection />
        <HobbySection />
      </StyledAbout>
    </MainLayout>
  );
};

export default About;
