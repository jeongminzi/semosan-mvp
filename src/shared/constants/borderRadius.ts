/**
 * SEMOSAN Border Radius
 *
 * 참조: docs/CLAUDE_CODE_BRIEF.md
 */

export const BorderRadius = {
  none: 0,
  sm: 4,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999, // 완전 원형/알약 모양
} as const;

export type BorderRadiusToken = keyof typeof BorderRadius;
