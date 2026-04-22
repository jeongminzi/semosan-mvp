import { CaretDown, CaretRight, PencilSimple } from 'phosphor-react-native';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Badge,
  Card,
  Chip,
  TabBar,
} from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';
import { findCourse, findMountain, mockHikeRecords } from '../../../data';

function formatDate(iso: string) {
  return iso.slice(0, 10);
}
function formatDuration(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export interface HomeListScreenProps {
  onRecordPress?: (id: string) => void;
  onToggleMap?: () => void;
}

/**
 * 홈 — 리스트형 (02-02)
 */
export function HomeListScreen({ onRecordPress, onToggleMap }: HomeListScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.sort}>
          <Text style={styles.sortText}>최신순</Text>
          <CaretDown size={12} weight="bold" color={Colors.text.secondary} />
        </Pressable>

        <View style={styles.toggleWrap}>
          <Pressable onPress={onToggleMap} style={styles.toggleOff}>
            <Text style={styles.toggleOffText}>지도</Text>
          </Pressable>
          <View style={styles.toggleOn}>
            <Text style={styles.toggleOnText}>리스트</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {mockHikeRecords.map((r) => {
          const m = findMountain(r.mountainId);
          const c = findCourse(r.courseId);
          return (
            <Card key={r.id} onPress={() => onRecordPress?.(r.id)} style={styles.recordCard}>
              <View style={styles.recordRow}>
                <Image
                  source={{ uri: m?.imageUrl ?? '' }}
                  style={styles.thumbnail}
                />
                <View style={styles.recordBody}>
                  <View style={styles.recordTop}>
                    <Text style={styles.recordTitle} numberOfLines={1}>
                      {m?.name} {c?.name}
                    </Text>
                    <Badge
                      variant={r.difficultyFeedback === 'harder' ? 'warning' : 'weak'}
                      size="sm"
                      pill
                    >
                      {r.summitReached ? '완등' : '중도'}
                    </Badge>
                  </View>
                  <Text style={styles.recordMeta}>
                    {formatDate(r.startTime)} · {(r.distance! / 1000).toFixed(1)}km ·{' '}
                    {formatDuration(r.duration!)}
                  </Text>
                  <View style={styles.recordAction}>
                    <PencilSimple size={12} weight="fill" color={Colors.text.tertiary} />
                    <Text style={styles.recordActionText}>후기 작성</Text>
                    <CaretRight size={12} weight="fill" color={Colors.text.tertiary} />
                  </View>
                </View>
              </View>
            </Card>
          );
        })}
        <View style={{ height: Spacing[6] }} />
      </ScrollView>

      <TabBar active="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[3],
    backgroundColor: Colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[1],
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[2],
  },
  sortText: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    fontWeight: '600',
  },
  toggleWrap: {
    flexDirection: 'row',
    backgroundColor: Colors.background.tertiary,
    borderRadius: 999,
    padding: 2,
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
  scroll: {
    padding: Spacing[4],
    gap: Spacing[3],
  },
  recordCard: {
    padding: Spacing[3],
    marginBottom: Spacing[3],
  },
  recordRow: {
    flexDirection: 'row',
    gap: Spacing[3],
  },
  thumbnail: {
    width: 88,
    height: 88,
    borderRadius: 12,
    backgroundColor: Colors.background.tertiary,
  },
  recordBody: {
    flex: 1,
    gap: Spacing[1],
  },
  recordTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing[2],
  },
  recordTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    flex: 1,
  },
  recordMeta: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    fontFamily: 'Menlo',
  },
  recordAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[1],
    marginTop: Spacing[2],
  },
  recordActionText: {
    ...Typography.caption,
    color: Colors.text.tertiary,
    fontWeight: '500',
  },
});

void Chip; // not used here
