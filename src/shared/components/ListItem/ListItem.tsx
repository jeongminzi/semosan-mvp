import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  BorderRadius,
  Colors,
  Opacity,
  Spacing,
  ThumbnailSize,
  Typography,
} from '../../constants';

export type ListItemSize = 'compact' | 'default' | 'large';

export interface ListItemProps
  extends Omit<PressableProps, 'style' | 'children'> {
  title: string;
  subtitle?: string;
  /** 왼쪽 썸네일 이미지 URL */
  thumbnailUrl?: string;
  /** 왼쪽 아이콘 (썸네일 대체) */
  leftIcon?: React.ReactNode;
  /** 오른쪽 액션 텍스트 */
  rightText?: string;
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  size?: ListItemSize;
  /** 하단 구분선 표시 */
  divider?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

/**
 * ListItem — 썸네일 + 제목/부제 + 오른쪽 액션
 * 참조: docs/LAYOUT_PATTERNS.md (Pattern 9 · List Item with Thumbnail)
 */
export function ListItem({
  title,
  subtitle,
  thumbnailUrl,
  leftIcon,
  rightText,
  rightIcon,
  size = 'default',
  divider = false,
  onPress,
  style,
  ...pressableProps
}: ListItemProps) {
  const s = SIZE_STYLES[size];

  const content = (
    <View
      style={[
        styles.row,
        { paddingVertical: s.py, paddingHorizontal: s.px },
        divider && styles.divider,
        style,
      ]}
    >
      {thumbnailUrl ? (
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
      ) : leftIcon ? (
        <View style={styles.iconFrame}>{leftIcon}</View>
      ) : null}

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle && <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>}
      </View>

      {(rightText || rightIcon) && (
        <View style={styles.right}>
          {rightText && <Text style={styles.rightText}>{rightText}</Text>}
          {rightIcon}
        </View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && { opacity: Opacity.pressed }]}
        {...pressableProps}
      >
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
    backgroundColor: Colors.background.primary,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  thumbnail: {
    width: ThumbnailSize.md, // 56
    height: ThumbnailSize.md,
    borderRadius: BorderRadius.base,
    backgroundColor: Colors.background.tertiary,
  },
  iconFrame: {
    width: ThumbnailSize.md,
    height: ThumbnailSize.md,
    borderRadius: BorderRadius.base,
    backgroundColor: Colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    gap: Spacing[1],
  },
  title: {
    ...Typography.body,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  subtitle: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[1],
  },
  rightText: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
  },
});

const SIZE_STYLES: Record<ListItemSize, { py: number; px: number }> = {
  compact: { py: Spacing[2], px: Spacing[4] }, // 48 내외
  default: { py: Spacing[3], px: Spacing[4] }, // 72 내외
  large: { py: Spacing[4], px: Spacing[4] },
};
