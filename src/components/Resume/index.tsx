import React from 'react';
import { InnerLayout } from '../../styles/LayoutStyles';
import { StyledResume } from './styles';
import { Title } from '..';

const ResumeC: React.FC = () => {
  return (
    <StyledResume>
      <Title title="Resume" span="Resume" />
      <InnerLayout></InnerLayout>
    </StyledResume>
  );
};

export default ResumeC;
