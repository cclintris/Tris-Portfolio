import React from 'react';
import { StyledResumeItem } from './style';

const ResumeItem: React.FC = () => {
  return (
    <StyledResumeItem>
      <div className="left-content"></div>
      <div className="right-content"></div>
    </StyledResumeItem>
  );
};

export default ResumeItem;
