import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { FormStep } from './types';

type MultiStepFormContextProps = {
  step: FormStep;
  isCompleted: boolean;
  isLoading: boolean;
  onStepChange: (step: FormStep) => void;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const MultiStepFormContext = createContext<MultiStepFormContextProps>(
  undefined!
);

export const MultiStepFormProvider = ({ children }: Props) => {
  const [step, setStep] = useState<FormStep>(FormStep.Intro);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onStepChange = (newStep: FormStep) => {
    setStep(newStep);
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        step,
        isCompleted,
        isLoading,
        onStepChange,
        setIsCompleted,
        setIsLoading,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

type Props = {
  children?: JSX.Element;
};
