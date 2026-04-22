import { MagnifyingGlass, X } from 'phosphor-react-native';
import React, { forwardRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  type TextInputProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import {
  BorderRadius,
  Colors,
  ComponentHeight,
  IconSize,
  Primitive,
  Spacing,
  Typography,
} from '../../constants';

export interface SearchBarProps extends Omit<TextInputProps, 'style'> {
  /** 클리어(X) 버튼 표시 (value 있을 때) */
  onClear?: () => void;
  /** 오른쪽 추가 액션 (음성/스캔 등) */
  rightAction?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * SearchBar — 검색 입력 바
 * 참조: docs/LAYOUT_PATTERNS.md (Pattern 3 · Search Bar with Filters)
 */
export const SearchBar = forwardRef<TextInput, SearchBarProps>(function SearchBar(
  { value, onChangeText, onClear, rightAction, containerStyle, ...textInputProps },
  ref,
) {
  const [internal, setInternal] = useState(value ?? '');
  const currentValue = value !== undefined ? value : internal;
  const hasValue = currentValue.length > 0;

  const handleChange = (t: string) => {
    setInternal(t);
    onChangeText?.(t);
  };

  const handleClear = () => {
    setInternal('');
    onChangeText?.('');
    onClear?.();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <MagnifyingGlass size={IconSize.sm} weight="fill" color={Colors.icon.muted} />
      <TextInput
        ref={ref}
        style={styles.input}
        placeholder="검색어를 입력하세요"
        placeholderTextColor={Colors.text.placeholder}
        value={currentValue}
        onChangeText={handleChange}
        {...textInputProps}
      />
      {hasValue && (
        <Pressable onPress={handleClear} hitSlop={8} accessibilityLabel="검색어 지우기">
          <View style={styles.clearBtn}>
            <X size={10} weight="bold" color={Colors.text.inverse} />
          </View>
        </Pressable>
      )}
      {rightAction}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[2],
    height: ComponentHeight.searchBar, // 48
    paddingHorizontal: Spacing[4],
    borderRadius: BorderRadius.md,
    backgroundColor: Primitive.gray[100],
  },
  input: {
    flex: 1,
    ...Typography.body,
    color: Colors.text.primary,
    padding: 0,
  },
  clearBtn: {
    width: 18,
    height: 18,
    borderRadius: BorderRadius.full,
    backgroundColor: Primitive.gray[400],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
