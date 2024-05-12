import { FiCheckCircle } from 'react-icons/fi';

export const RegistrationCompleted = () => {
  return (
    <div className="registration-completed">
      <FiCheckCircle className="registration-completed__icon" />
      <h2>Registration completed!</h2>
      <p>Please check your email to activate your account</p>
      <button type="button" className="button">
        Login
      </button>
    </div>
  );
};
