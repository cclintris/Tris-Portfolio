import React from 'react';
import { I_ProgressBarProps } from './interface';

const ProgressBar: React.FC<I_ProgressBarProps> = ({
  title,
  width,
  text,
}: I_ProgressBarProps): JSX.Element => {
  return (
    <div>
      <h6>{title}</h6>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width }}></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
