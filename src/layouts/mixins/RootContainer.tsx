'use client';

import styled from '@emotion/styled';

export const RootContainer = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;
  max-width: 960px;
  background-color: ${({ theme }) => theme.colors.neutral};
`;
