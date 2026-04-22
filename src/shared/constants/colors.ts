/**
 * SEMOSAN Color System
 *
 * 참조: docs/CLAUDE_CODE_BRIEF.md, docs/LAYOUT_PATTERNS.md
 * - Primary: #03B26C (등산 녹색)
 * - Gray: Cool Gray (파란빛 회색)
 * - 절대 하드코딩된 색상 사용 금지. 반드시 이 토큰을 통해 참조할 것.
 */

export const Primitive = {
  primary: {
    50: '#E6F9F1',
    100: '#BEF1D9',
    200: '#8FE5BE',
    300: '#5AD8A1',
    400: '#2CCB89',
    500: '#03B26C', // Main
    600: '#029960',
    700: '#028055',
    800: '#026A49',
    900: '#01563C',
  },

  gray: {
    0: '#FFFFFF',
    50: '#F8FAFB',
    100: '#F1F4F6',
    200: '#E4E9ED',
    300: '#CBD3DB',
    400: '#9EA8B3',
    500: '#6B7684',
    600: '#4E5968',
    700: '#333D4B',
    800: '#1F2937',
    900: '#111827',
  },

  status: {
    success: {
      light: '#DCFCE7',
      main: '#22C55E',
      dark: '#15803D',
    },
    warning: {
      light: '#FEF3C7',
      main: '#F59E0B',
      dark: '#B45309',
    },
    danger: {
      light: '#FEE2E2',
      main: '#EF4444',
      dark: '#B91C1C',
    },
    info: {
      light: '#DBEAFE',
      main: '#3B82F6',
      dark: '#1D4ED8',
    },
  },

  transparent: 'transparent',
} as const;

/**
 * Semantic Colors — 의미 기반 색상 참조
 * 직접 Primitive 참조 금지. 항상 Semantic을 사용하여 토큰 변경에 대응.
 */
export const Colors = {
  // Background
  background: {
    primary: Primitive.gray[0], // #FFFFFF
    secondary: Primitive.gray[50], // #F8FAFB
    tertiary: Primitive.gray[100], // #F1F4F6
    inverse: Primitive.gray[900],
    overlay: 'rgba(17, 24, 39, 0.7)', // Gray[900] 70%
  },

  // Text
  text: {
    primary: Primitive.gray[900],
    secondary: Primitive.gray[600],
    tertiary: Primitive.gray[500],
    disabled: Primitive.gray[400],
    placeholder: Primitive.gray[400],
    inverse: Primitive.gray[0],
    link: Primitive.primary[600],
    error: Primitive.status.danger.main,
  },

  // Border
  border: {
    default: Primitive.gray[200],
    strong: Primitive.gray[300],
    focus: Primitive.primary[500],
    error: Primitive.status.danger.main,
  },

  // Interactive (Buttons, Links)
  interactive: {
    primary: Primitive.primary[500],
    primaryHover: Primitive.primary[600],
    primaryPressed: Primitive.primary[700],
    primaryDisabled: Primitive.gray[200],

    secondary: Primitive.gray[0],
    secondaryHover: Primitive.gray[50],
    secondaryPressed: Primitive.gray[100],

    ghost: 'transparent',
    ghostHover: Primitive.gray[50],
    ghostPressed: Primitive.gray[100],
  },

  // Status (semantic wrappers)
  status: {
    success: Primitive.status.success.main,
    successBg: Primitive.status.success.light,
    warning: Primitive.status.warning.main,
    warningBg: Primitive.status.warning.light,
    danger: Primitive.status.danger.main,
    dangerBg: Primitive.status.danger.light,
    info: Primitive.status.info.main,
    infoBg: Primitive.status.info.light,
  },

  // Icon
  icon: {
    default: Primitive.gray[700],
    muted: Primitive.gray[500],
    inverse: Primitive.gray[0],
    accent: Primitive.primary[500],
  },

  // Divider
  divider: Primitive.gray[200],
} as const;

export type ColorToken = typeof Colors;
