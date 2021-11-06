import { I_InputProps, I_TextAreaProps } from './interface';
import { E_FormItemType } from './enum';

export const input_TSX = ({
  type,
  id,
  value,
  name,
  handleChange,
}: I_InputProps) => {
  return type === E_FormItemType.text || type === E_FormItemType.email ? (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  ) : null;
};

export const textarea_TSX = ({
  name,
  type,
  id,
  cols,
  rows,
}: I_TextAreaProps) => {
  return type === E_FormItemType.textarea ? (
    <textarea name={name} id={id} cols={cols} rows={rows}></textarea>
  ) : null;
};
