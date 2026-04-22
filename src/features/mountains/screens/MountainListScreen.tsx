import { CloudSun, Bug, SmileySad } from 'phosphor-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
  Badge,
  Card,
  Chip,
  SearchBar,
  TabBar,
} from '../../../shared/components';
import { Colors, Spacing, Typography } from '../../../shared/constants';
import { mockMountains } from '../../../data';
import { Text } from 'react-native';

export interface MountainListScreenProps {
  onMountainPress?: (id: string) => void;
}

const FILTERS = ['전체', '초급', '중급', '고급'];
const REGIONS = ['서울', '경기', '강원', '충청', '전라', '경상', '제주'];

/**
 * 산 탐색 — 산 검색 및 목록 (03-01)
 */
export function MountainListScreen({ onMountainPress }: MountainListScreenProps) {
  const [filter, setFilter] = useState('전체');
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          placeholder="북한산, 관악산..."
          value={query}
          onChangeText={setQuery}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipRow}
        >
          {FILTERS.map((f) => (
            <Chip key={f} selected={filter === f} onPress={() => setFilter(f)}>
              {f}
            </Chip>
          ))}
          <View style={styles.chipDivider} />
          {REGIONS.slice(0, 3).map((r) => (
            <Chip key={r} variant="outline">
              {r}
            </Chip>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {mockMountains.map((m) => (
          <Card
            key={m.id}
            onPress={() => onMountainPress?.(m.id)}
            variant="outlined"
          >
            <View style={styles.itemRow}>
              <View style={styles.thumb}>
                <Text style={{ fontSize: 28 }}>🏔️</Text>
              </View>
              <View style={{ flex: 1, gap: Spacing[1] }}>
                <Text style={styles.name}>{m.name}</Text>
                <Text style={styles.meta}>
                  {m.region} · {m.height}m
                </Text>
                <View style={styles.tagRow}>
                  <Badge
                    size="sm"
                    variant="info"
                    leftIcon={<CloudSun size={10} weight="fill" color={Colors.status.info} />}
                  >
                    맑음
                  </Badge>
                  <Badge
                    size="sm"
                    variant="success"
                    leftIcon={<SmileySad size={10} weight="fill" color={Colors.status.success} />}
                  >
                    좋음
                  </Badge>
                  {m.id === 'm-dobong' && (
                    <Badge
                      size="sm"
                      variant="warning"
                      leftIcon={<Bug size={10} weight="fill" color={Colors.status.warning} />}
                    >
                      주의
                    </Badge>
                  )}
                </View>
              </View>
            </View>
          </Card>
        ))}
        <View style={{ height: Spacing[6] }} />
      </ScrollView>

      <TabBar active="mountains" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background.secondary },
  header: {
    backgroundColor: Colors.background.primary,
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[3],
    gap: Spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  chipRow: {
    gap: Spacing[2],
    alignItems: 'center',
  },
  chipDivider: {
    width: 1,
    height: 20,
    backgroundColor: Colors.divider,
    marginHorizontal: Spacing[1],
  },
  list: {
    padding: Spacing[4],
    gap: Spacing[3],
  },
  itemRow: {
    flexDirection: 'row',
    gap: Spacing[3],
    alignItems: 'center',
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: Colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { ...Typography.h5, color: Colors.text.primary },
  meta: {
    ...Typography.bodySm,
    color: Colors.text.secondary,
    fontFamily: 'Menlo',
  },
  tagRow: {
    flexDirection: 'row',
    gap: Spacing[1],
    marginTop: Spacing[1],
  },
});
