import React from 'react';
import { StyledAbout } from './styles';
import { MainLayout } from '../styles/LayoutStyles';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import ServiceSection from '../components/ServiceSection';
import HobbySection from '../components/HobbySection';

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
