import React from 'react';
import { T_FormItem } from './type';
import { StyledFormItem } from './style';
import { get_formItem_According_to_type } from './utils';

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
      {get_formItem_According_to_type({
        type,
        id,
        value,
        name,
        handleChange,
        cols,
        rows,
      })}
      {errMsg && !isValid && <span>{errMsg}</span>}
    </StyledFormItem>
  );
};
