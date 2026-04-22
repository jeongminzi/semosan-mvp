/**
 * SEMOSAN Shadows — iOS / Android 크로스 플랫폼
 *
 * 참조: docs/CLAUDE_CODE_BRIEF.md
 * React Native에서는 iOS(shadow*)와 Android(elevation)를 따로 지정해야 함.
 */

import { Platform } from 'react-native';

const shadow = (
  offsetY: number,
  radius: number,
  opacity: number,
  elevation: number,
) =>
  Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: offsetY },
      shadowOpacity: opacity,
      shadowRadius: radius,
    },
    android: {
      elevation,
    },
    default: {},
  }) ?? {};

export const Shadow = {
  none: {},
  xs: shadow(1, 2, 0.05, 1),
  sm: shadow(1, 3, 0.08, 2),
  base: shadow(2, 6, 0.1, 3),
  md: shadow(4, 10, 0.1, 5),
  lg: shadow(10, 20, 0.12, 8),
  xl: shadow(20, 30, 0.15, 12),
} as const;

export type ShadowToken = keyof typeof Shadow;
