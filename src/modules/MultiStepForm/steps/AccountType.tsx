import { RadioGroup } from '../../../components';
import { UserAccountType } from '../types';
import { StepContent } from './StepContent';

export const AccountType = () => {
  return (
    <StepContent
      title="Account type"
      subtitle="Choose your account type. You can change this later in your profile."
    >
      <RadioGroup
        label="Account type"
        name="accountType"
        options={[
          { label: 'Personal', value: UserAccountType.Personal },
          { label: 'Business', value: UserAccountType.Business },
        ]}
      />
    </StepContent>
  );
};
