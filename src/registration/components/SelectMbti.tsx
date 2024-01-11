'use client';

import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Heading, Button, Stack } from '@layouts/components';
import { MbtiCardItem } from './MbtiCardItem';
import { MbtiList } from '../constants';
import type { Mbti } from '../../app/types';

interface SelectMbtiProps {
  userName: string;
  onNext: () => void;
  dispatchMbti: (mbti: Mbti | null) => void;
}

export const SelectMbti = ({ userName, onNext, dispatchMbti }: SelectMbtiProps) => {
  const [selectedMbti, setMbti] = useState<Mbti | null>(null);
  const isAvailableNextButton = selectedMbti === null;

  const handleMbtiSelect = (isMbtiMatched: boolean, targetMbti: Mbti) => {
    if (isMbtiMatched) {
      setMbti(null);
      return;
    }
    setMbti(targetMbti);
  };

  const handleSubmitMbti = (targetMbti: Mbti | null) => {
    if (targetMbti) {
      dispatchMbti(targetMbti);
    } else {
      dispatchMbti(null);
    }
    onNext();
  };

  return (
    <Container>
      <HeadingWrapper>
        <Heading size="lg">{userName}님의 MBTI는 무엇인가요?</Heading>
      </HeadingWrapper>
      <MbtiSelectContainer>
        {MbtiList.map(({ accent, mbti }) => {
          const isMbtiMatched = mbti === selectedMbti;
          return (
            <button
              key={mbti}
              css={createMbtiCardStyle(isMbtiMatched)}
              type="button"
              onClick={() => handleMbtiSelect(isMbtiMatched, mbti)}
            >
              <MbtiCardItem accent={accent} mbti={mbti} />
            </button>
          );
        })}
      </MbtiSelectContainer>
      <Stack spacing={16} style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)' }}>
        <Button variant="outline" size="lg" width="288px" onClick={() => handleSubmitMbti(null)}>
          잘 모르겠어요.
        </Button>
        <Button size="lg" width="288px" disabled={isAvailableNextButton} onClick={() => handleSubmitMbti(selectedMbti)}>
          선택 완료
        </Button>
      </Stack>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const HeadingWrapper = styled.div`
  padding-top: 48px;
`;

const createMbtiCardStyle = (selected: boolean) => css`
  margin: 0;
  padding: 0;
  border-style: none;
  background-color: transparent;
  li {
    ${selected && 'border: 2px solid #EC5BBC; '}
  }
`;

const MbtiSelectContainer = styled.ul`
  margin: 0 auto;
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
  max-width: 480px;
`;
