import React from 'react';
import { I_FormItemProps } from './interface';
import { StyledFormItem } from './style';

export const FormItem: React.FC<I_FormItemProps> = ({
  id,
  label,
  type,
  htmlFor,
  handleChange,
  errMsg,
  isValid,
  value,
}: I_FormItemProps): JSX.Element => {
  return (
    <StyledFormItem>
      <label htmlFor={htmlFor} id={id}>
        {label}
      </label>
      <input type={type} id={id} value={value} onChange={handleChange} />
      {errMsg && !isValid && <span>{errMsg}</span>}
    </StyledFormItem>
  );
};
