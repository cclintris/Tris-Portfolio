import { E_buttonType, E_buttonShape } from '../configs/enum';

export interface I_TitleProps {
  title: string;
  span: string;
}

export interface I_ButtonProps {
  text: string;
  type: E_buttonType;
  shape: E_buttonShape;
}

export interface I_StyledButtonProps {
  type: E_buttonType;
  shape: E_buttonShape;
}
