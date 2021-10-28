import React from 'react';
import { InnerLayout } from '../styles/LayoutStyles';
import { StyledServiceSection } from './styles';
import Title from './Title';

const ServiceSection: React.FC = (): JSX.Element => {
  return (
    <InnerLayout>
      <StyledServiceSection>
        <Title title="Services" span="services" />
      </StyledServiceSection>
    </InnerLayout>
  );
};

export default ServiceSection;
