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
        <SmallTitle icon={school} title="Education" />
        <div className="resume-content">
          <ResumeItem
            year="2015 - 2018"
            title="High School"
            subtitle="Taipei Municipal Jianguo High School"
            text="Graduated from No.1 ranked high school in Taiwan."
          />
          <ResumeItem
            year="2018 - 2022"
            title="Undergraduate"
            subtitle="Nanjing University"
            text="Attended university at NJU Software Institute, pursued Bachelor degree of Engineering, majoring in Software Engineering."
          />
        </div>
        <SmallTitle icon={briefCase} title="Working Experience" />
        <div className="resume-content"></div>
      </InnerLayout>
    </StyledResume>
  );
};

export default ResumeC;
