import React from 'react';
import { InnerLayout } from '../../styles/LayoutStyles';
import { StyledResume } from './style';
import { Title } from '..';
import { SmallTitle } from '..';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';

const ResumeC: React.FC = () => {
  const briefCase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

  return (
    <StyledResume>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <SmallTitle icon={briefCase} title="Working Experience" />
      </InnerLayout>
    </StyledResume>
  );
};

export default ResumeC;
