import React from 'react';
import { MainLayout } from '../styles/LayoutStyles';
import { Skill, ResumeC } from '../components';

const Resume: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Skill />
      <ResumeC />
    </MainLayout>
  );
};

export default Resume;
