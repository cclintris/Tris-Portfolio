import React from 'react';
import { StyledSkill } from './style';
import { InnerLayout } from '../../styles/LayoutStyles';
import { Title, ProgressBar } from '..';
import { skillsSet } from '../../data';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';

const Skill: React.FC = (): JSX.Element => {
  return (
    <StyledSkill>
      <Title title="Tech stacks" span="Tech stacks" />
      <InnerLayout style={{ marginTop: '2rem' }}>
        {skillsSet.map(({ subject, skills }, key) => (
          <Accordion key={key} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMore style={{ color: '#fff' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordion-summary"
            >
              <Typography className="typo">{subject}</Typography>
            </AccordionSummary>
            <AccordionDetails className="skills">
              {skills.map(({ icon, title, width, text }, key) => (
                <ProgressBar
                  key={key}
                  icon={icon}
                  title={title}
                  width={width}
                  text={text}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </InnerLayout>
    </StyledSkill>
  );
};

export default Skill;
