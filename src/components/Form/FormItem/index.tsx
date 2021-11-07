import React from 'react';
import { T_FormItem } from './type';
import { StyledFormItem } from './style';
import { get_formItem_input, get_formItem_textarea } from './utils';

export const FormItem: React.FC<T_FormItem> = ({
  id,
  label,
  type,
  handleChange,
  errMsg,
  isValid,
  value,
  name,
  cols,
  rows,
}: T_FormItem): JSX.Element => {
  return (
    <StyledFormItem>
      <label id={id}>{label}</label>
      {get_formItem_input({ id, type, name, value, handleChange })}
      {get_formItem_textarea({ id, type, name, cols, rows, handleChange })}
      {errMsg && !isValid && <span>{errMsg}</span>}
    </StyledFormItem>
  );
};
