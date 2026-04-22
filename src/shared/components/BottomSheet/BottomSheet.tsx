import React from 'react';
import {
  Modal as RNModal,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  BorderRadius,
  Colors,
  Primitive,
  SafeArea,
  Shadow,
  Spacing,
  Typography,
} from '../../constants';

export interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  /** 시트 높이 (고정) — 없으면 콘텐츠 크기에 맞춤 */
  height?: number;
  /** 배경 오버레이 탭 시 닫기 */
  dismissOnOverlayTap?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
}

/**
 * BottomSheet — 하단 시트 모달
 * 참조: docs/LAYOUT_PATTERNS.md (Pattern 2 · Bottom Sheet Modal)
 * - Handle 40px, Radius top 20px, Overlay rgba(17,24,39,0.7)
 */
export function BottomSheet({
  visible,
  onClose,
  title,
  children,
  height,
  dismissOnOverlayTap = true,
  contentStyle,
}: BottomSheetProps) {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        style={styles.overlay}
        onPress={dismissOnOverlayTap ? onClose : undefined}
        accessibilityRole="button"
        accessibilityLabel="닫기"
      />

      <View
        style={[
          styles.sheet,
          height ? { height } : null,
          contentStyle,
        ]}
      >
        <View style={styles.handleArea}>
          <View style={styles.handle} />
        </View>

        {title && <Text style={styles.title}>{title}</Text>}

        <View style={styles.content}>{children}</View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.background.overlay,
  },
  sheet: {
    backgroundColor: Colors.background.primary,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    paddingBottom: Spacing[6] + SafeArea.bottom,
    ...Shadow.xl,
  },
  handleArea: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: BorderRadius.full,
    backgroundColor: Primitive.gray[300],
  },
  title: {
    ...Typography.h4,
    color: Colors.text.primary,
    paddingHorizontal: Spacing[4],
    paddingTop: Spacing[2],
    paddingBottom: Spacing[4],
  },
  content: {
    paddingHorizontal: Spacing[4],
  },
});
