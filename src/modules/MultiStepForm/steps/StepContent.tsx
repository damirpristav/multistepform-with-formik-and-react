import { ReactNode } from "react";
import { useMultiStepForm } from "../../../hooks";
import { STEPS_ORDER } from "../defaults";
import { Progress } from './Progress';

export const StepContent = ({ title, subtitle, prevButtonLabel, nextButtonLabel, children }: Props) => {
  const { step, onStepChange } = useMultiStepForm();

  const onPrevClick = () => {
    onStepChange(STEPS_ORDER[STEPS_ORDER.indexOf(step) - 1]);
  };

  return (
    <div className="step-content">
      <Progress step={STEPS_ORDER.indexOf(step)} title={title} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="step-content__fields">{children}</div>
      <div className="steps-navigation">
        <button type="button" onClick={onPrevClick} className="button">
          {prevButtonLabel || <span>&larr; prev</span>}
        </button>
        <button type="submit" className="button">
          {nextButtonLabel || <span>next &rarr;</span>}
        </button>
      </div>
    </div>
  );
};

type Props = {
  children: ReactNode;
  title: string;
  subtitle: string;
  prevButtonLabel?: string;
  nextButtonLabel?: string;
};
