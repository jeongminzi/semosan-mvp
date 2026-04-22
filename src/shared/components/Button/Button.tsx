import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  BorderRadius,
  Colors,
  ComponentHeight,
  Opacity,
  Spacing,
  Typography,
} from '../../constants';

export type ButtonVariant =
  | 'primary'
  | 'weak'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<PressableProps, 'style' | 'children'> {
  /** 버튼 스타일 변형 */
  variant?: ButtonVariant;
  /** 버튼 크기 (sm: 32px, md: 40px, lg: 48px) */
  size?: ButtonSize;
  /** 너비를 부모에 가득 채울지 */
  fullWidth?: boolean;
  /** 비활성화 */
  disabled?: boolean;
  /** 로딩 상태 */
  loading?: boolean;
  /** 버튼 라벨 */
  children: React.ReactNode;
  /** 왼쪽 아이콘 (Phosphor Icon, weight="fill" 권장) */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  /** 추가 스타일 */
  style?: StyleProp<ViewStyle>;
}

/**
 * SEMOSAN Button
 *
 * 참조: docs/LAYOUT_PATTERNS.md, docs/CLAUDE_CODE_BRIEF.md
 * - Height: 32 (sm) / 40 (md) / 48 (lg)
 * - Radius: 8 (sm) / 12 (md) / 16 (lg)
 * - Icons: Phosphor (fill weight 전용)
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  leftIcon,
  rightIcon,
  style,
  ...pressableProps
}: ButtonProps) {
  const isInactive = disabled || loading;
  const container = CONTAINER_STYLES[variant];
  const textStyle = TEXT_STYLES[variant];
  const sizeStyle = SIZE_STYLES[size];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isInactive, busy: loading }}
      disabled={isInactive}
      style={({ pressed }) => [
        styles.base,
        container,
        sizeStyle.container,
        fullWidth && styles.fullWidth,
        pressed && !isInactive && { opacity: Opacity.pressed },
        isInactive && styles.disabled,
        style,
      ]}
      {...pressableProps}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={textStyle.color as string}
        />
      ) : (
        <View style={styles.inner}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          <Text style={[sizeStyle.text, textStyle]} numberOfLines={1}>
            {children}
          </Text>
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </Pressable>
  );
}

// -----------------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------------

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  fullWidth: {
    alignSelf: 'stretch',
    width: '100%',
  },
  disabled: {
    opacity: Opacity.disabled,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing[2],
  },
  iconLeft: {
    marginRight: 0,
  },
  iconRight: {
    marginLeft: 0,
  },
});

const CONTAINER_STYLES: Record<ButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: Colors.interactive.primary,
    borderWidth: 0,
  },
  weak: {
    backgroundColor: Colors.interactive.weak,
    borderWidth: 0,
  },
  secondary: {
    backgroundColor: Colors.interactive.secondary,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.interactive.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  danger: {
    backgroundColor: Colors.status.danger,
    borderWidth: 0,
  },
};

const TEXT_STYLES: Record<ButtonVariant, { color: string }> = {
  primary: { color: Colors.text.inverse },
  weak: { color: Colors.interactive.weakText },
  secondary: { color: Colors.text.primary },
  outline: { color: Colors.interactive.primary },
  ghost: { color: Colors.text.primary },
  danger: { color: Colors.text.inverse },
};

const SIZE_STYLES = {
  sm: {
    container: {
      height: ComponentHeight.buttonSm, // 32
      paddingHorizontal: Spacing[3], // 12
      borderRadius: BorderRadius.md, // 12 (한 단계 ↑)
    } satisfies ViewStyle,
    text: Typography.buttonSm,
  },
  md: {
    container: {
      height: ComponentHeight.buttonMd, // 40
      paddingHorizontal: Spacing[4], // 16
      borderRadius: BorderRadius.lg, // 16 (한 단계 ↑)
    } satisfies ViewStyle,
    text: Typography.button,
  },
  lg: {
    container: {
      height: ComponentHeight.buttonLg, // 48
      paddingHorizontal: Spacing[5], // 20
      borderRadius: BorderRadius.lg, // 16
    } satisfies ViewStyle,
    text: Typography.buttonLg,
  },
};

export default Button;
