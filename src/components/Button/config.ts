import { E_buttonType, E_buttonShape } from './enum';

export const buttonColor = {
  [E_buttonType.primary]: '#007bff',
  [E_buttonType.success]: '#68CC4D',
  [E_buttonType.warning]: '#F9A438',
  [E_buttonType.error]: '#EF4824',
  [E_buttonType.default]: '#858482',
};

export const buttonBorderRadius = {
  [E_buttonShape.circle]: '50%',
  [E_buttonShape.round]: '40px',
  [E_buttonShape.default]: '0px',
};
