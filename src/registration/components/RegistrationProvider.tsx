'use client';

import { RegistrationContext } from '../context/registrationContext';
import { registrationStore } from '../store';
import { RegistrationStep } from '../types';
import { useReducer, type ReactNode, useState } from 'react';

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<RegistrationStep | 'complete'>('name');
  const [state, dispatch] = useReducer(registrationStore, {
    mbti: '',
    name: '',
    characters: [],
    likeability: 0,
    review: ''
  });
  return (
    <RegistrationContext.Provider value={{ state, dispatch, step, setStep }}>{children}</RegistrationContext.Provider>
  );
};
