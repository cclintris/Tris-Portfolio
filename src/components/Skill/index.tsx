import React from 'react';
import { StyledSkill } from './style';
import { MainLayout, InnerLayout } from '../../styles/LayoutStyles';
import { Title, ProgressBar } from '..';
import { skills } from '../../data';

const Skill: React.FC = (): JSX.Element => {
  return (
    <StyledSkill>
      <MainLayout>
        <Title title="Tech stacks" span="Tech stacks" />
        <InnerLayout>
          <div className="skills">
            {skills.map(({ icon, title, width, text }) => (
              <ProgressBar
                icon={icon}
                title={title}
                width={width}
                text={text}
              />
            ))}
          </div>
        </InnerLayout>
      </MainLayout>
    </StyledSkill>
  );
};

export default Skill;
