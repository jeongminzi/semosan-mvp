import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  BorderRadius,
  Colors,
  Primitive,
  Spacing,
  Typography,
} from '../../constants';

export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger';
export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps {
  /** 진행 값 (0~max) */
  value: number;
  /** 최대값 (기본 100) */
  max?: number;
  variant?: ProgressBarVariant;
  size?: ProgressBarSize;
  /** 라벨 (상단 좌측) */
  label?: string;
  /** 퍼센트 표시 (상단 우측) */
  showPercentage?: boolean;
  style?: StyleProp<ViewStyle>;
}

const HEIGHT_MAP: Record<ProgressBarSize, number> = {
  sm: 4,
  md: 8,
  lg: 12,
};

const COLOR_MAP: Record<ProgressBarVariant, string> = {
  primary: Colors.interactive.primary,
  success: Primitive.status.success.main,
  warning: Primitive.status.warning.main,
  danger: Primitive.status.danger.main,
};

/**
 * ProgressBar — 진행률 표시
 * 참조: docs/CLAUDE_CODE_BRIEF.md (트래킹 화면 진행률)
 */
export function ProgressBar({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  label,
  showPercentage = false,
  style,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(max, value));
  const pct = Math.round((clamped / max) * 100);
  const height = HEIGHT_MAP[size];
  const color = COLOR_MAP[variant];

  return (
    <View style={[styles.wrapper, style]}>
      {(label || showPercentage) && (
        <View style={styles.topRow}>
          {label && <Text style={styles.label}>{label}</Text>}
          {showPercentage && (
            <Text style={[styles.label, { color: Colors.text.primary }]}>
              {pct}%
            </Text>
          )}
        </View>
      )}
      <View
        style={[
          styles.track,
          { height, borderRadius: height / 2 },
        ]}
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max, now: clamped }}
      >
        <View
          style={[
            styles.fill,
            {
              width: `${pct}%`,
              backgroundColor: color,
              borderRadius: height / 2,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: Spacing[2],
    alignSelf: 'stretch',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    ...Typography.caption,
    color: Colors.text.secondary,
  },
  track: {
    backgroundColor: Primitive.gray[200],
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
