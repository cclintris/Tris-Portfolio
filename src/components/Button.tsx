import React from 'react';
import { StyledButton } from './styles';
import { I_ButtonProps } from './props';

const Button: React.FC<I_ButtonProps> = ({
  text,
  type,
  shape,
}: I_ButtonProps): JSX.Element => {
  return (
    <StyledButton type={type} shape={shape}>
      {text}
    </StyledButton>
  );
};

export default Button;
