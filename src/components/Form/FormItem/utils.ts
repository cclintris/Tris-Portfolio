import { T_FormItem } from './type';
import { E_FormItemType } from './enum';
import { input_TSX, textarea_TSX } from './template';

export const get_formItem_According_to_type = ({
  type,
  id,
  value,
  name,
  handleChange,
  cols,
  rows,
}: T_FormItem) => {
  switch (type) {
    case E_FormItemType.email:
      return input_TSX({ type, id, value, name, handleChange });
    case E_FormItemType.text:
      return input_TSX({ type, id, value, name, handleChange });
    case E_FormItemType.textarea:
      return textarea_TSX({ name, id, cols, rows, handleChange, value });
    default:
      console.error(`[Error]: Unable to support ${type} form item!`);
      break;
  }
};
