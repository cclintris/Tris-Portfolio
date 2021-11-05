import React from 'react';

export interface I_FormField {
  renderFormField: (
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    isValid: boolean,
    errMsg: string,
    key: string
  ) => JSX.Element;
  label: string;
  value: string;
  valid: boolean;
  errMsg: string;
  touched: boolean;
  validationRules: any[];
}
