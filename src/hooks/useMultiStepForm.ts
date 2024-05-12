import { useContext } from 'react';
import { MultiStepFormContext } from '../modules/MultiStepForm';

export const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
