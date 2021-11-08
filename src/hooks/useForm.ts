import React from 'react';
import { useState, useCallback } from 'react';
import { I_FormField } from '../components/Form/interface';
import { T_ContactForm } from '../pages/config/type';
import { T_useFormHook } from './type';

export const useForm = (formObj: T_ContactForm): T_useFormHook => {
  const [form, setForm] = useState(formObj);

  // Check a single form field validity
  const isInputFieldValid = useCallback((inputField: I_FormField) => {
    for (const rule of inputField.validationRules) {
      if (!rule.validator(inputField.value)) {
        inputField.errMsg = rule.errMsg;
        return false;
      }
    }
    return true;
  }, []);

  // form item input type included general Input and Textarea(current version)
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const inputObj = { ...form[name] };
      // update value
      inputObj.value = value;

      // check input field validity
      const isInputValid = isInputFieldValid(inputObj);

      // 1. if input field is valid and is previously set to invalid
      // then update the field to valid
      // 2. if input field is invalid and is previously set to valid
      // then update the field to invalid
      if (inputObj.valid !== isInputValid) {
        inputObj.valid = isInputValid;
      }

      // mark input field as touched, it's a one-way process
      inputObj.touched = true;

      // update form configuration
      setForm({
        ...form,
        [name]: inputObj,
      });
    },
    [form, isInputFieldValid]
  );

  // Check overall form validity, used to disable a form's submit button
  const isFormValid = useCallback(() => {
    // console.log('isFormValid');
    let isValid = true;
    const arr = Object.values(form);
    // console.log('arr', arr);
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  const renderFormUnit = () => {
    return Object.values(form).map((formConfig: I_FormField) => {
      const { value, label, errMsg, valid, renderFormField } = formConfig;
      return renderFormField(onInputChange, value, valid, errMsg, label);
    });
  };

  return [renderFormUnit, isFormValid];
};
