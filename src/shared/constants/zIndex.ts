/**
 * SEMOSAN Z-Index — 레이어 순서
 */

export const ZIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  tabBar: 30,
  modal: 40,
  bottomSheet: 50,
  popup: 60,
  toast: 70,
  tooltip: 80,
} as const;

export type ZIndexToken = keyof typeof ZIndex;
