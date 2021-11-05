import { createFormFieldConfig } from '../../components/Form/utils';
import { T_ContactForm } from './type';
import { E_FormItemType } from '../../components/Form/FormItem/enum';

export const contactForm: T_ContactForm = {
  name: {
    ...createFormFieldConfig(
      'name',
      'Enter your name*',
      'name',
      E_FormItemType.text
    ),
  },
  email: {
    ...createFormFieldConfig(
      'email',
      'Enter your email*',
      'email',
      E_FormItemType.email
    ),
  },
  subject: {
    ...createFormFieldConfig(
      'subject',
      'Enter your subject',
      'subject',
      E_FormItemType.text
    ),
  },
  message: {
    ...createFormFieldConfig(
      'message',
      'Enter your message',
      'message',
      E_FormItemType.textarea
    ),
  },
};
