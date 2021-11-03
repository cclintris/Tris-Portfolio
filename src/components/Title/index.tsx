import React from 'react';
import { StyledTitle } from './style';
import { I_TitleProps } from './interface';

const Title: React.FC<I_TitleProps> = ({
  title,
  span,
}: I_TitleProps): JSX.Element => {
  return (
    <StyledTitle>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </StyledTitle>
  );
};

export default Title;
