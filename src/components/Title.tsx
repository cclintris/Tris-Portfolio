import React from 'react';
import { StyledTitle } from './styles';
import { I_TitleProps } from './props';

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
