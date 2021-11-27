import React from 'react';
import { InnerLayout } from '../../styles/LayoutStyles';
import { StyledResume } from './style';
import { Title } from '..';
import { SmallTitle } from '..';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

const ResumeC: React.FC = () => {
  const briefCase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

  return (
    <StyledResume>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={school} title="Education" />
        </div>
        <div className="education-content">
          <ResumeItem
            year="2018 - 2022"
            title="Bachelor of Software Engineering"
            subtitle="Nanjing University"
            text="Attended university at NJU, pursued bachelor degree of software engineering."
          />
        </div>
        <SmallTitle icon={briefCase} title="Working Experience" />
        <div className="resume-content"></div>
      </InnerLayout>
    </StyledResume>
  );
};

export default ResumeC;
