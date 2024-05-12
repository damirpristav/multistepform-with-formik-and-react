import { InputHTMLAttributes, useState } from 'react';
import { useField } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const PasswordInput = ({ label, name, ...props }: Props) => {
  const [isHidden, setIsHidden] = useState(true);
  const [field, meta] = useField(name);

  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <div className="password-input">
        <input
          id={name}
          name={name}
          value={field.value}
          onChange={field.onChange}
          type={isHidden ? 'password' : 'text'}
          {...props}
        />
        <button
          type="button"
          className="icon"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>
      {meta.error && meta.touched && (
        <p className="form-input__error">{meta.error}</p>
      )}
    </div>
  );
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
