import { Formik, Form, yupToFormErrors, validateYupSchema } from 'formik';

import { useMultiStepForm } from '../../hooks';
import { FormStep, Values } from './types';
import { defaultValues, STEPS_ORDER } from './defaults';
import {
  Intro,
  AccountType,
  AccountDetails,
  Security,
  RegistrationCompleted,
} from './steps';
import { Loader } from '../../components';
import { validationSchema } from './validationSchema';

export const MultiStepForm = () => {
  const {
    step,
    isCompleted,
    isLoading,
    onStepChange,
    setIsCompleted,
    setIsLoading,
  } = useMultiStepForm();

  if (isCompleted) {
    return <RegistrationCompleted />;
  }

  return (
    <Formik<Values>
      initialValues={defaultValues}
      validate={(values) => {
        try {
          // using this to pass step to validation schema
          validateYupSchema<Values>(values, validationSchema, true, { step });
        } catch (error) {
          return yupToFormErrors(error);
        }
        return {};
      }}
      onSubmit={(values, helpers) => {
        if (step !== FormStep.Security) {
          onStepChange(STEPS_ORDER[STEPS_ORDER.indexOf(step) + 1]);
          // reset touched after step change to avoid displaying erorrs when something is typed in one input
          helpers.setTouched({});
          return;
        }
        console.log(values);
        setIsLoading(true);
        setTimeout(() => {
          setIsCompleted(true);
          setIsLoading(false);
        }, 2000);
      }}
    >
      {({ values }) => (
        <Form className="form">
          {step === FormStep.Intro && <Intro />}
          {step === FormStep.AccountType && <AccountType />}
          {step === FormStep.AccountDetails && (
            <AccountDetails accountType={values.accountType} />
          )}
          {step === FormStep.Security && <Security />}
          {isLoading && <Loader />}
        </Form>
      )}
    </Formik>
  );
};
