'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { QuestionLottie } from '@layouts/lotties/Question';
import { InputText, Stack, Button, Heading } from '@layouts/components';

interface InputNameProps {
  onNext: () => void;
  dispatchName: (name: string) => void;
}

export const InputName = ({ onNext, dispatchName }: InputNameProps) => {
  const [name, setName] = useState<string>('');
  const handleSubmitName = () => {
    if (name.length) {
      dispatchName(name);
      onNext();
      return;
    }
    alert('이름을 입력해주세요.');
  };

  const isAvailableNextButton = name.length < 2;
  return (
    <Container onSubmit={handleSubmitName}>
      <HeadingWrapper>
        <Heading size="lg">지금 생각나는 사람이 있으신가요?</Heading>
      </HeadingWrapper>
      <InputNameWrapper>
        <InputText
          variant="flushed"
          size="lg"
          aria-labelledby="Name Input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputNameWrapper>
      <Stack justify="center" style={{ height: '70%' }}>
        <QuestionLottie />
      </Stack>
      <ButtonWrapper>
        <Button
          type="submit"
          size="lg"
          disabled={isAvailableNextButton}
          onClick={handleSubmitName}
          variant="solid"
          width="288px"
        >
          입력 완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.form`
  height: 100%;
  position: relative;
`;

const HeadingWrapper = styled.div`
  padding-top: 48px;
`;

const InputNameWrapper = styled.div`
  padding: 12px 0;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 48px;
  transform: translateX(-50%);
`;
