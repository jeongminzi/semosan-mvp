/**
 * SEMOSAN Spacing System — 8px Grid (엄수)
 *
 * 참조: docs/CLAUDE_CODE_BRIEF.md, docs/LAYOUT_PATTERNS.md
 * 사용 가능 값: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
 * 절대 하드코딩 금지. Spacing[4] = 16px 식으로 토큰을 통해 참조.
 */

export const Spacing = {
  0: 0,
  1: 4, // 0.5 단위 — 아이콘-텍스트 간격
  2: 8, // 1 단위 — 관련 요소 간 최소 간격
  3: 12,
  4: 16, // 2 단위 — 섹션 내부 여백 (기본)
  5: 20,
  6: 24, // 3 단위 — 섹션 간 구분
  8: 32, // 4 단위 — 큰 섹션 구분
  10: 40,
  12: 48, // 6 단위 — 화면 상하 여백
  16: 64, // 8 단위
  20: 80,
  24: 96,
  32: 128,
} as const;

/**
 * Safe Area — iOS 하단 인디케이터 고려
 */
export const SafeArea = {
  bottom: 34,
  top: 44, // statusbar 기본값 (실제로는 useSafeAreaInsets 사용)
} as const;

export type SpacingToken = keyof typeof Spacing;
