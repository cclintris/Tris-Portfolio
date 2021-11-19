import React from 'react';
import { StyledSkill } from './style';
import { MainLayout, InnerLayout } from '../../styles/LayoutStyles';
import { Title, ProgressBar } from '..';
import { skillsSet } from '../../data';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { styled } from '@material-ui/styles';

const Skill: React.FC = (): JSX.Element => {
  return (
    <StyledSkill>
      <MainLayout>
        <Title title="Tech stacks" span="Tech stacks" />
        <InnerLayout>
          {skillsSet.map(({ subject, skills }, key) => (
            <Accordion key={key} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{subject}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="skills">
                  {skills.map(({ icon, title, width, text }, key) => (
                    <ProgressBar
                      key={key}
                      icon={icon}
                      title={title}
                      width={width}
                      text={text}
                    />
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </InnerLayout>
      </MainLayout>
    </StyledSkill>
  );
};

export default Skill;
