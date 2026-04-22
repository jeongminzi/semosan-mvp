/**
 * SEMOSAN Design Tokens — 통합 export
 *
 * 사용 예:
 *   import { Colors, Spacing, Typography, BorderRadius } from '@/shared/constants';
 *
 * 🚨 모든 화면/컴포넌트는 이 토큰만 참조해야 합니다.
 *    직접 값을 하드코딩하지 마세요.
 */

export { Colors, Primitive } from './colors';
export type { ColorToken } from './colors';

export {
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
  LetterSpacing,
  Typography,
} from './typography';
export type { TypographyPreset } from './typography';

export { Spacing, SafeArea } from './spacing';
export type { SpacingToken } from './spacing';

export { BorderRadius } from './borderRadius';
export type { BorderRadiusToken } from './borderRadius';

export { Shadow } from './shadows';
export type { ShadowToken } from './shadows';

export {
  IconSize,
  TouchTarget,
  ComponentHeight,
  AvatarSize,
  ThumbnailSize,
} from './sizes';
export type { IconSizeToken } from './sizes';

export { ZIndex } from './zIndex';
export type { ZIndexToken } from './zIndex';

export { Duration, Easing, Opacity } from './animation';
