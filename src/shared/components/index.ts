/**
 * SEMOSAN 공용 컴포넌트 — 통합 export
 *
 * 사용:
 *   import { Button, Card, Badge } from '@/shared/components';
 */

// Primitives
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

export { Badge } from './Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge';

export { Chip } from './Chip';
export type { ChipProps, ChipVariant } from './Chip';

export { Input } from './Input';
export type { InputProps } from './Input';

export { StarRating } from './StarRating';
export type { StarRatingProps, StarRatingSize } from './StarRating';

export { ProgressBar } from './ProgressBar';
export type {
  ProgressBarProps,
  ProgressBarVariant,
  ProgressBarSize,
} from './ProgressBar';

// Composite
export { Card } from './Card';
export type { CardProps, CardVariant } from './Card';

export { ListItem } from './ListItem';
export type { ListItemProps, ListItemSize } from './ListItem';

export { SearchBar } from './SearchBar';
export type { SearchBarProps } from './SearchBar';

export { Modal } from './Modal';
export type { ModalProps } from './Modal';

export { BottomSheet } from './BottomSheet';
export type { BottomSheetProps } from './BottomSheet';
