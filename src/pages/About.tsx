import React from 'react';
import { StyledAbout } from './styles';
import { MainLayout } from '../styles/LayoutStyles';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import ServiceSection from '../components/ServiceSection';

const About: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
      <StyledAbout>
        <Title title="About me" span="About me" />
        <ImageSection />
        <ServiceSection />
      </StyledAbout>
    </MainLayout>
  );
};

export default About;
