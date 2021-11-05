import React from 'react';
import { E_FormItemType } from './enum';

export interface I_FormItemProps {
  label?: string;
  errMsg?: string;
  isValid?: boolean;
  name: string;
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface I_InputProps extends I_FormItemProps {
  type: E_FormItemType;
}

export interface I_TextAreaProps extends I_FormItemProps {
  cols: number;
  rows: number;
}
