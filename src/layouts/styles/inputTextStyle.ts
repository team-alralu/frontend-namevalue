import { css } from '@emotion/react';
import { getColorFromColorScheme } from '../utils/color';
import type { FormVariants, ColorScheme } from '../types';

export const baseStyle = css`
  margin: 0;
  padding: 0 8px;
  width: fit-content;
  height: 28px;
  background-color: transparent;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  :focus {
    outline: none;
  }
`;

export const createInputTextStyle = (variant: FormVariants, colorScheme: ColorScheme = 'primary') => {
  const color = getColorFromColorScheme(colorScheme);
  if (variant === 'outlined') {
    return css`
      border: 2px solid ${color};
      border-radius: 4px;
    `;
  }
  return css`
    border: none;
    border-bottom: 2px solid ${color};
  `;
};
