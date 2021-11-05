import React from 'react';

export interface I_FormItemProps {
  id: string;
  label: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errMsg: string;
  isValid: boolean;
  value: string;
  name: string;
}
