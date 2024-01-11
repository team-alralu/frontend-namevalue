import { RegistrationContext } from '@registration/context/registrationContext';
import type { RegistrationStep } from '@/registration/types';

interface FunnelProps {
  children: React.ReactNode;
  setStep: () => void;
}
export const RegistrationFunnelProviderMock = ({ children, setStep }: FunnelProps) => {
  const mockedDispatcher = {
    dispatch: jest.fn(),
    setStep,
    state: { mbti: '', name: '', characters: [], likeability: 0, review: '' },
    step: 'name' as RegistrationStep
  };
  return <RegistrationContext.Provider value={mockedDispatcher}>{children}</RegistrationContext.Provider>;
};
