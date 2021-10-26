import React from 'react';
import { StyledTitle } from './styles';
import { TitleProps } from './props';

const Title: React.FC<TitleProps> = ({
  title,
  span,
}: TitleProps): JSX.Element => {
  return (
    <StyledTitle>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </StyledTitle>
  );
};

export default Title;
