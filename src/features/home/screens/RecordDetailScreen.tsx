import {
  Clock,
  Path,
  TrendUp,
  Fire,
  FloppyDisk,
  PencilSimple,
} from 'phosphor-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Badge,
  Button,
  Card,
  MapMock,
  TopBar,
} from '../../../shared/components';
import { Colors, Primitive, Spacing, Typography } from '../../../shared/constants';
import { findCourse, findHikeRecord, findMountain } from '../../../data';

export interface RecordDetailScreenProps {
  recordId?: string;
  onBack?: () => void;
  onSaveImage?: () => void;
  onWriteReview?: () => void;
}

/**
 * 홈 — 개별 등반 기록 페이지 (02-04)
 */
export function RecordDetailScreen({
  recordId = 'h-001',
  onBack,
  onSaveImage,
  onWriteReview,
}: RecordDetailScreenProps) {
  const record = findHikeRecord(recordId);
  const mountain = record ? findMountain(record.mountainId) : null;
  const course = record ? findCourse(record.courseId) : null;

  if (!record || !mountain || !course) {
    return <View style={styles.container} />;
  }

  const date = record.startTime.slice(0, 10);
  const h = Math.floor((record.duration ?? 0) / 60);
  const m = (record.duration ?? 0) % 60;

  const stats = [
    { icon: Clock, label: '소요 시간', value: `${h}h ${m}m` },
    { icon: Path, label: '이동 거리', value: `${((record.distance ?? 0) / 1000).toFixed(1)}km` },
    { icon: TrendUp, label: '고도', value: `${record.maxAltitude ?? 0}m` },
    { icon: Fire, label: '칼로리', value: `${record.calories ?? 0}kcal` },
  ];

  return (
    <View style={styles.container}>
      <TopBar
        title={`${mountain.name} ${course.name}`}
        onBack={onBack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.dateRow}>
            <Text style={styles.date}>{date}</Text>
            <Badge variant="primary" pill>
              {record.summitReached ? '완등' : '중도'}
            </Badge>
          </View>

          <View style={styles.statsGrid}>
            {stats.map((s) => (
              <Card key={s.label} variant="outlined" style={styles.statCard}>
                <s.icon size={18} weight="fill" color={Colors.icon.muted} />
                <Text style={styles.statLabel}>{s.label}</Text>
                <Text style={styles.statValue}>{s.value}</Text>
              </Card>
            ))}
          </View>

          <MapMock
            radius={12}
            pins={[
              { x: 0.15, y: 0.8, user: true },
              { x: 0.82, y: 0.15, highlight: true },
            ]}
            route={{ path: 'M 10 80 Q 50 30 90 15', dashed: false }}
            style={{ height: 140 }}
          />
          <Text style={styles.routeHint}>지도 상세보기 →</Text>
        </View>

        <View style={styles.thickDivider} />

        <View style={styles.liveclimbBlock}>
          <View style={styles.blockHeader}>
            <Text style={styles.blockTitle}>📸 LiveClimb 갤러리</Text>
            <Text style={styles.blockCount}>3장</Text>
          </View>
          <View style={styles.gallery}>
            {[
              { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300', label: '정상' },
              { url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=300', label: '500m' },
              { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', label: '100m' },
            ].map((item, i) => (
              <View key={i} style={styles.galleryItem}>
                <Image source={{ uri: item.url }} style={styles.galleryImage} />
                <Text style={styles.galleryLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.actions}>
          <Button variant="secondary" size="md" fullWidth onPress={onSaveImage}>
            이미지로 저장
          </Button>
          <Button variant="primary" size="lg" fullWidth onPress={onWriteReview}>
            후기 작성하기
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  top: {
    padding: Spacing[5],
    gap: Spacing[4],
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    fontFamily: 'Menlo',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing[2],
  },
  statCard: {
    flexBasis: '48%',
    flexGrow: 0,
    padding: Spacing[3],
    gap: 2,
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    marginTop: Spacing[1],
  },
  statValue: {
    ...Typography.h4,
    color: Colors.text.primary,
  },
  routeHint: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    textAlign: 'right',
  },
  thickDivider: {
    height: 8,
    backgroundColor: Primitive.gray[100],
  },
  liveclimbBlock: {
    padding: Spacing[5],
  },
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing[3],
  },
  blockTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
  },
  blockCount: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    fontFamily: 'Menlo',
  },
  gallery: {
    flexDirection: 'row',
    gap: Spacing[2],
  },
  galleryItem: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Primitive.gray[100],
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
  galleryLabel: {
    position: 'absolute',
    bottom: 6,
    left: 8,
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 2,
  },
  actions: {
    paddingHorizontal: Spacing[5],
    paddingTop: 0,
    paddingBottom: Spacing[10],
    gap: Spacing[2],
  },
});
