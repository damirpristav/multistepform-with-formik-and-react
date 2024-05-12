import PhoneInput from 'react-phone-number-input';
import { useField, useFormikContext } from 'formik';
import 'react-phone-number-input/style.css';

export const PhoneNumberInput = ({ label, name }: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <PhoneInput
        value={field.value}
        onChange={(value) => setFieldValue(name, value)}
      />
      {meta.error && meta.touched && (
        <p className="form-input__error">{meta.error}</p>
      )}
    </div>
  );
};

type Props = {
  label: string;
  name: string;
};
