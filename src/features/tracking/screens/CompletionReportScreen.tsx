import { Trophy } from 'phosphor-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { Button, Card, MapMock, TopBar } from '../../../shared/components';
import { Colors, Primitive, Spacing, Typography } from '../../../shared/constants';

export interface CompletionReportScreenProps {
  courseName?: string;
  date?: string;
  duration?: string;
  distance?: string;
  elevation?: string;
  calories?: string;
  onSave?: () => void;
  onShare?: () => void;
  onBack?: () => void;
}

/**
 * 트래킹 — 완료 그래픽 리포트 (04-05)
 */
export function CompletionReportScreen({
  courseName = '백운대 코스',
  date = '2026-04-22',
  duration = '2h 10m 35s',
  distance = '3.2km',
  elevation = '520m',
  calories = '450 kcal',
  onSave,
  onShare,
  onBack,
}: CompletionReportScreenProps) {
  const stats = [
    { label: '소요 시간', value: duration },
    { label: '이동 거리', value: distance },
    { label: '고도차', value: elevation },
    { label: '칼로리', value: calories },
  ];

  return (
    <View style={styles.container}>
      <TopBar onBack={onBack} title="완주 리포트" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.trophyCircle}>
            <Trophy size={40} weight="fill" color={Colors.status.warning} />
          </View>
          <Text style={styles.heroTitle}>{courseName} 완주!</Text>
          <Text style={styles.heroDate}>{date}</Text>
        </View>

        <View style={styles.statsGrid}>
          {stats.map((s) => (
            <Card key={s.label} variant="outlined" style={styles.statCard}>
              <Text style={styles.statLabel}>{s.label}</Text>
              <Text style={styles.statValue}>{s.value}</Text>
            </Card>
          ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.blockLabel}>고도 그래프</Text>
          <Card variant="outlined" style={{ padding: Spacing[3] }}>
            <View style={{ height: 120 }}>
              <Svg viewBox="0 0 300 100" style={{ width: '100%', height: '100%' }}>
                <Defs>
                  <LinearGradient id="alt" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0%" stopColor={Primitive.primary[500]} stopOpacity="0.25" />
                    <Stop offset="100%" stopColor={Primitive.primary[500]} stopOpacity="0" />
                  </LinearGradient>
                </Defs>
                <Path
                  d="M 0 90 Q 60 60 100 40 T 180 10 L 220 15 Q 260 40 300 75 L 300 100 L 0 100 Z"
                  fill="url(#alt)"
                />
                <Path
                  d="M 0 90 Q 60 60 100 40 T 180 10 L 220 15 Q 260 40 300 75"
                  stroke={Primitive.primary[600]}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </Svg>
            </View>
            <View style={styles.axis}>
              <Text style={styles.axisText}>출발</Text>
              <Text style={styles.axisText}>정상 {elevation}</Text>
              <Text style={styles.axisText}>도착</Text>
            </View>
          </Card>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockLabel}>경로 지도</Text>
          <MapMock
            radius={12}
            pins={[
              { x: 0.1, y: 0.75, user: true },
              { x: 0.88, y: 0.15, highlight: true },
            ]}
            route={{ path: 'M 10 80 Q 40 40 55 25 T 88 15' }}
            style={{ height: 140 }}
          />
        </View>

        <View style={{ height: Spacing[6] }} />
      </ScrollView>

      <View style={styles.footer}>
        <View style={{ flex: 1 }}>
          <Button variant="secondary" size="lg" fullWidth onPress={onSave}>
            저장
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button variant="primary" size="lg" fullWidth onPress={onShare}>
            공유
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  scroll: {
    padding: Spacing[5],
    gap: Spacing[5],
  },
  hero: {
    alignItems: 'center',
    gap: Spacing[1],
    paddingVertical: Spacing[3],
  },
  trophyCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.status.warningBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing[2],
  },
  heroTitle: {
    ...Typography.h2,
    color: Colors.text.primary,
  },
  heroDate: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
    fontFamily: 'Menlo',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing[2],
  },
  statCard: {
    flexBasis: '48%',
    padding: Spacing[3],
    gap: 2,
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    ...Typography.h4,
    color: Colors.text.primary,
  },
  block: {
    gap: Spacing[2],
  },
  blockLabel: {
    ...Typography.label,
    color: Colors.text.secondary,
  },
  axis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing[1],
  },
  axisText: {
    fontSize: 10,
    color: Colors.text.tertiary,
  },
  footer: {
    flexDirection: 'row',
    gap: Spacing[2],
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[4],
    paddingBottom: Spacing[10],
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
});
