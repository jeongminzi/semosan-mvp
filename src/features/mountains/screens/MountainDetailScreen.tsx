import { Warning, Heart } from 'phosphor-react-native';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Badge,
  Card,
  TopBar,
} from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';
import { coursesByMountain, findMountain } from '../../../data';
import type { CourseDifficulty } from '../../../types';

export interface MountainDetailScreenProps {
  mountainId?: string;
  onBack?: () => void;
  onCoursePress?: (courseId: string) => void;
}

const DIFFICULTY_LABEL: Record<CourseDifficulty, string> = {
  easy: '초급',
  medium: '중급',
  hard: '고급',
};

const DIFFICULTY_VARIANT: Record<CourseDifficulty, 'success' | 'warning' | 'danger'> = {
  easy: 'success',
  medium: 'warning',
  hard: 'danger',
};

function formatTime(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

/**
 * 산 상세 페이지 (03-02)
 */
export function MountainDetailScreen({
  mountainId = 'm-bukhan',
  onBack,
  onCoursePress,
}: MountainDetailScreenProps) {
  const mountain = findMountain(mountainId);
  const courses = coursesByMountain(mountainId);
  if (!mountain) return <View style={styles.container} />;

  return (
    <View style={styles.container}>
      <TopBar
        title={mountain.name}
        onBack={onBack}
        rightAction={
          <Pressable hitSlop={8}>
            <Heart size={22} weight="fill" color={Colors.icon.muted} />
          </Pressable>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: mountain.imageUrl }} style={styles.hero} />

        <View style={styles.info}>
          <Text style={styles.name}>{mountain.name}</Text>
          <Text style={styles.meta}>🏔 {mountain.height}m · 📍 {mountain.region}</Text>

          <Text style={styles.desc}>{mountain.description}</Text>

          <Card variant="default" style={styles.alert}>
            <View style={styles.alertRow}>
              <Warning size={18} weight="fill" color={Colors.status.warning} />
              <View style={{ flex: 1 }}>
                <Text style={styles.alertTitle}>탐방로 통제 정보</Text>
                <Text style={styles.alertDesc}>
                  대남문 코스 통제 중 (~ 2026-05-15)
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.coursesBlock}>
          <View style={styles.coursesHeader}>
            <Text style={styles.coursesTitle}>코스 목록</Text>
            <Text style={styles.coursesCount}>{courses.length}개</Text>
          </View>

          <View style={styles.courseList}>
            {courses.map((c, i) => (
              <Card
                key={c.id}
                variant={i === 1 ? 'default' : 'outlined'}
                onPress={() => onCoursePress?.(c.id)}
                style={i === 1 ? styles.courseCardActive : undefined}
              >
                <View style={styles.courseRow}>
                  <View style={{ flex: 1 }}>
                    <View style={styles.courseTop}>
                      <Text style={styles.courseName}>{c.name}</Text>
                      {i === 1 && <Text style={styles.starred}>⭐</Text>}
                    </View>
                    <Text style={styles.courseMeta}>
                      {(c.distance / 1000).toFixed(1)}km · {formatTime(c.estimatedTime)}
                    </Text>
                  </View>
                  <Badge
                    variant={DIFFICULTY_VARIANT[c.difficulty]}
                    pill
                    size="sm"
                  >
                    {DIFFICULTY_LABEL[c.difficulty]}
                  </Badge>
                </View>
              </Card>
            ))}
          </View>
        </View>

        <View style={{ height: Spacing[10] }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.primary },
  hero: {
    width: '100%',
    height: 180,
    backgroundColor: Colors.background.tertiary,
  },
  info: {
    padding: Spacing[5],
    gap: Spacing[3],
  },
  name: { ...Typography.h2, color: Colors.text.primary },
  meta: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    fontFamily: 'Menlo',
  },
  desc: {
    ...Typography.body,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  alert: {
    padding: Spacing[3],
    borderColor: Colors.status.warning,
    borderWidth: 1,
    backgroundColor: Colors.status.warningBg,
  },
  alertRow: {
    flexDirection: 'row',
    gap: Spacing[2],
    alignItems: 'flex-start',
  },
  alertTitle: {
    ...Typography.label,
    color: Colors.text.primary,
  },
  alertDesc: {
    ...Typography.caption,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  coursesBlock: {
    paddingHorizontal: Spacing[5],
  },
  coursesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: Spacing[3],
  },
  coursesTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
  },
  coursesCount: {
    ...Typography.bodySm,
    color: Colors.text.tertiary,
    fontFamily: 'Menlo',
  },
  courseList: { gap: Spacing[2] },
  courseCardActive: {
    borderWidth: 1.5,
    borderColor: Colors.interactive.primary,
  },
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
  },
  courseTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[1],
  },
  courseName: {
    ...Typography.h5,
    color: Colors.text.primary,
  },
  starred: { fontSize: 14 },
  courseMeta: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    fontFamily: 'Menlo',
    marginTop: 2,
  },
});
