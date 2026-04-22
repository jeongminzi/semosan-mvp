import { Mountains, Sun } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Card } from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';

export interface SummitReachedScreenProps {
  peakName?: string;
  peakHeight?: number;
  duration?: string;
  distance?: string;
  descentDeadline?: string;
  onCapture?: () => void;
  onDescent?: () => void;
}

/**
 * 트래킹 — 정상 도착 (04-04)
 */
export function SummitReachedScreen({
  peakName = '백운대',
  peakHeight = 836,
  duration = '2h 10m',
  distance = '3.2km',
  descentDeadline = '17:30',
  onCapture,
  onDescent,
}: SummitReachedScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <View style={styles.iconCircle}>
            <Mountains size={64} weight="fill" color={Colors.interactive.primary} />
          </View>
          <Text style={styles.eyebrow}>SUMMIT REACHED</Text>
          <Text style={styles.title}>정상 도착!</Text>
          <Text style={styles.subtitle}>
            {peakName} · {peakHeight}m
          </Text>
        </View>

        <View style={styles.statsRow}>
          <Card variant="outlined" style={styles.statCard}>
            <Text style={styles.statLabel}>소요 시간</Text>
            <Text style={styles.statValue}>{duration}</Text>
          </Card>
          <Card variant="outlined" style={styles.statCard}>
            <Text style={styles.statLabel}>이동 거리</Text>
            <Text style={styles.statValue}>{distance}</Text>
          </Card>
        </View>

        <View style={styles.sunsetAlert}>
          <Sun size={16} weight="fill" color={Colors.status.warning} />
          <Text style={styles.sunsetText}>
            안전 하산을 위해{' '}
            <Text style={styles.sunsetBold}>{descentDeadline}</Text>
            {' '}전 출발하세요
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Button variant="primary" size="lg" fullWidth onPress={onCapture}>
          정상 인증샷 촬영
        </Button>
        <Button variant="secondary" size="lg" fullWidth onPress={onDescent}>
          하산 시작
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    paddingTop: 64,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing[6],
    gap: Spacing[6],
  },
  hero: {
    alignItems: 'center',
    gap: Spacing[2],
  },
  iconCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: Colors.interactive.weak,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing[4],
  },
  eyebrow: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text.primary,
    letterSpacing: -1,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.text.secondary,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing[2],
  },
  statCard: {
    flex: 1,
    padding: Spacing[4],
    alignItems: 'center',
    gap: Spacing[1],
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    ...Typography.h3,
    color: Colors.text.primary,
  },
  sunsetAlert: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[2],
    padding: Spacing[3],
    borderRadius: 12,
    backgroundColor: Colors.status.warningBg,
  },
  sunsetText: {
    ...Typography.bodySm,
    color: Colors.text.primary,
    flex: 1,
  },
  sunsetBold: {
    fontWeight: '800',
  },
  actions: {
    padding: Spacing[6],
    paddingBottom: Spacing[10],
    gap: Spacing[2],
  },
});
