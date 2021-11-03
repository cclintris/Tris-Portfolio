import React from 'react';
import { InnerLayout } from '../../styles/LayoutStyles';
import { StyledHobbySection } from './style';
import Title from '../Title';
import HobbyItem from './HobbyItem';
import { hobbies } from '../../data';

const HobbySection: React.FC = (): JSX.Element => {
  return (
    <InnerLayout>
      <StyledHobbySection>
        <Title title="Hobbies" span="Hobbies" />
        <div className="hobbies">
          {hobbies.map(({ title, image }, key) => (
            <HobbyItem title={title} image={image} key={key} />
          ))}
        </div>
      </StyledHobbySection>
    </InnerLayout>
  );
};

export default HobbySection;
