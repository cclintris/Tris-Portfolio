import { E_buttonShape, E_buttonType } from './enum';
import { buttonColor, buttonBorderRadius } from './config';

export const resolve_button_color = (type: E_buttonType): string => {
  return buttonColor[type];
};

export const resolve_button_shape = (shape: E_buttonShape): string => {
  return buttonBorderRadius[shape];
};
