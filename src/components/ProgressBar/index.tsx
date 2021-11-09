import React from 'react';
import { I_ProgressBarProps } from './interface';
import { StyledProgressBar } from './style';

const ProgressBar: React.FC<I_ProgressBarProps> = ({
  icon,
  title,
  width,
  text,
}: I_ProgressBarProps): JSX.Element => {
  return (
    <StyledProgressBar>
      <div className="skill-desc">
        <img src={icon} alt={icon} />
        <h6>{title}</h6>
      </div>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width }}></span>
        </div>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
