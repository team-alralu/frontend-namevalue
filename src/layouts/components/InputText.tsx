import { useId } from 'react';
import { HiddenLabel } from '../mixins/Hidden';
import { baseStyle, createInputTextStyle } from '../styles/inputTextStyle';
import { createFontSizeStyle } from '../styles/typography';
import type { Size, ColorScheme, FormVariants } from '../types';

interface InputTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  colorScheme?: ColorScheme;
  variant?: FormVariants;
  size?: Omit<Size, 'xl' | '2xl'>;
}

export const InputText = ({
  variant = 'outlined',
  colorScheme = 'primary',
  size = 'md',
  ...inputTextProps
}: InputTextProps) => {
  const tempInputId = useId();
  const inputId = inputTextProps.id ?? tempInputId;
  const inputName = inputTextProps.name ?? 'Text Input';
  const textSize = createFontSizeStyle(size as Size);
  const inputTextStyle = createInputTextStyle(variant, colorScheme);
  return (
    <>
      <HiddenLabel htmlFor={inputId}>{inputName}</HiddenLabel>
      <input
        type="text"
        id={inputId}
        name={inputName}
        css={[baseStyle, inputTextStyle, textSize]}
        {...inputTextProps}
      />
    </>
  );
};
