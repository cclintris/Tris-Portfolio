import React from 'react';
import { InnerLayout } from '../styles/LayoutStyles';
import { StyledServiceSection } from './styles';
import Title from './Title';
import Card from './Card';
import { services } from './data';

const ServiceSection: React.FC = (): JSX.Element => {
  return (
    <InnerLayout>
      <StyledServiceSection>
        <Title title="Services" span="services" />
        <div className="services">
          {services.map(({ image, title, paragraph }, key) => (
            <Card image={image} title={title} paragraph={paragraph} key={key} />
          ))}
        </div>
      </StyledServiceSection>
    </InnerLayout>
  );
};

export default ServiceSection;
