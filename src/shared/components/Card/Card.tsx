import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  BorderRadius,
  Colors,
  Opacity,
  Primitive,
  Shadow,
  Spacing,
} from '../../constants';

export type CardVariant = 'default' | 'outlined' | 'filled' | 'elevated';

export interface CardProps extends Omit<PressableProps, 'style' | 'children'> {
  children: React.ReactNode;
  variant?: CardVariant;
  /** 내부 padding 제거 (이미지 등 풀블리드 시) */
  noPadding?: boolean;
  /** onPress 지정 시 자동으로 Pressable 렌더링 */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

/**
 * Card — 기본 컨테이너
 * 참조: docs/CLAUDE_CODE_BRIEF.md, docs/LAYOUT_PATTERNS.md
 */
export function Card({
  children,
  variant = 'default',
  noPadding = false,
  onPress,
  style,
  ...pressableProps
}: CardProps) {
  const v = VARIANT_STYLES[variant];

  const content = (
    <View style={[styles.base, v, !noPadding && styles.padding]}>
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          pressed && { opacity: Opacity.pressed },
          style,
        ]}
        {...pressableProps}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={style}>{content}</View>;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: BorderRadius.lg, // 16
    overflow: 'hidden',
  },
  padding: {
    padding: Spacing[4], // 16
  },
});

const VARIANT_STYLES: Record<CardVariant, ViewStyle> = {
  default: {
    backgroundColor: Colors.background.primary,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  filled: {
    backgroundColor: Primitive.gray[50],
    borderWidth: 0,
  },
  elevated: {
    backgroundColor: Colors.background.primary,
    borderWidth: 0,
    ...Shadow.md,
  },
};
