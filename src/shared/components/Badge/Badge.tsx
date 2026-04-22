import React from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import {
  BorderRadius,
  Colors,
  FontSize,
  FontWeight,
  Primitive,
  Spacing,
} from '../../constants';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'weak'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'dark';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** pill 모양 (완전 둥근 모서리) */
  pill?: boolean;
  leftIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

/**
 * Badge — 작은 상태/카테고리 라벨
 * 참조: docs/LAYOUT_PATTERNS.md (Pattern 5 · Pattern 8)
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  pill = false,
  leftIcon,
  style,
}: BadgeProps) {
  const v = VARIANT_STYLES[variant];
  const s = SIZE_STYLES[size];

  return (
    <View
      style={[
        styles.base,
        s.container,
        { backgroundColor: v.bg, borderRadius: pill ? BorderRadius.full : s.container.borderRadius },
        style,
      ]}
    >
      {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
      <Text style={[s.text, { color: v.fg }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: Spacing[1],
  },
  icon: { marginRight: 0 },
});

const VARIANT_STYLES: Record<BadgeVariant, { bg: string; fg: string }> = {
  default: { bg: Primitive.gray[50], fg: Colors.text.secondary },
  primary: { bg: Colors.interactive.primary, fg: Colors.text.inverse },
  weak: { bg: Colors.interactive.weak, fg: Colors.interactive.weakText }, // primary[50]
  success: { bg: Primitive.status.success.light, fg: Primitive.status.success.dark }, // success[50]
  warning: { bg: Primitive.status.warning.light, fg: Primitive.status.warning.dark }, // warning[50]
  danger: { bg: Primitive.status.danger.light, fg: Primitive.status.danger.dark }, // danger[50]
  info: { bg: Primitive.status.info.light, fg: Primitive.status.info.dark }, // info[50]
  dark: { bg: Primitive.gray[900], fg: Colors.text.inverse },
};

const SIZE_STYLES = {
  sm: {
    container: {
      height: 20,
      paddingHorizontal: Spacing[2],
      borderRadius: BorderRadius.sm,
    } satisfies ViewStyle,
    text: {
      fontSize: FontSize.xs,
      fontWeight: FontWeight.semibold as '600',
      lineHeight: FontSize.xs * 1.25,
    },
  },
  md: {
    container: {
      height: 24,
      paddingHorizontal: Spacing[3],
      borderRadius: BorderRadius.base,
    } satisfies ViewStyle,
    text: {
      fontSize: FontSize.xs,
      fontWeight: FontWeight.semibold as '600',
      lineHeight: FontSize.xs * 1.25,
    },
  },
};
