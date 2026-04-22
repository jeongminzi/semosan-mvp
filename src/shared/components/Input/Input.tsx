import React, { forwardRef, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  BorderRadius,
  Colors,
  ComponentHeight,
  Spacing,
  Typography,
} from '../../constants';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  helperText?: string;
  errorText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

// React Native Web에서 브라우저 기본 파란 outline 제거
const webNoOutline = Platform.select({
  web: { outlineWidth: 0, outlineStyle: 'none' as const },
  default: {},
}) as any;

/**
 * Input — 텍스트 입력 필드
 * - Height 48, borderWidth 1.5
 * - Focus: border color → text.primary (검정)
 * - Error: border color → danger
 */
export const Input = forwardRef<TextInput, InputProps>(function Input(
  {
    label,
    helperText,
    errorText,
    leftIcon,
    rightIcon,
    disabled = false,
    containerStyle,
    onFocus,
    onBlur,
    ...textInputProps
  },
  ref,
) {
  const [focused, setFocused] = useState(false);
  const hasError = !!errorText;

  const borderColor = hasError
    ? Colors.border.error
    : focused
      ? Colors.text.primary
      : Colors.border.default;

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputRow,
          { borderColor },
          disabled && styles.disabled,
        ]}
      >
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <TextInput
          ref={ref}
          style={[styles.input, webNoOutline]}
          editable={!disabled}
          placeholderTextColor={Colors.text.placeholder}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...textInputProps}
        />
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>

      {(helperText || errorText) && (
        <Text style={[styles.helper, hasError && styles.error]}>
          {errorText || helperText}
        </Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    gap: Spacing[2],
    alignSelf: 'stretch',
  },
  label: {
    ...Typography.label,
    color: Colors.text.primary,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ComponentHeight.input, // 48
    paddingHorizontal: Spacing[4],
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    backgroundColor: Colors.background.primary,
    gap: Spacing[2],
  },
  disabled: {
    backgroundColor: Colors.background.tertiary,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    ...Typography.body,
    color: Colors.text.primary,
    padding: 0,
  },
  icon: {
    justifyContent: 'center',
  },
  helper: {
    ...Typography.caption,
    color: Colors.text.secondary,
  },
  error: {
    color: Colors.text.error,
  },
});
