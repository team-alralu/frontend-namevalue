import { css } from '@emotion/react';
import { getInvertColor, convertHexToRgba } from '../utils/color';
import type { ButtonVariant } from '../types';

export const createBaseStyle = (borderColor: string, width?: string) => {
  return css`
    margin: 0;
    padding: 0 16px;
    width: ${width ? width : 'fit-content'};
    height: 48px;
    min-width: 128px;
    border: 1px solid ${borderColor};
    border-radius: 32px;
    background-color: transparent;
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
};

export const createVariantStyle = (variant: ButtonVariant, color: string) => {
  switch (variant) {
    case 'ghost':
      return css`
        width: auto;
        height: auto;
        padding: 0;
        background-color: transparent;
        border-style: none;
      `;

    case 'outline':
      return css`
        background-color: '#ffffff';
        border: 1px solid ${color};
        p {
          color: ${color};
        }
        :hover {
          background-color: ${convertHexToRgba(color, 0.1)};
        }
      `;

    default:
      return css`
        background-color: ${color};
        p {
          color: ${getInvertColor(color)};
        }
      `;
  }
};
