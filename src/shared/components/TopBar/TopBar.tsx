import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  Colors,
  ComponentHeight,
  IconSize,
  Spacing,
  Typography,
} from '../../constants';

export interface TopBarProps {
  /** 제목 */
  title?: string;
  /** 뒤로가기 버튼 표시 (기본 true) */
  showBack?: boolean;
  /** 뒤로가기 핸들러 */
  onBack?: () => void;
  /** 우측 액션 (텍스트/아이콘 버튼) */
  rightAction?: React.ReactNode;
  /** 하단 구분선 (기본 true) */
  divider?: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * TopBar — 화면 상단 내비게이션 바
 * Height: 52px
 */
export function TopBar({
  title,
  showBack = true,
  onBack,
  rightAction,
  divider = true,
  style,
}: TopBarProps) {
  return (
    <View style={[styles.container, divider && styles.divider, style]}>
      <View style={styles.side}>
        {showBack && (
          <Pressable
            onPress={onBack}
            hitSlop={8}
            accessibilityLabel="뒤로"
            style={styles.backBtn}
          >
            <CaretLeft size={IconSize.md} weight="bold" color={Colors.text.primary} />
          </Pressable>
        )}
      </View>
      {title && <Text style={styles.title} numberOfLines={1}>{title}</Text>}
      <View style={[styles.side, styles.sideRight]}>{rightAction}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ComponentHeight.topBar, // 52
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing[4],
    backgroundColor: Colors.background.primary,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  side: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    alignItems: 'flex-end',
  },
  backBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    ...Typography.h5,
    color: Colors.text.primary,
  },
});
