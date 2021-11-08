import React from 'react';
import { StyledSkill } from './style';
import { MainLayout, InnerLayout } from '../../styles/LayoutStyles';
import { Title, ProgressBar } from '..';

const Skill: React.FC = (): JSX.Element => {
  return (
    <StyledSkill>
      <MainLayout>
        <Title title="Resume" span="Resume" />
        <InnerLayout>
          <ProgressBar title="HTML5" width="70%" text="70%" />
        </InnerLayout>
      </MainLayout>
    </StyledSkill>
  );
};

export default Skill;
