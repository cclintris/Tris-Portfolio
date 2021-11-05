import React from 'react';
import { I_FormField } from './interface';
import { FormItem } from './FormItem';
import { E_FormItemType } from './FormItem/enum';

export const createFormFieldConfig = (
  id: string,
  label: string,
  name: string,
  type: E_FormItemType,
  defaultValue = ''
): I_FormField => {
  return {
    renderFormField: (
      handleChange,
      value,
      isValid,
      errMsg,
      key,
      cols = 30,
      rows = 10
    ) => {
      return React.createElement(
        FormItem,
        {
          id,
          label,
          type,
          handleChange,
          errMsg,
          isValid,
          value,
          name,
          key,
          cols,
          rows,
        },
        null
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errMsg: '',
    touched: false,
    validationRules: [],
  };
};
