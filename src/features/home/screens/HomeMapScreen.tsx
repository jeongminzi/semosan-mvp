import { CaretRight, Gear } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Badge, MapMock, TabBar } from '../../../shared/components';
import { Colors, Primitive, Spacing, Typography } from '../../../shared/constants';

export interface HomeMapScreenProps {
  onToggleList?: () => void;
  onSettings?: () => void;
  onPinPress?: (mountainId: string) => void;
}

/**
 * 홈 — 지도형 (02-01)
 */
export function HomeMapScreen({ onToggleList, onSettings, onPinPress }: HomeMapScreenProps) {
  const [_] = useState(null);
  void onPinPress;

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar} />
        <View style={styles.profileBody}>
          <Text style={styles.nickname}>등린이_민</Text>
          <View style={styles.titleRow}>
            <Badge variant="weak" size="sm">초보 등산가</Badge>
            <Text style={styles.profileMeta}>완등 4회</Text>
          </View>
        </View>
        <Pressable onPress={onSettings} hitSlop={8} style={styles.iconBtn}>
          <Gear size={22} weight="fill" color={Colors.icon.muted} />
        </Pressable>
      </View>

      <View style={styles.mapWrap}>
        <MapMock
          fullBleed
          pins={[
            { x: 0.3, y: 0.25, highlight: true },
            { x: 0.55, y: 0.45 },
            { x: 0.25, y: 0.6 },
            { x: 0.7, y: 0.35 },
            { x: 0.6, y: 0.7 },
          ]}
          style={styles.map}
        />

        <View style={styles.toggleWrap}>
          <View style={styles.toggleOn}><Text style={styles.toggleOnText}>지도</Text></View>
          <Pressable onPress={onToggleList} style={styles.toggleOff}>
            <Text style={styles.toggleOffText}>리스트</Text>
          </Pressable>
        </View>

        <View style={styles.legend}>
          <LegendItem color={Colors.interactive.primary} label="등산한 산" />
          <LegendItem color={Primitive.gray[500]} label="추천" />
          <LegendItem color="transparent" border={Primitive.gray[400]} label="큐레이션" />
        </View>

        <Pressable style={styles.recommendCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.recommendEyebrow}>📍 오늘의 추천</Text>
            <Text style={styles.recommendTitle}>관악산 연주대 코스</Text>
            <Text style={styles.recommendMeta}>4.1km · 2h 45m · 중급</Text>
          </View>
          <CaretRight size={16} weight="fill" color={Colors.text.tertiary} />
        </Pressable>
      </View>

      <TabBar active="home" />
    </View>
  );
}

function LegendItem({ color, label, border }: { color: string; label: string; border?: string }) {
  return (
    <View style={styles.legendItem}>
      <View
        style={[
          styles.legendDot,
          { backgroundColor: color },
          border ? { borderWidth: 1, borderColor: border } : null,
        ]}
      />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[3],
    backgroundColor: Colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.interactive.weak,
    borderWidth: 2,
    borderColor: Primitive.gray[100],
  },
  profileBody: { flex: 1, gap: 2 },
  nickname: { ...Typography.h5, color: Colors.text.primary },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing[2] },
  profileMeta: {
    ...Typography.caption,
    color: Colors.text.tertiary,
  },
  iconBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapWrap: {
    flex: 1,
    position: 'relative',
  },
  map: {
    position: 'absolute',
    inset: 0,
    aspectRatio: undefined,
    height: '100%',
  } as any,
  toggleWrap: {
    position: 'absolute',
    top: Spacing[4],
    right: Spacing[4],
    flexDirection: 'row',
    backgroundColor: Colors.background.primary,
    borderRadius: 999,
    padding: 2,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  toggleOn: {
    backgroundColor: Colors.background.inverse,
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[1],
    borderRadius: 999,
  },
  toggleOnText: {
    ...Typography.caption,
    color: Colors.text.inverse,
    fontWeight: '600',
  },
  toggleOff: {
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[1],
  },
  toggleOffText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
  legend: {
    position: 'absolute',
    bottom: Spacing[5] + 120,
    left: Spacing[4],
    backgroundColor: Colors.background.primary,
    borderRadius: 12,
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[3],
    borderWidth: 1,
    borderColor: Colors.border.default,
    gap: Spacing[1],
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[2],
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    ...Typography.caption,
    color: Colors.text.secondary,
  },
  recommendCard: {
    position: 'absolute',
    left: Spacing[4],
    right: Spacing[4],
    bottom: Spacing[5],
    backgroundColor: Colors.background.primary,
    borderRadius: 16,
    padding: Spacing[4],
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[2],
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  recommendEyebrow: {
    ...Typography.caption,
    color: Colors.interactive.primary,
    fontWeight: '600',
    marginBottom: 2,
  },
  recommendTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
  },
  recommendMeta: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    marginTop: 2,
  },
});
