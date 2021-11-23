import React from 'react';
import { I_SmallTitleProps } from './interface';
import { StyledSmallTitle } from './style';

const SmallTitle: React.FC<I_SmallTitleProps> = ({
  icon,
  title,
}: I_SmallTitleProps) => {
  return (
    <StyledSmallTitle>
      <p>{icon}</p>
      <h3>{title}</h3>
    </StyledSmallTitle>
  );
};

export default SmallTitle;
