import React from 'react';
import { StyledButton } from './style';
import { I_ButtonProps } from './interface';

const Button: React.FC<I_ButtonProps> = ({
  text,
  type,
  shape,
  disabled,
}: I_ButtonProps): JSX.Element => {
  // console.log('button disabled', disabled);
  return (
    <StyledButton type={type} shape={shape} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
