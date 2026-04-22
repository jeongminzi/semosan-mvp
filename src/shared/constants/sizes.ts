/**
 * SEMOSAN Sizes — Icon / Touch Target / Component Heights
 *
 * 참조: docs/CLAUDE_CODE_BRIEF.md, docs/LAYOUT_PATTERNS.md
 */

export const IconSize = {
  xs: 12,
  sm: 16,
  md: 24, // 기본
  lg: 32,
  xl: 40,
  '2xl': 48,
} as const;

/**
 * Touch Target — 최소 44×44px (Apple HIG)
 */
export const TouchTarget = {
  minimum: 44,
} as const;

/**
 * Component Heights
 */
export const ComponentHeight = {
  // Button
  buttonSm: 32,
  buttonMd: 40,
  buttonLg: 48,

  // Input
  input: 48,

  // Search bar
  searchBar: 48,

  // Chip
  chip: 36,

  // List item
  listItemCompact: 48,
  listItemDefault: 56,
  listItemLarge: 72,

  // Action sheet item
  actionSheetItem: 56,

  // Top bar
  topBar: 52,
  headerModal: 56,

  // Tab bar (iOS / Android)
  tabBar: 83, // Tab icon 높이 + 하단 safe area

  // Bottom sheet handle
  sheetHandle: 40,
} as const;

/**
 * Avatar sizes
 */
export const AvatarSize = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64, // Profile header 기본
  '2xl': 80,
} as const;

/**
 * Thumbnail sizes
 */
export const ThumbnailSize = {
  sm: 40,
  md: 56, // List item 기본
  lg: 80,
  xl: 120,
} as const;

export type IconSizeToken = keyof typeof IconSize;
