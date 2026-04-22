import React from 'react';
import {
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
  Primitive,
  Spacing,
  Typography,
} from '../../constants';

export type ChipVariant = 'default' | 'selected' | 'weak' | 'outline';

export interface ChipProps
  extends Omit<PressableProps, 'style' | 'children'> {
  children: React.ReactNode;
  variant?: ChipVariant;
  selected?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

/**
 * Chip — 필터/태그 (가로 스크롤 리스트에 주로 사용)
 * 참조: docs/LAYOUT_PATTERNS.md (Pattern 3 · Search with Filters)
 */
export function Chip({
  children,
  variant = 'default',
  selected = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  ...pressableProps
}: ChipProps) {
  const resolved: ChipVariant = selected ? 'selected' : variant;
  const v = VARIANT_STYLES[resolved];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: v.bg, borderColor: v.border, borderWidth: v.borderWidth },
        pressed && !disabled && { opacity: Opacity.pressed },
        disabled && { opacity: Opacity.disabled },
        style,
      ]}
      {...pressableProps}
    >
      <View style={styles.inner}>
        {leftIcon && <View>{leftIcon}</View>}
        <Text style={[styles.text, { color: v.fg }]} numberOfLines={1}>
          {children}
        </Text>
        {rightIcon && <View>{rightIcon}</View>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: ComponentHeight.chip, // 36
    paddingHorizontal: Spacing[3], // 12
    borderRadius: BorderRadius.full,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[1],
  },
  text: {
    ...Typography.bodySm,
    fontWeight: Typography.bodySm.fontWeight,
  },
});

const VARIANT_STYLES: Record<ChipVariant, { bg: string; fg: string; border: string; borderWidth: number }> = {
  default: {
    bg: Primitive.gray[100],
    fg: Colors.text.primary,
    border: 'transparent',
    borderWidth: 0,
  },
  selected: {
    bg: Colors.interactive.primary,
    fg: Colors.text.inverse,
    border: Colors.interactive.primary,
    borderWidth: 0,
  },
  weak: {
    bg: Colors.interactive.weak,
    fg: Colors.interactive.weakText,
    border: 'transparent',
    borderWidth: 0,
  },
  outline: {
    bg: 'transparent',
    fg: Colors.text.primary,
    border: Colors.border.default,
    borderWidth: 1,
  },
};
