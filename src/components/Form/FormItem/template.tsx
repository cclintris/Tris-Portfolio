import { I_InputProps, I_TextAreaProps } from './interface';

export const input_TSX = ({
  type,
  id,
  value,
  name,
  handleChange,
}: I_InputProps) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export const textarea_TSX = ({ name, id, cols, rows }: I_TextAreaProps) => {
  return <textarea name={name} id={id} cols={cols} rows={rows}></textarea>;
};
