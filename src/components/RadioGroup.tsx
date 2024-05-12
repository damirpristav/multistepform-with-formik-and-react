import { useField } from 'formik';

export const RadioGroup = ({ label, name, options }: Props) => {
  const [field, meta] = useField(name);

  return (
    <div className="form-radio">
      <p className="label">{label}</p>
      <div className="options">
        {options.map((radio) => (
          <label key={radio.value} className="radio">
            <input
              name={name}
              value={radio.value}
              onChange={field.onChange}
              type="radio"
              checked={field.value === radio.value}
            />
            <span>{radio.label}</span>
          </label>
        ))}
      </div>
      {meta.error && meta.touched && (
        <p className="form-input__error">{meta.error}</p>
      )}
    </div>
  );
};

type Props = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
};
