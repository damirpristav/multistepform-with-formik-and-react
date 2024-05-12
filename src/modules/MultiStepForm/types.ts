export interface Values {
  email: string;
  accountType: UserAccountType | '';
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  phoneNumber: string;
  gender: string;
  companyName: string;
  password: string;
  confirmPassword: string;
}

export enum UserAccountType {
  Personal = 'personal',
  Business = 'business',
}

export enum FormStep {
  Intro = 'intro',
  AccountType = 'accountType',
  AccountDetails = 'accountDetails',
  Security = 'security',
}
