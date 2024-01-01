'use client';

import { InputName, SelectMbti, SelectCharacter, ChooseLikeability, Review } from './components';
import { useRegistrationFunnel } from './hooks/useRegistrationFunnel';

export const RegistrationFunnel = () => {
  const { RegistrationStep, onNext, state, dispatch } = useRegistrationFunnel();
  return (
    <section>
      <RegistrationStep name="name">
        <InputName onNext={() => onNext('mbti')} />
      </RegistrationStep>
      <RegistrationStep name="mbti">
        <SelectMbti />
      </RegistrationStep>
      <RegistrationStep name="characters">
        <SelectCharacter />
      </RegistrationStep>
      <RegistrationStep name="likeability">
        <ChooseLikeability />
      </RegistrationStep>
      <RegistrationStep name="review">
        <Review />
      </RegistrationStep>
    </section>
  );
};
