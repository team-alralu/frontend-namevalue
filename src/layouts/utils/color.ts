import { Colors } from '../colors';
import type { ColorScheme } from '../types';

export const getInvertColor = (color: string) => {
  const hexValue = color.replace('#', '');
  const rgbValues = hexValue.match(/.{1,2}/g)?.map((value) => parseInt(value, 16)) ?? [];
  const brightness = (rgbValues[0] + rgbValues[1] + rgbValues[2]) / 3;
  if (brightness < 200) {
    return Colors.white;
  }
  return Colors.font;
};

export const getColorFromColorScheme = (color: ColorScheme): string => Colors[color];

export const getTokenFromColor = (color: string): ColorScheme => {
  const colorToken = Object.entries(Colors).find(([, value]) => value === color);
  if (colorToken) {
    return colorToken[0] as ColorScheme;
  }
  return 'neutral';
};
