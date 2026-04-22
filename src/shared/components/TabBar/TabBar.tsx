import {
  House,
  Mountains,
  Path,
  Users,
} from 'phosphor-react-native';
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
  IconSize,
  Primitive,
  SafeArea,
  Spacing,
  Typography,
} from '../../constants';

export type TabKey = 'home' | 'mountains' | 'tracking' | 'community';

export interface TabBarProps {
  active: TabKey;
  onChange?: (tab: TabKey) => void;
  style?: StyleProp<ViewStyle>;
}

const TABS: Array<{
  key: TabKey;
  label: string;
  Icon: (props: { size: number; color: string; weight: 'fill' }) => React.ReactElement;
}> = [
  { key: 'home', label: '홈', Icon: House },
  { key: 'mountains', label: '산목록', Icon: Mountains },
  { key: 'tracking', label: '트래킹', Icon: Path },
  { key: 'community', label: '커뮤니티', Icon: Users },
];

/**
 * TabBar — 하단 내비게이션 바 (4탭 고정)
 * Height: 83px (아이콘 영역 + Safe Area)
 */
export function TabBar({ active, onChange, style }: TabBarProps) {
  return (
    <View style={[styles.container, style]}>
      {TABS.map(({ key, label, Icon }) => {
        const isActive = key === active;
        const color = isActive ? Colors.text.primary : Colors.text.tertiary;
        return (
          <Pressable
            key={key}
            onPress={() => onChange?.(key)}
            style={styles.tab}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
          >
            <Icon size={IconSize.md} color={color} weight="fill" />
            <Text
              style={[styles.label, { color, fontWeight: isActive ? '600' : '500' }]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 49 + SafeArea.bottom, // 83
    paddingBottom: SafeArea.bottom,
    flexDirection: 'row',
    backgroundColor: Colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: Primitive.gray[200],
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing[1],
    paddingTop: Spacing[2],
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
  },
});
