import ReactDatePicker, { DatePickerProps } from 'react-date-picker';
import { useField, useFormikContext } from 'formik';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export const DatePicker = ({ label, name, ...props }: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <div className="form-datepicker">
      <label htmlFor={name}>{label}</label>
      <ReactDatePicker
        value={field.value}
        onChange={(value) => setFieldValue(name, value)}
        {...props}
      />
      {meta.error && meta.touched && (
        <p className="form-input__error">{meta.error}</p>
      )}
    </div>
  );
};

interface Props extends DatePickerProps {
  label: string;
  name: string;
}
