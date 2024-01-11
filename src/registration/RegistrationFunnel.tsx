'use client';

import styled from '@emotion/styled';
import { InputName, SelectMbti, SelectCharacter, ChooseLikeability, Review } from './components';
import { useRegistrationFunnel } from './hooks/useRegistrationFunnel';
import { Mbti } from '@/app/types';

export const RegistrationFunnel = () => {
  const { RegistrationStep, onNext, state, dispatch } = useRegistrationFunnel();
  return (
    <FunnelContainer>
      <RegistrationStep name="name">
        <InputName
          onNext={() => onNext('mbti')}
          dispatchName={(name: string) => dispatch({ type: 'SET_NAME', payload: name })}
        />
      </RegistrationStep>
      <RegistrationStep name="mbti">
        <SelectMbti
          onNext={() => onNext('characters')}
          userName={state.name}
          dispatchMbti={(mbti: Mbti | null) => dispatch({ type: 'SET_MBTI', payload: mbti })}
        />
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
    </FunnelContainer>
  );
};

const FunnelContainer = styled.section`
  height: 100%;
`;
