import { E_buttonShape, E_buttonType } from './enum';

export interface I_ButtonProps {
  text: string;
  type: E_buttonType;
  shape: E_buttonShape;
}

export interface I_StyledButtonProps {
  type: E_buttonType;
  shape: E_buttonShape;
}
