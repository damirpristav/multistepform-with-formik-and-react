import { PasswordInput } from '../../../components';
import { StepContent } from './StepContent';

export const Security = () => {
  return (
    <StepContent
      title="Security"
      subtitle="Create a secure password."
      nextButtonLabel="Create account"
    >
      <PasswordInput name="password" label="Password" />
      <PasswordInput name="confirmPassword" label="Confirm password" />
    </StepContent>
  );
};
