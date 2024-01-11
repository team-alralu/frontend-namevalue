'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { RegistrationContext } from '../context/registrationContext';
import type { ReactNode } from 'react';
import type { RegistrationStep } from '../types';

interface StepProps {
  children: ReactNode;
  name: RegistrationStep;
}

export const useRegistrationFunnel = () => {
  const context = useContext(RegistrationContext);

  if (!context) {
    throw new Error('RegistrationContext를 찾을 수 없습니다.');
  }
  const { state, dispatch, step, setStep } = context;

  const onPrev = (nextStep: RegistrationStep) => {
    setStep(nextStep);
  };

  const onNext = (nextStep: RegistrationStep) => {
    setStep(nextStep);
  };

  const RegistrationStep = ({ children, name }: StepProps) => {
    const router = useRouter();

    if (name === 'complete') {
      router.replace('/namevalue');
      return;
    }

    if (name !== step) {
      return null;
    }

    return <>{children}</>;
  };

  return { RegistrationStep, onNext, onPrev, state, dispatch };
};
