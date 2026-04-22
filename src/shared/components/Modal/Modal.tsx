import { X } from 'phosphor-react-native';
import React from 'react';
import {
  Modal as RNModal,
  Pressable,
  SafeAreaView,
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

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  /** 닫기 버튼 숨김 */
  hideClose?: boolean;
  /** 상단 우측 추가 액션 */
  rightAction?: React.ReactNode;
  children?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
}

/**
 * Modal — 전체 화면 모달
 * 참조: docs/LAYOUT_PATTERNS.md (Pattern 1 · Full Screen Modal)
 * - Header 56px, 닫기 버튼 32×32 (우측 상단)
 */
export function Modal({
  visible,
  onClose,
  title,
  hideClose = false,
  rightAction,
  children,
  contentStyle,
}: ModalProps) {
  return (
    <RNModal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="fullScreen"
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          {!hideClose ? (
            <Pressable
              onPress={onClose}
              hitSlop={8}
              accessibilityLabel="닫기"
              style={styles.closeBtn}
            >
              <X size={IconSize.md} weight="bold" color={Colors.text.primary} />
            </Pressable>
          ) : (
            <View style={styles.closeBtn} />
          )}
          {title && <Text style={styles.title}>{title}</Text>}
          <View style={styles.rightAction}>{rightAction}</View>
        </View>

        <View style={[styles.content, contentStyle]}>{children}</View>
      </SafeAreaView>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  header: {
    height: ComponentHeight.headerModal, // 56
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing[4],
    backgroundColor: Colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  closeBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    ...Typography.h5,
    color: Colors.text.primary,
  },
  rightAction: {
    minWidth: 32,
    height: 32,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: Spacing[4],
  },
});
