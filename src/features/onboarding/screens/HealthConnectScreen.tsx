import {
  CheckCircle,
  Footprints,
  Heart,
  Barbell,
  Heartbeat,
} from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Card, TopBar } from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';

export interface HealthConnectScreenProps {
  onConnect?: () => void;
  onSkip?: () => void;
  onBack?: () => void;
}

const ITEMS = [
  { icon: Footprints, label: '평균 걸음 수' },
  { icon: Barbell, label: '최근 운동 기록' },
  { icon: Heart, label: '심박수 (선택)' },
];

/**
 * 온보딩 — 건강 데이터 연동 (01-02)
 */
export function HealthConnectScreen({
  onConnect,
  onSkip,
  onBack,
}: HealthConnectScreenProps) {
  return (
    <View style={styles.container}>
      <TopBar
        onBack={onBack}
        rightAction={<Text style={styles.step}>1 / 2</Text>}
      />
      <View style={styles.content}>
        <Text style={styles.eyebrow}>STEP 01</Text>
        <Text style={styles.title}>체력 수준을 분석할게요</Text>
        <Text style={styles.desc}>
          건강 데이터를 연동하면 더 정확한{'\n'}산/코스 추천을 받을 수 있어요.
        </Text>

        <Card variant="outlined" style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.healthIcon}>
              <Heartbeat size={24} weight="fill" color={Colors.interactive.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Apple Health 연동</Text>
              <Text style={styles.cardSub}>Android는 Google Fit</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.itemList}>
            {ITEMS.map(({ icon: Icon, label }) => (
              <View key={label} style={styles.itemRow}>
                <CheckCircle size={18} weight="fill" color={Colors.interactive.primary} />
                <Icon size={18} weight="fill" color={Colors.icon.muted} />
                <Text style={styles.itemLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </Card>
      </View>

      <View style={styles.actions}>
        <Button variant="primary" size="lg" fullWidth onPress={onConnect}>
          연동하기
        </Button>
        <Button variant="ghost" size="md" fullWidth onPress={onSkip}>
          건너뛰기
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  step: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[5],
  },
  eyebrow: {
    ...Typography.caption,
    color: Colors.interactive.primary,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: Spacing[2],
  },
  title: {
    ...Typography.h2,
    color: Colors.text.primary,
    marginBottom: Spacing[3],
  },
  desc: {
    ...Typography.body,
    color: Colors.text.secondary,
    lineHeight: 24,
    marginBottom: Spacing[6],
  },
  card: {
    padding: Spacing[5],
  },
  cardHeader: {
    flexDirection: 'row',
    gap: Spacing[3],
    alignItems: 'center',
  },
  healthIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.interactive.weak,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: { ...Typography.h5, color: Colors.text.primary },
  cardSub: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing[4],
  },
  itemList: { gap: Spacing[3] },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
  },
  itemLabel: {
    ...Typography.body,
    color: Colors.text.primary,
  },
  actions: {
    paddingHorizontal: Spacing[5],
    paddingBottom: Spacing[10],
    gap: Spacing[2],
  },
});
