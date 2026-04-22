import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Badge, Button, MapMock } from '../../../shared/components';
import { Colors, Primitive, SafeArea, Spacing, Typography } from '../../../shared/constants';

export interface MountainInfoSheetScreenProps {
  onMoreRecords?: () => void;
}

/**
 * 홈 — 산 정보 모달 (02-03) — 지도 배경 + 하단 시트 펼쳐진 상태
 */
export function MountainInfoSheetScreen({ onMoreRecords }: MountainInfoSheetScreenProps) {
  return (
    <View style={styles.container}>
      <MapMock
        fullBleed
        pins={[
          { x: 0.5, y: 0.2, highlight: true },
          { x: 0.25, y: 0.15 },
          { x: 0.75, y: 0.2 },
        ]}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.overlay} />

      <View style={styles.sheet}>
        <View style={styles.handle} />

        <View style={styles.header}>
          <View style={styles.thumb}>
            <Text style={{ fontSize: 24 }}>🏔️</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>북한산</Text>
            <Text style={styles.meta}>서울 강북구 · 836m</Text>
          </View>
          <Badge variant="primary" pill>3회 완등</Badge>
        </View>

        <View style={styles.statsRow}>
          {[
            { n: '3', l: '등산 횟수' },
            { n: '6.5h', l: '누적 시간' },
            { n: '12.5km', l: '누적 거리' },
          ].map((s) => (
            <View key={s.l} style={styles.stat}>
              <Text style={styles.statN}>{s.n}</Text>
              <Text style={styles.statL}>{s.l}</Text>
            </View>
          ))}
        </View>

        <Button variant="primary" size="lg" fullWidth onPress={onMoreRecords}>
          등반 기록 더보기
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(17, 24, 39, 0.35)',
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.background.primary,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[2],
    paddingBottom: Spacing[6] + SafeArea.bottom,
    gap: Spacing[5],
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 999,
    backgroundColor: Primitive.gray[300],
    marginBottom: Spacing[3],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: Primitive.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { ...Typography.h3, color: Colors.text.primary },
  meta: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Spacing[3],
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
  },
  stat: { alignItems: 'center', gap: 2 },
  statN: { ...Typography.h3, color: Colors.text.primary },
  statL: { ...Typography.caption, color: Colors.text.tertiary },
});
