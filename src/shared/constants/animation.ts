/**
 * SEMOSAN Animation
 */

export const Duration = {
  instant: 100,
  fast: 150,
  base: 200,
  slow: 300,
  slower: 500,
} as const;

export const Easing = {
  standard: 'ease-in-out',
  enter: 'ease-out',
  exit: 'ease-in',
} as const;

export const Opacity = {
  disabled: 0.4,
  pressed: 0.7,
  hover: 0.85,
  full: 1,
} as const;
