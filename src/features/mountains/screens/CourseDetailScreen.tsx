import {
  Heart,
  Bus,
  Toilet,
  Backpack,
  Users,
} from 'phosphor-react-native';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Badge,
  Button,
  Card,
  MapMock,
  TopBar,
} from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';
import { findCourse, findMountain } from '../../../data';

export interface CourseDetailScreenProps {
  courseId?: string;
  onBack?: () => void;
  onStart?: () => void;
}

function formatTime(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

/**
 * 코스 상세 페이지 (03-03)
 */
export function CourseDetailScreen({
  courseId = 'c-bukhan-baekundae',
  onBack,
  onStart,
}: CourseDetailScreenProps) {
  const course = findCourse(courseId);
  const mountain = course ? findMountain(course.mountainId) : null;
  if (!course || !mountain) return <View style={styles.container} />;

  const diffLabel = { easy: '초급', medium: '중급', hard: '고급' }[course.difficulty];
  const diffVariant = { easy: 'success', medium: 'warning', hard: 'danger' }[course.difficulty] as
    | 'success'
    | 'warning'
    | 'danger';

  return (
    <View style={styles.container}>
      <TopBar
        title={course.name}
        onBack={onBack}
        rightAction={
          <Pressable hitSlop={8}>
            <Heart size={22} weight="fill" color={Colors.icon.muted} />
          </Pressable>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.section}>
          <MapMock
            radius={12}
            pins={[
              { x: 0.1, y: 0.8, user: true },
              { x: 0.85, y: 0.15, highlight: true },
            ]}
            route={{ path: 'M 10 80 Q 50 50 85 15', dashed: true }}
            style={{ height: 180 }}
          />

          <View style={styles.metaRow}>
            <Badge variant={diffVariant} pill size="sm">{diffLabel}</Badge>
            <Badge variant="default" pill size="sm">
              {mountain.name} · {mountain.height}m
            </Badge>
          </View>

          <View style={styles.statsGrid}>
            <Stat label="거리" value={`${(course.distance / 1000).toFixed(1)}km`} />
            <Stat label="예상 소요" value={formatTime(course.estimatedTime)} />
            <Stat label="고도차" value={`${course.elevationGain}m ↑`} />
            {course.ascentPercentage != null && (
              <Stat label="오르막" value={`${course.ascentPercentage}%`} />
            )}
          </View>

          <View style={styles.routeInfo}>
            <Text style={styles.routeItem}>
              <Text style={styles.routeLabel}>📍 출발  </Text>
              {course.startPoint}
            </Text>
            <Text style={styles.routeItem}>
              <Text style={styles.routeLabel}>📍 도착  </Text>
              {course.endPoint}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <InfoBlock
            icon={<Bus size={18} weight="fill" color={Colors.icon.default} />}
            title="교통편"
            desc="지하철 4호선 · 우이신설선 우이역"
          />
          <InfoBlock
            icon={<Toilet size={18} weight="fill" color={Colors.icon.default} />}
            title="편의시설"
            desc="화장실 (출발/중간) · 매점 (중간 휴게소)"
          />
          <InfoBlock
            icon={<Backpack size={18} weight="fill" color={Colors.icon.default} />}
            title="추천 장비"
            desc="등산화 · 등산 스틱 · 물 1L 이상"
          />
          <Card variant="filled" style={{ padding: Spacing[4] }}>
            <View style={styles.peopleRow}>
              <Users size={20} weight="fill" color={Colors.interactive.primary} />
              <View style={{ flex: 1 }}>
                <Text style={styles.peopleTitle}>다른 사람들의 기록</Text>
                <Text style={styles.peopleDesc}>
                  평균 소요 2h 10m · 128명 기록 기준
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button variant="primary" size="lg" fullWidth onPress={onStart}>
          기록하기 시작
        </Button>
      </View>
    </View>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

function InfoBlock({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <View style={styles.infoBlock}>
      {icon}
      <View style={{ flex: 1 }}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoDesc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary },
  section: { padding: Spacing[5], gap: Spacing[4] },
  metaRow: { flexDirection: 'row', gap: Spacing[2], flexWrap: 'wrap' },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing[2],
  },
  stat: {
    flexBasis: '48%',
    padding: Spacing[3],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border.default,
    backgroundColor: Colors.background.primary,
    gap: 2,
  },
  statLabel: {
    ...Typography.caption,
    color: Colors.text.tertiary,
  },
  statValue: {
    ...Typography.h5,
    color: Colors.text.primary,
  },
  routeInfo: {
    gap: Spacing[1],
  },
  routeItem: {
    ...Typography.body,
    color: Colors.text.primary,
  },
  routeLabel: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
  },
  divider: {
    height: 8,
    backgroundColor: Colors.background.tertiary,
  },
  infoBlock: {
    flexDirection: 'row',
    gap: Spacing[3],
    alignItems: 'flex-start',
    paddingVertical: Spacing[2],
  },
  infoTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    fontSize: 14,
  },
  infoDesc: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  peopleRow: {
    flexDirection: 'row',
    gap: Spacing[3],
    alignItems: 'center',
  },
  peopleTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
  },
  peopleDesc: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[4],
    backgroundColor: Colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
});
