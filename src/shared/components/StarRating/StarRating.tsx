import { Star } from 'phosphor-react-native';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { Colors, Primitive, Spacing } from '../../constants';

export type StarRatingSize = 'sm' | 'md' | 'lg';

export interface StarRatingProps {
  /** 현재 별점 (0~max) */
  value: number;
  /** 최대 별 개수 (기본 5) */
  max?: number;
  /** 크기 */
  size?: StarRatingSize;
  /** 읽기 전용 */
  readonly?: boolean;
  /** 값 변경 */
  onChange?: (value: number) => void;
  style?: StyleProp<ViewStyle>;
}

const SIZE_MAP: Record<StarRatingSize, number> = {
  sm: 16,
  md: 24,
  lg: 48,
};

/**
 * StarRating — 별점 평가
 * 참조: docs/LAYOUT_PATTERNS.md (Pattern 5 · Star Rating Card)
 * - 기본 48px (터치 편의)
 * - 빈 별 Gray[200], 찬 별 Warning
 */
export function StarRating({
  value,
  max = 5,
  size = 'lg',
  readonly = false,
  onChange,
  style,
}: StarRatingProps) {
  const px = SIZE_MAP[size];
  const gap = size === 'lg' ? Spacing[2] : Spacing[1];

  return (
    <View style={[styles.row, { gap }, style]}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < value;
        const node = (
          <Star
            size={px}
            weight="fill"
            color={filled ? Colors.status.warning : Primitive.gray[200]}
          />
        );
        if (readonly) return <View key={i}>{node}</View>;
        return (
          <Pressable
            key={i}
            onPress={() => onChange?.(i + 1)}
            hitSlop={6}
            accessibilityRole="button"
            accessibilityLabel={`${i + 1}점`}
          >
            {node}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
