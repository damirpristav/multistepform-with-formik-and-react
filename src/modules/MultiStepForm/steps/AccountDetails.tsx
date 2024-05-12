import {
  RadioGroup,
  Input,
  DatePicker,
  PhoneNumberInput,
} from '../../../components';
import { UserAccountType } from '../types';
import { StepContent } from './StepContent';

export const AccountDetails = ({ accountType }: Props) => {
  return (
    <StepContent title="Account details" subtitle="Enter your information">
      <Input name="firstName" label="First name" />
      <Input name="lastName" label="Last name" />
      <DatePicker name="dateOfBirth" label="Date of birth" />
      <PhoneNumberInput name="phoneNumber" label="Phone number" />
      {accountType === UserAccountType.Business && (
        <Input name="companyName" label="Company name" />
      )}
      <RadioGroup
        label="Gender"
        name="gender"
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
    </StepContent>
  );
};

type Props = {
  accountType: UserAccountType | '';
};
