import React, { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { RegistrationAction } from '../store';
import type { RegistrationStep, RegistrationFormData } from '../types';

export type RegistrationContextType = {
  state: RegistrationFormData;
  step: RegistrationStep;
  setStep: Dispatch<SetStateAction<RegistrationStep>>;
  dispatch: Dispatch<RegistrationAction>;
} | null;

export const RegistrationContext = createContext<RegistrationContextType>(null);
