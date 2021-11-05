import React from 'react';
import { I_FormField } from './interface';
import { FormItem } from './FormItem';

export const createFormFieldConfig = (
  id: string,
  label: string,
  name: string,
  type: string,
  defaultValue = ''
): I_FormField => {
  return {
    renderFormField: (handleChange, value, isValid, errMsg, key) => {
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
