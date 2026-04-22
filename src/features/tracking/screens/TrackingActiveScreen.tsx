import {
  Pause,
  Camera,
  Check,
  MagnifyingGlass,
  Flag,
  Sun,
  Gauge,
} from 'phosphor-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
  Button,
  MapMock,
  ProgressBar,
} from '../../../shared/components';
import { Colors, Primitive, Spacing, Typography } from '../../../shared/constants';

export interface TrackingActiveScreenProps {
  onPause?: () => void;
  onCamera?: () => void;
  onSummit?: () => void;
}

/**
 * 트래킹 — 진행 중 (04-02) ⭐ 핵심 화면
 */
export function TrackingActiveScreen({
  onPause,
  onCamera,
  onSummit,
}: TrackingActiveScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <MagnifyingGlass size={14} weight="fill" color={Colors.icon.muted} />
          <Text style={styles.searchText}>현 위치 검색 · 이정표 입력</Text>
        </View>
      </View>

      <View style={styles.mapWrap}>
        <MapMock
          fullBleed
          pins={[
            { x: 0.4, y: 0.7, user: true },
            { x: 0.85, y: 0.1, highlight: true },
          ]}
          route={{ path: 'M 12 80 Q 40 60 55 35 T 88 10' }}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.gpsBadge}>
          <Gauge size={12} weight="fill" color={Colors.status.success} />
          <Text style={styles.gpsText}>GPS 강함</Text>
        </View>
      </View>

      <View style={styles.progressBlock}>
        <View style={styles.progressTop}>
          <Text style={styles.progressLabel}>진행률</Text>
          <Text style={styles.progressNum}>56% · 정상까지</Text>
        </View>
        <ProgressBar value={56} size="md" />
        <View style={styles.milestonesRow}>
          <Text style={styles.milestoneText}>출발</Text>
          <Text style={styles.milestoneText}>정상</Text>
          <Text style={styles.milestoneText}>하산</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatCell label="경과" value="01:15:23" />
        <StatCell label="이동" value="1.8" unit="/ 3.2km" />
        <StatCell label="고도" value="320" unit="m" />
      </View>

      <View style={styles.predictBlock}>
        <PredictRow label="🎯  정상까지" value="25분" />
        <PredictRow label="🏁  하산 예정" value="17:30" />
        <View style={styles.sunsetRow}>
          <View style={styles.sunsetLeft}>
            <Sun size={16} weight="fill" color={Colors.status.warning} />
            <Text style={styles.sunsetLabel}>일몰까지</Text>
          </View>
          <Text style={styles.sunsetValue}>2시간 5분</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <Pressable style={styles.squareBtn} onPress={onPause}>
          <Pause size={20} weight="fill" color={Colors.text.primary} />
        </Pressable>
        <Pressable style={styles.squareBtn} onPress={onCamera}>
          <Camera size={20} weight="fill" color={Colors.text.primary} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <Button variant="primary" size="lg" fullWidth onPress={onSummit}>
            정상 도착
          </Button>
        </View>
      </View>
    </View>
  );
}

function StatCell({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <View style={styles.statCell}>
      <Text style={styles.statLabel}>{label}</Text>
      <View style={styles.statValueRow}>
        <Text style={styles.statValue}>{value}</Text>
        {unit && <Text style={styles.statUnit}> {unit}</Text>}
      </View>
    </View>
  );
}

function PredictRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.predictRow}>
      <Text style={styles.predictLabel}>{label}</Text>
      <Text style={styles.predictValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary },
  searchWrap: {
    paddingHorizontal: Spacing[4],
    paddingVertical: Spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[2],
    height: 36,
    paddingHorizontal: Spacing[3],
    borderRadius: 999,
    backgroundColor: Primitive.gray[100],
  },
  searchText: {
    ...Typography.caption,
    color: Colors.text.tertiary,
  },
  mapWrap: {
    height: 240,
    position: 'relative',
  },
  gpsBadge: {
    position: 'absolute',
    top: Spacing[3],
    right: Spacing[3],
    backgroundColor: Colors.background.primary,
    borderRadius: 999,
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[1],
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[1],
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  gpsText: {
    ...Typography.caption,
    color: Colors.text.primary,
  },
  progressBlock: {
    padding: Spacing[4],
    gap: Spacing[1],
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  progressNum: {
    ...Typography.caption,
    color: Colors.text.primary,
    fontFamily: 'Menlo',
    fontWeight: '600',
  },
  milestonesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing[1],
  },
  milestoneText: {
    fontSize: 10,
    color: Colors.text.tertiary,
  },
  statsRow: {
    flexDirection: 'row',
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.text.tertiary,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  statValueRow: { flexDirection: 'row', alignItems: 'baseline' },
  statValue: {
    ...Typography.h4,
    color: Colors.text.primary,
    fontFamily: 'Menlo',
  },
  statUnit: {
    fontSize: 10,
    color: Colors.text.tertiary,
  },
  predictBlock: {
    padding: Spacing[4],
    gap: Spacing[2],
    flex: 1,
  },
  predictRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing[1],
  },
  predictLabel: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
  },
  predictValue: {
    ...Typography.body,
    color: Colors.text.primary,
    fontWeight: '700',
    fontFamily: 'Menlo',
  },
  sunsetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[3],
    borderRadius: 12,
    backgroundColor: Colors.status.warningBg,
    borderWidth: 1,
    borderColor: Primitive.status.warning.main,
    marginTop: Spacing[2],
  },
  sunsetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[2],
  },
  sunsetLabel: {
    ...Typography.bodySm,
    color: Colors.text.primary,
    fontWeight: '700',
  },
  sunsetValue: {
    ...Typography.body,
    color: Colors.text.primary,
    fontWeight: '800',
    fontFamily: 'Menlo',
  },
  controls: {
    flexDirection: 'row',
    gap: Spacing[2],
    paddingHorizontal: Spacing[4],
    paddingBottom: Spacing[10],
  },
  squareBtn: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background.primary,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
});

void Check;
void Flag;
