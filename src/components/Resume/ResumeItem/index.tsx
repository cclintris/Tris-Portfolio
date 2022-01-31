import React from 'react';
import { StyledResumeItem } from './style';
import { I_ResumeItemProps } from './interface';

const ResumeItem: React.FC<I_ResumeItemProps> = ({
  from,
  to,
  title,
  subtitle,
  text,
}: I_ResumeItemProps) => {
  return (
    <StyledResumeItem>
      <div className="up-content">
        <p>{from + ' ~ ' + to}</p>
      </div>
      <div className="down-content">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{text}</p>
      </div>
    </StyledResumeItem>
  );
};

export default ResumeItem;
