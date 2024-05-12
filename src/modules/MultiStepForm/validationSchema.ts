import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';
import * as EmailValidator from 'email-validator';

import { FormStep, UserAccountType } from './types';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Email is required')
    .test('invalid-email', 'Email is invalid', (value) =>
      EmailValidator.validate(value)
    ),
  accountType: Yup.string().when('$step', {
    is: FormStep.AccountType,
    then: (schema) => schema.required('Account type is required'),
  }),
  firstName: Yup.string()
    .trim()
    .when('$step', {
      is: FormStep.AccountDetails,
      then: (schema) => schema.required('First name is required'),
    }),
  lastName: Yup.string()
    .trim()
    .when('$step', {
      is: FormStep.AccountDetails,
      then: (schema) => schema.required('Last name is required'),
    }),
  dateOfBirth: Yup.date()
    .nullable()
    .when('$step', {
      is: FormStep.AccountDetails,
      then: (schema) => schema.required('Date of birth is required'),
    }),
  phoneNumber: Yup.string()
    .trim()
    .optional()
    .when('$step', {
      is: FormStep.AccountDetails,
      then: (schema) =>
        schema.test('invalid-phone-number', 'Invalid phone number', (value) => {
          if (value && !isValidPhoneNumber(value)) return false;
          return true;
        }),
    }),
  gender: Yup.string().when('$step', {
    is: FormStep.AccountDetails,
    then: (schema) => schema.required('Gender is required'),
  }),
  companyName: Yup.string()
    .trim()
    .when(['$step', 'accountType'], {
      is: (step: FormStep, accountType: UserAccountType) =>
        step === FormStep.AccountDetails &&
        accountType === UserAccountType.Business,
      then: (schema) => schema.required('Company name is required'),
    }),
  password: Yup.string().when('$step', {
    is: FormStep.Security,
    then: (schema) =>
      schema
        .trim('Do not use spaces')
        .strict()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
  }),
  confirmPassword: Yup.string().when('$step', {
    is: FormStep.Security,
    then: (schema) =>
      schema
        .trim('Do not use spaces')
        .strict()
        .required('Confirm password is required')
        .test(
          'equal-passwords',
          'Passwords must be equal',
          (value, context) => context.parent.password === value
        ),
  }),
});
