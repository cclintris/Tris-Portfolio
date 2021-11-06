import { I_TextAreaProps, I_InputProps } from './interface';
import { input_TSX, textarea_TSX } from './template';

export const get_formItem_input = (props: I_InputProps) => {
  const { id, type, name, value, handleChange } = props;
  const newProps = { id, type, name, value, handleChange };
  return input_TSX(newProps);
};

export const get_formItem_textarea = (props: I_TextAreaProps) => {
  const { id, type, name, cols, rows } = props;
  const newProps = { id, type, name, cols, rows };
  return textarea_TSX(newProps);
};
