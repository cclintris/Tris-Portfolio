import React from 'react';
import { E_FormItemType } from './enum';

export interface I_FormItemProps {
  label?: string;
  errMsg?: string;
  isValid?: boolean;
  name: string;
  id: string;
  type: E_FormItemType;
}

export interface I_InputProps extends I_FormItemProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface I_TextAreaProps extends I_FormItemProps {
  cols: number;
  rows: number;
}
