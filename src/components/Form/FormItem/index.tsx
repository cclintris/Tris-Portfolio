import React from 'react';
import { I_FormItemProps } from './interface';
import { StyledFormItem } from './style';

export const FormItem: React.FC<I_FormItemProps> = ({
  id,
  label,
  type,
  handleChange,
  errMsg,
  isValid,
  value,
  name,
}: I_FormItemProps): JSX.Element => {
  return (
    <StyledFormItem>
      <label id={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={handleChange}
      />
      {errMsg && !isValid && <span>{errMsg}</span>}
    </StyledFormItem>
  );
};
