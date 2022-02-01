import React from 'react';
import { InnerLayout } from '../../styles/LayoutStyles';
import { StyledResume } from './style';
import { Title } from '..';
import { SmallTitle } from '..';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';
import { education, work } from '../../data';

const ResumeC: React.FC = () => {
  const briefCase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

  return (
    <StyledResume>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <SmallTitle icon={school} title="Education" />
        <div className="resume-content">
          {education.map(({ from, to, title, subtitle, text }) => (
            <ResumeItem
              from={from}
              to={to}
              title={title}
              subtitle={subtitle}
              text={text}
            />
          ))}
        </div>
        <SmallTitle icon={briefCase} title="Working Experience" />
        <div className="resume-content">
          {work.map(({ from, to, month, title, subtitle, text }) => (
            <ResumeItem
              from={from}
              to={to}
              month={month}
              title={title}
              subtitle={subtitle}
              text={text}
            />
          ))}
        </div>
      </InnerLayout>
    </StyledResume>
  );
};

export default ResumeC;
