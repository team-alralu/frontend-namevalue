'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Mbti } from '@/app/types';
import { Text } from '@layouts/components';

interface MbtiCardProps {
  mbti: Mbti;
  accent?: boolean;
}

export const MbtiCardItem = ({ mbti, accent }: MbtiCardProps) => {
  const MbtiCardStyle = accent ? AccentMbtiCard : NormalMbtiCard;
  return (
    <MbtiCardStyle>
      <Text size="lg" align="center">
        {mbti}
      </Text>
    </MbtiCardStyle>
  );
};

const baseStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
`;

const NormalMbtiCard = styled.li`
  ${baseStyle};
  background-color: ${({ theme }) => theme.colors.tertiary};
  p {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const AccentMbtiCard = styled.li`
  ${baseStyle};
  background-color: ${({ theme }) => theme.colors.secondary};
  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
