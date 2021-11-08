import { createValidationRule } from '../../components/Form/utils';
import { I_ValidationRule } from '../../components/Form/interface';

export const requiredRule = (inputName: string): I_ValidationRule => {
  return createValidationRule({
    ruleName: 'required',
    errMsg: `${inputName} required !`,
    validator: (inputValue) => inputValue.length !== 0,
  });
};
