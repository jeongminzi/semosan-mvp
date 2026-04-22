import { CloudSun, Sun } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  Button,
  Card,
  MapMock,
  TopBar,
} from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';

export interface TrackingPreviewScreenProps {
  courseName?: string;
  distance?: number; // meters
  estimatedTime?: number; // minutes
  elevationGain?: number;
  weatherLabel?: string;
  temperature?: number;
  sunsetTime?: string;
  safetyStartTime?: string;
  onStart?: () => void;
  onBack?: () => void;
}

/**
 * 트래킹 — 시작 전 (04-01)
 */
export function TrackingPreviewScreen({
  courseName = '백운대 코스',
  distance = 3200,
  estimatedTime = 135,
  elevationGain = 520,
  weatherLabel = '맑음',
  temperature = 22,
  sunsetTime = '19:35',
  safetyStartTime = '15:20',
  onStart,
  onBack,
}: TrackingPreviewScreenProps) {
  const h = Math.floor(estimatedTime / 60);
  const m = estimatedTime % 60;

  return (
    <View style={styles.container}>
      <TopBar title={courseName} onBack={onBack} />

      <View style={styles.content}>
        <MapMock
          radius={16}
          pins={[
            { x: 0.1, y: 0.85, user: true },
            { x: 0.88, y: 0.15, highlight: true },
          ]}
          route={{ path: 'M 10 85 Q 50 50 88 15', dashed: true }}
          style={{ height: 220 }}
        />

        <View style={styles.statsRow}>
          <Stat label="거리" value={`${(distance / 1000).toFixed(1)}`} unit="km" />
          <Stat label="예상" value={`${h}h`} unit={`${m}m`} />
          <Stat label="고도차" value={`${elevationGain}`} unit="m" />
        </View>

        <Card variant="outlined" style={{ padding: Spacing[4] }}>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <CloudSun size={18} weight="fill" color={Colors.icon.muted} />
              <Text style={styles.metaLabel}>오늘 날씨</Text>
            </View>
            <Text style={styles.metaValue}>{weatherLabel} · {temperature}°C</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Sun size={18} weight="fill" color={Colors.status.warning} />
              <Text style={styles.metaLabel}>일몰 시간</Text>
            </View>
            <Text style={[styles.metaValue, styles.metaHighlight]}>{sunsetTime}</Text>
          </View>
        </Card>

        <Card variant="filled" style={{ padding: Spacing[3] }}>
          <Text style={styles.warning}>
            ⚠ 안전 완등 권장 출발 시간:{'  '}
            <Text style={styles.warningBold}>{safetyStartTime} 이전</Text>
          </Text>
        </Card>
      </View>

      <View style={styles.footer}>
        <Button variant="primary" size="lg" fullWidth onPress={onStart}>
          등산 시작
        </Button>
      </View>
    </View>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statLabel}>{label}</Text>
      <View style={styles.statValueRow}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statUnit}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary },
  content: {
    padding: Spacing[5],
    gap: Spacing[4],
    flex: 1,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing[2],
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing[1],
    paddingVertical: Spacing[3],
    borderRadius: 12,
    backgroundColor: Colors.background.secondary,
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValueRow: { flexDirection: 'row', alignItems: 'baseline', gap: 2 },
  statValue: {
    ...Typography.h3,
    color: Colors.text.primary,
  },
  statUnit: {
    ...Typography.caption,
    color: Colors.text.tertiary,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    gap: Spacing[2],
    alignItems: 'center',
  },
  metaLabel: {
    ...Typography.body,
    color: Colors.text.primary,
    fontWeight: '600',
  },
  metaValue: {
    ...Typography.body,
    color: Colors.text.secondary,
  },
  metaHighlight: {
    color: Colors.text.primary,
    fontWeight: '700',
  },
  metaDivider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing[3],
  },
  warning: {
    ...Typography.bodySm,
    color: Colors.text.primary,
  },
  warningBold: {
    fontWeight: '700',
  },
  footer: {
    padding: Spacing[5],
    paddingBottom: Spacing[10],
  },
});
