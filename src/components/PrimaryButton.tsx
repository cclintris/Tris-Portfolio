import React from 'react';
import { StyledPrimaryButton } from './styles';
import { PrimaryButtonProps } from './props';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
}: PrimaryButtonProps): JSX.Element => {
  return <StyledPrimaryButton>{text}</StyledPrimaryButton>;
};

export default PrimaryButton;
