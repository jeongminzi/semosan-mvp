/**
 * SEMOSAN Typography System
 *
 * 참조: docs/CLAUDE_CODE_BRIEF.md
 * - Font: Pretendard (한글/영문 통일)
 * - Weight: Medium(500) · Semibold(600) · Bold(700) 만 사용
 * - Scale: 12, 14, 16, 18, 20, 24, 28, 32, 40, 48 (8px 기반)
 *
 * 절대 다른 폰트/weight 쓰지 말 것.
 */

export const FontFamily = {
  pretendard: 'Pretendard',
  mono: 'Menlo', // 코드/숫자 표시용 (선택적)
} as const;

export const FontWeight = {
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const FontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
} as const;

export const LineHeight = {
  tight: 1.25, // 제목
  snug: 1.375,
  normal: 1.5, // 본문
  relaxed: 1.625,
  loose: 1.8, // 설명
} as const;

export const LetterSpacing = {
  tight: -0.02,
  normal: 0,
  wide: 0.02,
} as const;

/**
 * Typography Presets — 미리 정의된 텍스트 스타일
 * 화면에서는 이 preset을 사용 (FontSize/FontWeight 직접 조합 X)
 */
export const Typography = {
  // Display — 큰 제목 (히어로 등)
  display: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize['6xl'], // 48
    fontWeight: FontWeight.bold,
    lineHeight: FontSize['6xl'] * LineHeight.tight,
    letterSpacing: LetterSpacing.tight,
  },

  // Heading — 섹션/페이지 타이틀
  h1: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize['4xl'], // 32
    fontWeight: FontWeight.bold,
    lineHeight: FontSize['4xl'] * LineHeight.tight,
    letterSpacing: LetterSpacing.tight,
  },
  h2: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize['3xl'], // 28
    fontWeight: FontWeight.bold,
    lineHeight: FontSize['3xl'] * LineHeight.tight,
  },
  h3: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize['2xl'], // 24
    fontWeight: FontWeight.semibold,
    lineHeight: FontSize['2xl'] * LineHeight.snug,
  },
  h4: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.xl, // 20
    fontWeight: FontWeight.semibold,
    lineHeight: FontSize.xl * LineHeight.snug,
  },
  h5: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.lg, // 18
    fontWeight: FontWeight.semibold,
    lineHeight: FontSize.lg * LineHeight.snug,
  },

  // Body — 본문
  bodyLg: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.lg, // 18
    fontWeight: FontWeight.medium,
    lineHeight: FontSize.lg * LineHeight.normal,
  },
  body: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.base, // 16
    fontWeight: FontWeight.medium,
    lineHeight: FontSize.base * LineHeight.normal,
  },
  bodySm: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.sm, // 14
    fontWeight: FontWeight.medium,
    lineHeight: FontSize.sm * LineHeight.normal,
  },

  // Caption — 캡션, 라벨
  caption: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.xs, // 12
    fontWeight: FontWeight.medium,
    lineHeight: FontSize.xs * LineHeight.normal,
  },

  // Button
  buttonLg: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.base, // 16
    fontWeight: FontWeight.semibold,
    lineHeight: FontSize.base * LineHeight.tight,
  },
  button: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.sm, // 14
    fontWeight: FontWeight.semibold,
    lineHeight: FontSize.sm * LineHeight.tight,
  },
  buttonSm: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.xs, // 12
    fontWeight: FontWeight.semibold,
    lineHeight: FontSize.xs * LineHeight.tight,
  },

  // Label — 폼 라벨, 메뉴 이름
  label: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.sm, // 14
    fontWeight: FontWeight.semibold,
    lineHeight: FontSize.sm * LineHeight.tight,
  },
} as const;

export type TypographyPreset = keyof typeof Typography;
