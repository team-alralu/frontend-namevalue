'use client';

import { useTheme } from '@emotion/react';
import { Text } from './Text';
import { getColorFromColorScheme, getInvertColor } from '../utils/color';
import { createBaseStyle, createVariantStyle } from '../styles/buttonStyle';
import { Size, ColorScheme, ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: Size;
  variant?: ButtonVariant;
  as?: React.ElementType;
  colorScheme?: ColorScheme;
  width?: string;
}

export const Button = ({
  children,
  width,
  size = 'md',
  variant = 'solid',
  as = 'button',
  colorScheme = 'primary',
  ...buttonProps
}: ButtonProps) => {
  const { colors } = useTheme();
  const color = getColorFromColorScheme(colorScheme);
  const baseStyle = createBaseStyle(colors.border, width);
  const variantStyle = createVariantStyle(variant, color);

  return (
    <button type="button" css={[baseStyle, variantStyle]} {...buttonProps}>
      <Text align="center" size={size}>
        {children}
      </Text>
    </button>
  );
};
