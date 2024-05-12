import { FormStep, Values } from './types';

export const defaultValues: Values = {
  email: '',
  accountType: '',
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  phoneNumber: '',
  gender: '',
  companyName: '',
  password: '',
  confirmPassword: '',
};

export const STEPS_ORDER = [
  FormStep.Intro,
  FormStep.AccountType,
  FormStep.AccountDetails,
  FormStep.Security,
];
