import { createFormFieldConfig } from '../../components/Form/utils';
import { T_ContactForm } from './type';

export const contactForm: T_ContactForm = {
  name: {
    ...createFormFieldConfig('Enter your name*', 'name', 'text', 'name'),
  },
  email: {
    ...createFormFieldConfig('Enter your email*', 'email', 'email', 'email'),
  },
  subject: {
    ...createFormFieldConfig('Enter your subject', 'email', 'text', 'subject'),
  },
};
