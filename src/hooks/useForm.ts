import { useState } from 'react';
import { I_FormField } from '../components/Form/interface';
import { T_ContactForm } from '../pages/config/type';

export const useForm = (formObj: T_ContactForm) => {
  const [form, setForm] = useState(formObj);

  const onInputChange = () => {};

  const renderFormUnit = () => {
    return Object.values(form).map((formConfig: I_FormField) => {
      const { value, label, errMsg, valid, renderFormField } = formConfig;
      return renderFormField(onInputChange, value, valid, errMsg, label);
    });
  };

  return [renderFormUnit];
};
