import { FormStep } from '../types';

export const Progress = ({ step, title }: Props) => {
  return (
    <div className="steps-progress">
      <p>
        <span>step {step}</span> - {title}
      </p>
      <div className="steps-progress__bars">
        {Object.values(FormStep).map((value, index) =>
          value !== FormStep.Intro ? (
            <div key={index} className={step >= index ? 'filled' : ''} />
          ) : null
        )}
      </div>
    </div>
  );
};

type Props = {
  step: number;
  title: string;
};
